import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";

const FetchApi = () => {
  const [datas, setData] = useState(null);
  const [wholeData, setWholeData] = useState(null);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      const jsondata = await res.json();
      console.log(jsondata);
      setData(jsondata);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchWholeData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      const jsondata = await res.json();
      const value = JSON.stringify(jsondata);
      setWholeData(value);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const clearData = () => {
    setData(null);
    setWholeData(null);
  };

  return (
    <div className="bg-[#333b47] h-full text-white">
      <div className="p-5">
        <h1 className="text-center text-xl mb-5 uppercase">
          Fetch Data from API
        </h1>
        {datas && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Username</th>
                  <th className="px-6 py-3">Email</th>
                </tr>
              </thead>
              <tbody>
                {datas.map((data) => (
                  <tr
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                    key={data.id}
                  >
                    <td className="px-6 py-3">{data.name}</td>
                    <td className="px-6 py-3">{data.username}</td>
                    <td className="px-6 py-3">{data.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="my-3">
          <h1 className="text-center text-xl">JSON Data</h1>
          {wholeData && (
            <div className="border-solid border-2 border-gray-50 rounded-lg p-3 my-5 overflow-x-auto">
              <p>{wholeData}</p>
            </div>
          )}
        </div>
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={fetchData}
          >
            Fetch Data
          </button>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={fetchWholeData}
          >
            Fetch Whole Data
          </button>
          <button
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={clearData}
          >
            Clear
          </button>
          <Link to="/travelmug">
            <button className="travelmug-btn">Go to Travel Mug KDS</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FetchApi;
