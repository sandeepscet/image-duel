import React, { useState, useEffect } from 'react';
import Compare from './compare';
import Result from './result';
import Loader from './loader';

const Main = () => {
  const [round, setRound] = useState(1);
  const [images, setImages] = useState([]);
  const [result, setResult] = useState(false);
  const [loader, setLoader] = useState(false);
  const [totalMachineWins, setTotalMachineWins] = useState(0);
  const [totalHumanWins, setTotalHumanWins] = useState(0);

  useEffect(() => {
    fetchImages();
  }, []);

  function getRandomElements(inputArray) {
    if (inputArray.length <= 5) {
      return inputArray;
    }

    const outputArray = [];
    const usedIndices = new Set();

    while (outputArray.length < 5) {
      const randomIndex = Math.floor(Math.random() * inputArray.length);

      if (!usedIndices.has(randomIndex)) {
        usedIndices.add(randomIndex);
        outputArray.push(inputArray[randomIndex]);
      }
    }

    return outputArray;
  }

  const fetchImages = async () => {
    try {
      setLoader(true);
      const response = await fetch(`/api/images`);
      const data = await response.json();
      setLoader(false);
      setImages(getRandomElements(data));
    } catch (error) {
      console.log(error);
    }
  };

  const updateStats = async (totalMachineWins, totalHumanWins) => {
    try {
      const winner = totalMachineWins >= totalHumanWins ? 1 : 0;
      const response = await fetch(`/api/stats?winner=${winner}`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          winner,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageSelect = (type) => {
    setLoader(true);
    setTimeout(() => {
      // programmatic delay of loader for context switch
      try {
        if (type === 0) {
          setTotalHumanWins(totalHumanWins + 1);
        } else {
          setTotalMachineWins(totalMachineWins + 1);
        }

        if (round === images.length) {
          setResult(true);
          updateStats(totalMachineWins, totalHumanWins);
        } else {
          setRound(round + 1);
        }
        setLoader(false);
      } catch (error) {
        console.log(error);
        setLoader(false);
      }
    }, 500);
  };

  const handleOnPlayAgain = () => {
    setResult(false);
    fetchImages();
    setRound(1);
    setTotalHumanWins(0);
    setTotalMachineWins(0);
  };

  return (
    <div className="container mx-auto p-4 text-center">
      {loader && <Loader />}
      {!loader && (
        <Compare
          round={round}
          images={images}
          onImageSelect={handleImageSelect}
        />
      )}
      {result && (
        <Result
          machineWins={totalMachineWins}
          humanWins={totalHumanWins}
          onPlayAgain={handleOnPlayAgain}
        />
      )}
    </div>
  );
};

export default Main;
