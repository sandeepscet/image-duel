import React, { useState, useEffect } from 'react';
import Loader from './loader';

const Stats = ({ onCloseStats }) => {
  const [loader, setLoader] = useState(false);
  const [stats, setStats] = useState({ humanWins: 0, machineWins: 0 });

  const handleStatsCloseDialog = () => {
    onCloseStats && onCloseStats();
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setLoader(true);
      const response = await fetch(`/api/stats`);
      const data = await response.json();
      setStats(data[0]);
      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-white p-4">
        <div className="flex flex-grow text-center	justify-center w-auto divide-y">
          <h2 className="text-lg font-bold mb-2 border-b">
            Who is winning globally?
          </h2>
        </div>
        {loader && <Loader />}
        {!loader && (
          <>
            <table className="border-collapse w-full text-left mt-2">
              <thead>
                <tr>
                  <th className="bg-gray-200 font-bold text-sm p-2">Human</th>
                  <th className="bg-gray-200 font-bold text-sm p-2">Machine</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 p-2 text-sm">
                    {stats.humanWins}
                  </td>
                  <td className="border border-gray-200 p-2 text-sm">
                    {stats.machineWins}
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="text-center text-3xl font-bold py-4">
              {stats.machineWins >= stats.humanWins
                ? 'Machine are winning so far'
                : 'Machine are not there yet!!'}
            </div>
          </>
        )}
        <button
          onClick={handleStatsCloseDialog}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 float-right"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Stats;
