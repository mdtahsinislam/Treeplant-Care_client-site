



////Worked


// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../contexts/AuthContext";
// import { Link } from "react-router-dom";

// const Myplant = () => {
//   const { user } = useContext(AuthContext);
//   const [plants, setPlants] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (user?.email) {
//       fetch(`https://treeplantcare-serversite.vercel.app/plants?email=${user.email}`)
//         .then(res => res.json())
//         .then(data => {
//           setPlants(data);
//           setLoading(false);
//         })
//         .catch(error => {
//           console.error("Error fetching user plants:", error);
//           setLoading(false);
//         });
//     }
//   }, [user?.email]);

//   if (loading) {
//     return <div className="text-center mt-10">Loading your plants...</div>;
//   }

//   return (
//     <div className="max-w-7xl mx-auto mt-10 px-4">
//       <h2 className="text-2xl font-bold mb-6 text-center text-green-600">My Plants</h2>
//       {plants.length === 0 ? (
//         <p className="text-center text-gray-500">No plants added by you yet.</p>
//       ) : (
//         <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//           {plants.map((plant) => (
//             <div key={plant._id} className="card bg-white shadow-lg rounded-lg p-4">
//               <img
//                 src={plant.photo}
//                 alt={plant.name}
//                 className="w-full h-40 object-cover rounded"
//                 onError={(e) => {
//                   e.target.src = "https://via.placeholder.com/150?text=No+Image";
//                 }}
//               />
//               <div className="mt-4">
//                 <h3 className="text-lg font-bold text-green-700">{plant.name}</h3>
//                 <p className="text-gray-600">Category: {plant.category}</p>
//                 <p className="text-gray-600">Watering: {plant.wateringFrequency}</p>
//                 <Link to={`/viewdetails/${plant._id}`} className="btn btn-sm btn-primary mt-2">
//                   View Details
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Myplant;
//now login doctor@GiMailShirt.com it login i want her added data (not full websit all user data) card give this feature 


// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../contexts/AuthContext";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";

// const Myplant = () => {
//   const { user } = useContext(AuthContext);
//   const [plants, setPlants] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchPlants = () => {
//     if (user?.email) {
//       fetch(`https://treeplantcare-serversite.vercel.app/plants?email=${user.email}`)
//         .then(res => res.json())
//         .then(data => {
//           setPlants(data);
//           setLoading(false);
//         })
//         .catch(error => {
//           console.error("Error fetching user plants:", error);
//           setLoading(false);
//         });
//     }
//   };

//   useEffect(() => {
//     fetchPlants();
//   }, [user?.email]);

//   const handleDelete = (id) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: "This plant will be permanently deleted.",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#d33',
//       cancelButtonColor: '#3085d6',
//       confirmButtonText: 'Yes, delete it!'
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`https://treeplantcare-serversite.vercel.app/plants/${id}`, {
//           method: "DELETE"
//         })
//           .then(res => res.json())
//           .then(data => {
//             if (data.deletedCount > 0) {
//               Swal.fire('Deleted!', 'Plant has been deleted.', 'success');
//               fetchPlants(); // refresh the list
//             } onclick Update  it show success after update it show this Swal.fire({
//                             icon: "error",
//                             title: "Google Login Failed",
//                             text: error.message || "An unexpected error occurred. Please try again.",
//                           });please add this feature
//           });
//       }
//     });
//   };

//   if (loading) {
//     return <div className="text-center mt-10">Loading your plants...</div>;
//   }

//   return (
//     <div className="max-w-7xl mx-auto mt-10 px-4">
//       <h2 className="text-2xl font-bold mb-6 text-center text-green-600">My Plants</h2>
//       {plants.length === 0 ? (
//         <p className="text-center text-gray-500">No plants added by you yet.</p>
//       ) : (
//         <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//           {plants.map((plant) => (
//             <div key={plant._id} className="card bg-white shadow-lg rounded-lg p-4">
//               <img
//                 src={plant.photo}
//                 alt={plant.name}
//                 className="w-full h-40 object-cover rounded"
//                 onError={(e) => {
//                   e.target.src = "https://via.placeholder.com/150?text=No+Image";
//                 }}
//               />
//               <div className="mt-4">
//                 <h3 className="text-lg font-bold text-green-700">{plant.name}</h3>
//                 <p className="text-gray-600">Category: {plant.category}</p>
//                 <p className="text-gray-600">Watering: {plant.wateringFrequency}</p>
//                 <div className="mt-3 space-x-2">
//                   <Link to={`/update/${plant._id}`}    className="btn btn-sm btn-warning">Update</Link>
//                   <button onClick={() => handleDelete(plant._id)} className="btn btn-sm btn-error">Delete</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Myplant;

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Myplant = () => {
  const { user } = useContext(AuthContext);
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPlants = () => {
    if (user?.email) {
      console.log("Myplant.jsx: Fetching plants for email:", user.email); // Debugging log
      fetch(`https://treeplantcare-serversite.vercel.app/plants?email=${user.email}`)
        .then(res => {
          console.log("Myplant.jsx: Fetch response status:", res.status); // Debugging log
          if (!res.ok) {
            // Throw an error if the response is not OK (e.g., 404, 500)
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.json();
        })
        .then(data => {
          console.log("Myplant.jsx: Received plants data:", data); // Debugging log
          setPlants(data);
          setLoading(false);
        })
        .catch(error => {
          console.error("Myplant.jsx: Error fetching user plants:", error); // Debugging log
          setLoading(false);
          // Show a generic error message for fetching plants
          Swal.fire({
            icon: "error",
            title: "Failed to load plants",
            text: "Could not fetch your plants. Please try again later."
          });
        });
    } else {
      console.log("Myplant.jsx: User not logged in or email not available."); // Debugging log
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlants();
  }, [user?.email]); // Re-fetch plants when user email changes (e.g., login/logout)

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "This plant will be permanently deleted.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://treeplantcare-serversite.vercel.app/plants/${id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Plant has been deleted.', 'success');
              fetchPlants(); // Refresh the list after successful deletion
            } else {
              // If deletedCount is 0, it means plant was not found or not deleted
              Swal.fire('Failed!', 'Could not delete the plant. It might not exist.', 'error');
            }
          })
          .catch(error => {
            console.error("Myplant.jsx: Error deleting plant:", error); // Debugging log
            Swal.fire('Error!', 'An error occurred while deleting the plant.', 'error');
          });
      }
    });
  };

  if (loading) {
    return <div className="text-center mt-10">Loading your plants...</div>;
  }

  // If no user is logged in, display a message.
  // This could also be handled by route protection at a higher level.
  if (!user) {
    return (
      <div className="text-center mt-10 text-red-500">
        Please log in to see your plants.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-600">My Plants</h2>
      {plants.length === 0 ? (
        <p className="text-center text-gray-500">No plants added by you yet.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {plants.map((plant) => (
            <div key={plant._id} className="card bg-white shadow-lg rounded-lg p-4">
              <img
                src={plant.photo}
                alt={plant.name}
                className="w-full h-40 object-cover rounded"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/150?text=No+Image"; // Fallback image
                }}
              />
              <div className="mt-4">
                <h3 className="text-lg font-bold text-green-700">{plant.name}</h3>
                <p className="text-gray-600">Category: {plant.category}</p>
                <p className="text-gray-600">Watering: {plant.wateringFrequency}</p>
                <div className="mt-3 space-x-2">
                  {/* The Update button navigates to a different page where update logic resides */}
                  <Link to={`/update/${plant._id}`} className="btn btn-sm btn-warning">Update</Link>
                  {/* Delete button triggers the handleDelete function */}
                  <button onClick={() => handleDelete(plant._id)} className="btn btn-sm btn-error">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Myplant;
//i want to this page private only login user to see   not change my code add the feature 