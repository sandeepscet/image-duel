import React from 'react';

const Result = ({ winner, onPlayAgain, onShare }) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">Result</h2>
      <p className="text-lg">Winner: {winner}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={onPlayAgain}
      >
        Let's Play Again
      </button>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 ml-4"
        onClick={onShare}
      >
        Share
      </button>
    </div>
  );
};

export default Result;
