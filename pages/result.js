import React, { useState } from 'react';
import Share from './share';

const Result = ({ machineWins, humanWins, onPlayAgain }) => {
  const [isShareDialogOpen, setShareDialogOpen] = useState(false);

  const onClickShare = () => {
    setShareDialogOpen(true);
  };

  const onClickPlayAgain = () => {
    onPlayAgain();
  };

  const handleShareCloseDialog = () => {
    setShareDialogOpen(false);
  };
  const winner =
    machineWins >= humanWins
      ? `Machine (${machineWins} - ${humanWins})`
      : `Human(${humanWins} - ${machineWins})`;
  const tagline =
    winner === 'Machine'
      ? 'Machine Conquers All , Absolute Domination Achieved!!'
      : 'The Power of Humanity, Machine are not there yet!!';

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-white p-4">
        <div className="flex flex-grow text-center	justify-center w-auto divide-y">
          <h2 className="text-lg font-bold mb-2 border-b">Result</h2>
        </div>
        <p className="text-xl">Winner: {winner}</p>
        <blockquote className="p-4">
          <p className="text-xl italic font-medium  text-gray-900">{tagline}</p>
        </blockquote>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={onClickPlayAgain}
        >
          Let's Play Again
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 ml-4"
          onClick={onClickShare}
        >
          Share
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4 ml-4"
          onClick={onClickPlayAgain}
        >
          Close
        </button>
      </div>
      {isShareDialogOpen && <Share onCloseShare={handleShareCloseDialog} />}
    </div>
  );
};

export default Result;
