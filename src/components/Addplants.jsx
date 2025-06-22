



////chat gpt two

// Addplants.jsx

// import React, { useState } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';

// const Addplants = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     photo: '',
//     category: '',
//     description: '',
//     careLevel: '',
//     wateringFrequency: '',
//     lastWatered: '',
//     nextWatering: '',
//     healthStatus: '',
//     userName: '',
//     userEmail: '',
//     createdAt: new Date().toISOString()
//   });

//   const handleChange = (e) => {
//     setFormData({...formData, [e.target.name]: e.target.value});
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post('/plants', formData);
//       if (res.data.insertedId) {
//         toast.success("✅ Plant Added Successfully!");
//         setFormData({
//           name: '',
//           photo: '',
//           category: '',
//           description: '',
//           careLevel: '',
//           wateringFrequency: '',
//           lastWatered: '',
//           nextWatering: '',
//           healthStatus: '',
//           userName: '',
//           userEmail: '',
//           createdAt: new Date().toISOString()
//         });
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("❌ Error adding plant");
//     }
//   };

//   return (
//     <div className="hero bg-base-200 min-h-screen">
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         <div className="card bg-base-100 w-full max-w-xl shadow-2xl">
//           <div className="card-body">
//             <h1 className="text-3xl font-bold text-center text-green-700 mb-4">Add Plant</h1>
//             <form onSubmit={handleSubmit} className="space-y-4">

//               {/* Text Inputs */}
//               {[
//                 { label: "Plant Name", name: "name" },
//                 { label: "Photo URL", name: "photo" },
//                 { label: "Description", name: "description" },
//                 { label: "Watering Frequency", name: "wateringFrequency" },
//                 { label: "Health Status", name: "healthStatus" },
//                 { label: "User Name", name: "userName" },
//                 { label: "User Email", name: "userEmail", type: "email" },
//               ].map(({ label, name, type = "text" }) => (
//                 <div key={name}>
//                   <label className="label">{label}</label>
//                   <input
//                     type={type}
//                     name={name}
//                     value={formData[name]}
//                     onChange={handleChange}
//                     className="input input-bordered w-full"
//                     placeholder={label}
//                     required
//                   />
//                 </div>
//               ))}

//               {/* Dropdowns */}
//               <div>
//                 <label className="label">Category</label>
//                 <select name="category" onChange={handleChange} className="select select-bordered w-full" required>
//                   <option value="">-- Select Category --</option>
//                   <option value="succulent">Succulent</option>
//                   <option value="fern">Fern</option>
//                   <option value="flowering">Flowering</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="label">Care Level</label>
//                 <select name="careLevel" onChange={handleChange} className="select select-bordered w-full" required>
//                   <option value="">-- Select Care Level --</option>
//                   <option value="easy">Easy</option>
//                   <option value="moderate">Moderate</option>
//                   <option value="difficult">Difficult</option>
//                 </select>
//               </div>

//               {/* Dates */}
//               <div>
//                 <label className="label">Last Watered Date</label>
//                 <input type="date" name="lastWatered" value={formData.lastWatered} onChange={handleChange} className="input input-bordered w-full" required />
//               </div>

//               <div>
//                 <label className="label">Next Watering Date</label>
//                 <input type="date" name="nextWatering" value={formData.nextWatering} onChange={handleChange} className="input input-bordered w-full" required />
//               </div>

//               <div className="text-center">
//                 <button type="submit" className="btn btn-success w-full">Add Plant</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Addplants;  
//i want user name and email full filled automatically   when login or resister account user click myplants he or she see her or his added data raf







// Addplants.jsx********
// import React, { useState, useContext, useEffect } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { AuthContext } from '../contexts/AuthContext';

// const Addplants = () => {
//   const { user } = useContext(AuthContext);

//   const [formData, setFormData] = useState({
//     name: '',
//     photo: '',
//     category: '',
//     description: '',
//     careLevel: '',
//     wateringFrequency: '',
//     lastWatered: '',
//     nextWatering: '',
//     healthStatus: '',
//     userName: '',
//     userEmail: '',
//     createdAt: new Date().toISOString()
//   });

//   // Auto-fill name/email from logged-in user
//   useEffect(() => {
//     if (user) {
//       setFormData((prevData) => ({
//         ...prevData,
//         userName: user.displayName || '',
//         userEmail: user.email || ''
//       }));
//     }
//   }, [user]);

//   const handleChange = (e) => {
//     setFormData({...formData, [e.target.name]: e.target.value});
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post('/plants', formData);
//       if (res.data.insertedId) {
//         toast.success("✅ Plant Added Successfully!");
//         setFormData({
//           name: '',
//           photo: '',
//           category: '',
//           description: '',
//           careLevel: '',
//           wateringFrequency: '',
//           lastWatered: '',
//           nextWatering: '',
//           healthStatus: '',
//           userName: user?.displayName || '',
//           userEmail: user?.email || '',
//           createdAt: new Date().toISOString()
//         });
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("❌ Error adding plant");
//     }
//   };

//   return (
//     <div className="hero bg-base-200 min-h-screen">
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         <div className="card bg-base-100 w-full max-w-xl shadow-2xl">
//           <div className="card-body">
//             <h1 className="text-3xl font-bold text-center text-green-700 mb-4">Add Plant</h1>
//             <form onSubmit={handleSubmit} className="space-y-4">

//               {/* Text Inputs */}
//               {[
//                 { label: "Plant Name", name: "name" },
//                 { label: "Photo URL", name: "photo" },
//                 { label: "Description", name: "description" },
//                 { label: "Watering Frequency", name: "wateringFrequency" },
//                 { label: "Health Status", name: "healthStatus" },
//               ].map(({ label, name, type = "text" }) => (
//                 <div key={name}>
//                   <label className="label">{label}</label>
//                   <input
//                     type={type}
//                     name={name}
//                     value={formData[name]}
//                     onChange={handleChange}
//                     className="input input-bordered w-full"
//                     placeholder={label}
//                     required
//                   />
//                 </div>
//               ))}

//               {/* Category */}
//               <div>
//                 <label className="label">Category</label>
//                 <select name="category" onChange={handleChange} className="select select-bordered w-full" required>
//                   <option value="">-- Select Category --</option>
//                   <option value="succulent">Succulent</option>
//                   <option value="fern">Fern</option>
//                   <option value="flowering">Flowering</option>
//                 </select>
//               </div>

//               {/* Care Level */}
//               <div>
//                 <label className="label">Care Level</label>
//                 <select name="careLevel" onChange={handleChange} className="select select-bordered w-full" required>
//                   <option value="">-- Select Care Level --</option>
//                   <option value="easy">Easy</option>
//                   <option value="moderate">Moderate</option>
//                   <option value="difficult">Difficult</option>
//                 </select>
//               </div>

//               {/* Dates */}
//               <div>
//                 <label className="label">Last Watered Date</label>
//                 <input type="date" name="lastWatered" value={formData.lastWatered} onChange={handleChange} className="input input-bordered w-full" required />
//               </div>

//               <div>
//                 <label className="label">Next Watering Date</label>
//                 <input type="date" name="nextWatering" value={formData.nextWatering} onChange={handleChange} className="input input-bordered w-full" required />
//               </div>

//               {/* Auto-filled User Info (Read Only) */}
//               <div>
//                 <label className="label">User Name</label>
//                 <input type="text" name="userName" value={formData.userName} readOnly className="input input-bordered w-full bg-gray-100 cursor-not-allowed" />
//               </div>
//               <div>
//                 <label className="label">User Email</label>
//                 <input type="email" name="userEmail" value={formData.userEmail} readOnly className="input input-bordered w-full bg-gray-100 cursor-not-allowed" />
//               </div>

//               <div className="text-center">
//                 <button type="submit" className="btn btn-success w-full">Add Plant</button>
//               </div>

//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Addplants;// i submit data it not go b
// //i want to this page private only login user to see   not change my code add the feature 





// Addplants.jsx
import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { AuthContext } from '../contexts/AuthContext';

const Addplants = () => {
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: '',
    photo: '',
    category: '',
    description: '',
    careLevel: '',
    wateringFrequency: '',
    lastWatered: '',
    nextWatering: '',
    healthStatus: '',
    userName: '',
    userEmail: '',
    createdAt: new Date().toISOString()
  });

  // Auto-fill name/email from logged-in user
  useEffect(() => {
    if (user) {
      setFormData((prevData) => ({
        ...prevData,
        userName: user.displayName || '',
        userEmail: user.email || ''
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('https://treeplantcare-serversite.vercel.app/plants', formData);
      if (res.data.insertedId) {
        toast.success("✅ Plant Added Successfully!");
        setFormData({
          name: '',
          photo: '',
          category: '',
          description: '',
          careLevel: '',
          wateringFrequency: '',
          lastWatered: '',
          nextWatering: '',
          healthStatus: '',
          userName: user?.displayName || '',
          userEmail: user?.email || '',
          createdAt: new Date().toISOString()
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("❌ Error adding plant");
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-xl shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center text-green-700 mb-4">Add Plant</h1>
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Text Inputs */}
              {[
                { label: "Plant Name", name: "name" },
                { label: "Photo URL", name: "photo" },
                { label: "Description", name: "description" },
                { label: "Watering Frequency", name: "wateringFrequency" },
                { label: "Health Status", name: "healthStatus" },
              ].map(({ label, name, type = "text" }) => (
                <div key={name}>
                  <label className="label">{label}</label>
                  <input
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    placeholder={label}
                    required
                  />
                </div>
              ))}

              {/* Category */}
              <div>
                <label className="label">Category</label>
                <select value={formData.category} name="category" onChange={handleChange} className="select select-bordered w-full" required>
                  <option value="">-- Select Category --</option>
                  <option value="succulent">Succulent</option>
                  <option value="fern">Fern</option>
                  <option value="flowering">Flowering</option>
                </select>
              </div>

              {/* Care Level */}
              <div>
                <label className="label">Care Level</label>
                <select value={formData.careLevel} name="careLevel" onChange={handleChange} className="select select-bordered w-full" required>
                  <option value="">-- Select Care Level --</option>
                  <option value="easy">Easy</option>
                  <option value="moderate">Moderate</option>
                  <option value="difficult">Difficult</option>
                </select>
              </div>

              {/* Dates */}
              <div>
                <label className="label">Last Watered Date</label>
                <input type="date" name="lastWatered" value={formData.lastWatered} onChange={handleChange} className="input input-bordered w-full" required />
              </div>

              <div>
                <label className="label">Next Watering Date</label>
                <input type="date" name="nextWatering" value={formData.nextWatering} onChange={handleChange} className="input input-bordered w-full" required />
              </div>

              {/* Auto-filled User Info (Read Only) */}
              <div>
                <label className="label">User Name</label>
                <input type="text" name="userName" value={formData.userName} readOnly className="input input-bordered w-full bg-gray-100 cursor-not-allowed" />
              </div>
              <div>
                <label className="label">User Email</label>
                <input type="email" name="userEmail" value={formData.userEmail} readOnly className="input input-bordered w-full bg-gray-100 cursor-not-allowed" />
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-success w-full">Add Plant</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addplants;//i submit data 
//(please not change my code correct my code )
