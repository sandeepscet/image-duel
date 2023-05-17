import React from 'react';
import Image from 'next/image';

const Compare = ({ round, images = [], onImageSelect }) => {
  const handleImageClick = (type) => {
    onImageSelect(type);
  };

  const shuffleArray = (array) => {
    if (array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    return array;
  };

  const roundImages = shuffleArray(images[round - 1]);

  return (
    <div className="flex justify-center mb-4 ">
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold mb-2">
          Round {' ' + round + ' (Out of ' + images.length + ')'}
        </h2>
        <p className="text-gray-600">Tap on the Real photo</p>
        <div className="container flex flex-wrap mx-auto justify-center ">
          {roundImages &&
            roundImages.map((image, index) => (
              <div className="w-full p-2  rounded lg:w-1/3" key={index}>
                <button
                  key={index}
                  className="border-4 border-transparent"
                  onClick={() => handleImageClick(image.type)}
                >
                  <Image
                    src={image.src}
                    width={500}
                    height={500}
                    quality={100}
                    alt={`Image ${index}`}
                    loading="eager"
                    className="border-2	 shadow-lg hover:shadow-black hover:shadow-2xl object-cover"
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
