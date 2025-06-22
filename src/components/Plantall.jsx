



// Plantall.jsx *********  correct in time

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Plantall = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("https://treeplantcare-serversite.vercel.app/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);



  return (
    <div className="overflow-x-auto max-w-7xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-600">All Plants</h2>
      <table className="table w-full">
        <thead>
          <tr className="bg-gray-300 text-base text-black">
            <th>#</th>
            <th>Image</th>
            <th>Plant Name</th>
            <th>Category</th>
            <th>Watering Frequency</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {plants.map((pl, index) => (
            <tr key={pl._id} className="hover shadow-lg">
              <td>{index + 1}</td>
              <td>
                <img
                  src={pl.photo}
                  alt={pl.name}
                  className="w-16 h-16 object-cover rounded"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/100?text=No+Image"; }}
                />
              </td>
              <td>{pl.name}</td>
              <td>{pl.category}</td>
              <td>{pl.wateringFrequency}</td>
              <td>
                <Link to={`/viewdetails/${pl._id}`} className="btn btn-sm btn-primary">
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Plantall; //correct in last time





