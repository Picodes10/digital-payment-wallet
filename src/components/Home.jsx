import React from "react";

const Home = () => {
  return (
    <div className="bg-blue-100 py-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
            One Way
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">
            Round Trip
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-gray-700">From</label>
            <input
              type="text"
              placeholder="DEL"
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">To</label>
            <input
              type="text"
              placeholder="BOM"
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Departure Date</label>
            <input type="date" className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block text-gray-700">
              Travellers & Cabin Class
            </label>
            <input
              type="text"
              placeholder="1 Traveller, Economy"
              className="w-full border p-2 rounded"
            />
          </div>
        </div>
        <div className="mt-4 flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Search Flights
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
