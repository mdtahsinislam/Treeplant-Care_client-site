// import React from 'react';
// import { Link } from 'react-router';

// const Newplant = () => {
//     return (
//         <div className="max-w-7xl mx-auto px-4 text-center">
//             <h2 className="text-3xl font-bold my-4 text-green-600">Green New Plants</h2>
//             <h4 className="text-lg mb-10">
//                 The Green Plants is a privately claimed, family operated business, <br />
//                 serving Holmes and the surrounding districts in the Melbourne Panhandle since 2000.
//             </h4>

//             {/* Cards Grid */}
//             <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
//                 {/* 1. Produces Oxygen */}
//                 <div className="card bg-base-100 w-80 shadow-lg">
//                     <figure className="px-10 pt-10">
//                         <img
//                             src="https://i.ibb.co/Fkf5k5B0/p1.jpg"
//                             alt="Oxygen"
//                             className="w-24 h-24 rounded-xl"
//                         />
//                     </figure>
//                     <div className="card-body items-center text-center">
//                         <h2 className="card-title">1. Produces Oxygen</h2>
//                         <p>Trees absorb carbon dioxide and release oxygen, which is essential for human and animal life.</p>
//                         <div className="card-actions">
//                             <Link to="/viewdetails"> <button className="btn btn-primary">View Details</button></Link>
                           
//                         </div>
//                     </div>
//                 </div>

//                 {/* 2. Purifies Air */}
//                 <div className="card bg-base-100 w-80 shadow-lg">
//                     <figure className="px-10 pt-10">
//                         <img
//                             src="https://i.ibb.co/VYqpnTF9/p2.jpg"
//                             alt="Purify Air"
//                             className="w-24 h-24 rounded-xl"
//                         />
//                     </figure>
//                     <div className="card-body items-center text-center">
//                         <h2 className="card-title">2. Purifies Air</h2>
//                         <p>Trees filter pollutants like dust, smoke, and harmful gases, making the air cleaner and healthier to breathe.</p>
//                         <div className="card-actions">
//                             <button className="btn btn-primary">View Details</button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* 3. Reduces Soil Erosion */}
//                 <div className="card bg-base-100 w-80 shadow-lg">
//                     <figure className="px-10 pt-10">
//                         <img
//                             src="https://i.ibb.co/0SVR6Xz/p3.jpg"
//                             alt="Soil Erosion"
//                             className="w-24 h-24 rounded-xl"
//                         />
//                     </figure>
//                     <div className="card-body items-center text-center">
//                         <h2 className="card-title">3. Reduces Soil Erosion</h2>
//                         <p>Tree roots hold soil in place, preventing erosion caused by wind and water.</p>
//                         <div className="card-actions">
//                             <button className="btn btn-primary">View Details</button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* 4. Controls Climate */}
//                 <div className="card bg-base-100 w-80 shadow-lg">
//                     <figure className="px-10 pt-10">
//                         <img
//                             src="https://i.ibb.co/NhHxmkr/p4.jpg"
//                             alt="Climate Control"
//                             className="w-24 h-24 rounded-xl"
//                         />
//                     </figure>
//                     <div className="card-body items-center text-center">
//                         <h2 className="card-title">4. Controls Climate</h2>
//                         <p>Trees provide shade, cool the environment, and help in regulating temperature and rainfall.</p>
//                         <div className="card-actions">
//                             <button className="btn btn-primary">View Details</button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* 5. Supports Wildlife */}
//                 <div className="card bg-base-100 w-80 shadow-lg">
//                     <figure className="px-10 pt-10">
//                         <img
//                             src="https://i.ibb.co/VWw7fBLT/p5.jpg"
//                             alt="Wildlife"
//                             className="w-24 h-24 rounded-xl"
//                         />
//                     </figure>
//                     <div className="card-body items-center text-center">
//                         <h2 className="card-title">5. Supports Wildlife</h2>
//                         <p>Trees provide shelter, food, and nesting places for birds, insects, and animals.</p>
//                         <div className="card-actions">
//                             <button className="btn btn-primary">View Details</button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* 6. Conserves Water */}
//                 <div className="card bg-base-100 w-80 shadow-lg">
//                     <figure className="px-10 pt-10">
//                         <img
//                             src="https://i.ibb.co/21699TC9/p7.jpg"
//                             alt="Water Conservation"
//                             className="w-24 h-24 rounded-xl"
//                         />
//                     </figure>
//                     <div className="card-body items-center text-center">
//                         <h2 className="card-title">6. Conserves Water</h2>
//                         <p>Trees reduce water runoff and allow more water to seep into the ground, recharging underground water sources.</p>
//                         <div className="card-actions">
//                             <button className="btn btn-primary">View Details</button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* 7. Improves Mental Health */}
//                 <div className="card bg-base-100 w-80 shadow-lg">
//                     <figure className="px-10 pt-10">
//                         <img
//                             src="https://i.ibb.co/wZDjzVkC/p6.jpg"
//                             alt="Mental Health"
//                             className="w-24 h-24 rounded-xl"
//                         />
//                     </figure>
//                     <div className="card-body items-center text-center">
//                         <h2 className="card-title">7. Improves Mental Health</h2>
//                         <p>Being around trees and nature reduces stress, improves mood, and promotes mental well-being.</p>
//                         <div className="card-actions">
//                             <button className="btn btn-primary">View Details</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Newplant;

//chat gpt


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Newplant = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch('https://treeplantcare-serversite.vercel.app/plants')
      .then(res => res.json())
      .then(data => setPlants(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold my-4 text-green-600">Green New Plants</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {plants.map((plant) => (
          <div key={plant._id} className="card bg-base-100 w-80 shadow-lg">
            <figure className="px-10 pt-10">
              <img src={plant.photo} alt={plant.name} className="w-24 h-24 rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{plant.name}</h2>
              <p>{plant.description.slice(0, 70)}...</p>
              <div className="card-actions">
                <Link to={`/viewdetails/${plant._id}`}>
                  <button className="btn btn-primary">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newplant;
