import React from 'react';

const Compare = ({ round, images, onImageSelect }) => {
  const handleImageClick = (type) => {
    onImageSelect(type);
  };
  const roundImages = images[round - 1];
  return (
    <div className="flex justify-center mb-4">
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold mb-2">
          Round {' ' + round + ' (Out of ' + images.length + ')'}
        </h2>
        <p className="text-gray-600 mb-4">Tap on the Real photo</p>
        <div className="container flex flex-wrap mx-auto">
          {roundImages &&
            roundImages.map((image, index) => (
              <div className="w-full p-2 rounded lg:w-1/3" key={index}>
                <button
                  key={index}
                  className="border-4 border-transparent"
                  onClick={() => handleImageClick(image.type)}
                >
                  <img
                    src={image.src}
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
