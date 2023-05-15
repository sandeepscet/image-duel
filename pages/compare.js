import React from 'react';

const Compare = ({ images, selectedImage, onImageSelect }) => {
  const handleImageClick = (image) => {
    if (selectedImage) {
      // Determine the winner based on some comparison logic
      const winner = Math.random() < 0.5 ? 'machine' : 'human';
      onImageSelect(image, winner);
    }
  };

  return (
    <div className="flex justify-center mb-4">
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold mb-2">Round {images.length}</h2>
        <p className="text-gray-600 mb-4">Select one of the images below:</p>
        <div className="flex">
          {images.map((image, index) => (
            <button
              key={index}
              className={`border-4 border-transparent ${
                selectedImage === image ? 'border-blue-500' : 'border-gray-300'
              }`}
              onClick={() => handleImageClick(image)}
            >
              <img src={image} alt={`Image ${index}`} className="h-24 w-24 object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Compare;
