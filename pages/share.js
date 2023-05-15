import React from 'react';

const Share = ({ imageUrl }) => {
  const shareOnFacebook = () => {
    if (navigator.share) {
      navigator.share({
        url: imageUrl,
        text: 'Check out the result of Human vs Machine!',
      });
    }
  };

  const shareOnLinkedIn = () => {
    if (navigator.share) {
      navigator.share({
        url: imageUrl,
        title: 'Human vs Machine',
        text: 'Check out the result of Human vs Machine!',
      });
    }
  };

  const shareOnTwitter = () => {
    if (navigator.share) {
      navigator.share({
        url: imageUrl,
        title: 'Human vs Machine',
        text: 'Check out the result of Human vs Machine!',
      });
    }
  };

  const shareOnWhatsApp = () => {
    if (navigator.share) {
      navigator.share({
        url: imageUrl,
        title: 'Human vs Machine',
        text: 'Check out the result of Human vs Machine!',
      });
    }
  };

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">Share</h2>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
        onClick={shareOnFacebook}
      >
        Share on Facebook
      </button>
      <button
        className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mt-2 ml-4"
        onClick={shareOnLinkedIn}
      >
        Share on LinkedIn
      </button>
      <button
        className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2 ml-4"
        onClick={shareOnTwitter}
      >
        Share on Twitter
      </button>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4"
        onClick={shareOnWhatsApp}
      >
        Share on WhatsApp
      </button>
    </div>
  );
};

export default Share;
