import React, { useState, useEffect } from 'react';
import Compare from './compare';
import Result from './result';

const Main = () => {
  const [round, setRound] = useState(1);
  const [images, setImages] = useState([]);
  const [result, setResult] = useState(false);
  const [totalMachineWins, setTotalMachineWins] = useState(0);
  const [totalHumanWins, setTotalHumanWins] = useState(0);

  useEffect(() => {
    fetchImages();
  }, [round]);

  const fetchImages = async () => {
    try {
      const response = await fetch(`/api/images?previousbatches=a,b`);
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageSelect = (type) => {
    if (type === 0) {
      setTotalHumanWins(totalHumanWins + 1);
    } else {
      setTotalMachineWins(totalMachineWins + 1);
    }

    if (round === images.length) {
      setResult(true);
    } else {
      setRound(round + 1);
    }
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
      <Compare
        round={round}
        images={images}
        onImageSelect={handleImageSelect}
      />
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
