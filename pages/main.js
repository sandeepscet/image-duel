import React, { useState, useEffect } from 'react';
import Compare from './Compare';
import Result from './Result';

const Main = () => {
  const [round, setRound] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  const [totalMachineWins, setTotalMachineWins] = useState(0);
  const [totalHumanWins, setTotalHumanWins] = useState(0);

  useEffect(() => {
    fetchImages();
  }, [round]);

  const fetchImages = async () => {
    try {
      const response = await fetch(
        `https://api.example.com/images?previousbatches=a,b`
      );
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageSelect = (image, winner) => {
    setSelectedImage(image);
    setRound(round + 1);
    if (winner === 'machine') {
      setTotalMachineWins(totalMachineWins + 1);
    } else if (winner === 'human') {
      setTotalHumanWins(totalHumanWins + 1);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Are we there yet?</h1>
      <Compare
        images={images}
        selectedImage={selectedImage}
        onImageSelect={handleImageSelect}
      />
      <Result machineWins={totalMachineWins} humanWins={totalHumanWins} />
    </div>
  );
};

export default Main;
