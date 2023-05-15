import React from 'react';

const Compare = ({ images, selectedImage, onImageSelect }) => {
  const handleImageClick = (image) => {
    if (selectedImage) {
      // Determine the winner based on some comparison logic
      const winner = Math.random() < 0.5 ? 'Machine' : 'Human';
      onImageSelect(image, winner);
    }
  };

  return (
    <div className="flex justify-center mb-4">
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold mb-2">Round{images.length}</h2>
        <p className="text-gray-600 mb-4">Choose the Real photo:</p>
        <div className="container flex flex-wrap mx-auto">
          {images.map((image, index) => (
            <div className="w-full p-2 rounded lg:w-1/3" key={index}>
              <button
                key={index}
                className={`border-4 border-transparent ${
                  selectedImage === image
                    ? 'border-blue-500'
                    : 'border-gray-300'
                }`}
                onClick={() => handleImageClick(image)}
              >
                <img
                  src={image}
                  alt={`Image ${index}`}
                  className="h-48 w-48 object-cover"
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Compare;
