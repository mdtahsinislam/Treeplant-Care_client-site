// // import React from 'react';

// // const Plantall = () => {
// //     return (
// //         <div>
// //             <h1>all plant</h1>
// //         </div>
// //     );
// // };

// // export default Plantall;




// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Plantall = () => {
//   const [plants, setPlants] = useState([]);

//   useEffect(() => {
//     fetch("https://treeplantcare-serversite.vercel.app/plants")
//       .then(res => res.json())
//       .then(setPlants);
//   }, []);

//   return (
//     // <div className="max-w-6xl mx-auto p-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//     //   {plants.map(pl => (
//     //     <div className="card bg-base-100 shadow-lg" key={pl._id}>
//     //       <figure><img src={pl.photo} className="w-24 h-24 rounded-full mx-auto mt-4" /></figure>
//     //       <div className="card-body text-center">
//     //         <h2 className="card-title">{pl.plantName}</h2>
//     //         <p>{pl.category}</p>
//     //         <Link to={`/viewdetails/${pl._id}`} className="btn btn-primary">View Details</Link>
//     //       </div>
//     //     </div>
//     //   ))}
//     // </div>




// <div>
//     {plants.map(pl => (
//         <div className="overflow-x-auto">
//   <table className="table">
//     {/* head */}
//     <thead>
//       <tr>
//         <th>
//           <label>
//             <input type="checkbox" className="checkbox" />
//           </label>
//         </th>
//         <th>Serial</th>
//           <th>Image</th>
//         <th>Plant Name</th>
      
//         <th>Category</th>
//         <th>Watering frequency</th>
//        <th></th>
//       </tr>
//     </thead>
//     <tbody>
//       {/* row 1 */}
//       <tr>
        
        
//         <td>
//           <div className="flex items-center gap-3">
//             <div className="avatar">
//               <div className="mask mask-squircle h-12 w-12">
//                 <img
//                   src="https://img.daisyui.com/images/profile/demo/2@94.webp"
//                   alt="Avatar Tailwind CSS Component" />
//               </div>
//             </div>
//             <div>
//               <div className="font-bold">Hart Hagerty</div>
//               <div className="text-sm opacity-50">United States</div>
//             </div>
//           </div>
//         </td>
//         <td>
//           Zemlak, Daniel and Leannon
//           <br />
//           <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
//         </td>
//         <td>Purple</td>
//         <td></td>
//         <td></td>
//         <td>Details</td>
//         <td> <Link to={`/viewdetails/${pl._id}`} className="btn btn-primary">View Details</Link></td>
//       </tr>
      
      
//     </tbody>
   
   
//   </table>
// </div>
//     ))}
// </div>
//   );
// };

// export default Plantall;
// name
// "a"
// photo
// "https://i.ibb.co/Fkf5k5B0/p1.jpg"
// category
// "fern"
// description
// "Plant is good for environment"
// careLevel
// "moderate"
// wateringFrequency
// "good"
// lastWatered
// "2025-06-09"
// nextWatering
// "2025-06-17"
// healthStatus
// "nice"
// userName
// "Abc"
// userEmail
// "a@gmail.com"
// createdAt
// "2025-06-16T09:44:03.029Z"
















//chat gpt 



// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Plantall = () => {
//   const [plants, setPlants] = useState([]);

//   useEffect(() => {
//     fetch("https://treeplantcare-serversite.vercel.app/plants")
//       .then((res) => res.json())
//       .then((data) => setPlants(data));
//   }, []);

//   return (
//     <div className="overflow-x-auto max-w-7xl mx-auto mt-10">
//       <h2 className="text-2xl font-bold mb-4 text-center text-green-600">All Plants</h2>
//       <table className="table w-full">
//         <thead>
//           <tr className="bg-gray-300 text-base text-black">
//             <th>#</th>
//             <th>Image</th>
//             <th>Plant Name</th>
//             <th>Category</th>
//             <th>Watering Frequency</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {plants.map((pl, index) => (
//             <tr key={pl._id} className="hover shadow-lg">
//               <td>{index + 1}</td>
//               <td>
//                 <img
//                   src={pl.photo}
//                   alt={pl.plantName}
//                   className="w-16 h-16 object-cover rounded"
//                 />
//               </td>
//               <td>{pl.name}</td>
//               <td>{pl.category}</td>
//               <td>{pl.wateringFrequency}</td>
//               <td>
//                 <Link to={`/viewdetails/${pl._id}`} className="btn btn-sm btn-primary">
//                   View Details
//                 </Link>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Plantall;



// Plantall.jsx

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

export default Plantall; 
