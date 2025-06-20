// import React from 'react';

// const Register = () => {
//     return (
//         <div className="hero bg-base-200 min-h-screen">
//   <div className="hero-content flex-col lg:flex-row-reverse">
 
//     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//       <div className="card-body">
//         <fieldset className="fieldset">
//              <h1 className="text-5xl font-bold">Register now!</h1>

//      <label className="label">Name</label>
//           <input type="text" className="input" placeholder="Name" />


//           <label className="label">Email</label>
//           <input type="email" className="input" placeholder="Email" />
//           <label className="label">Password</label>
//           <input type="password" className="input" placeholder="Password" />
        

// <label className="label">Photo URL</label>
//           <input type="test" className="input" placeholder="Photo URL" />


//           <button className="btn btn-neutral mt-4">Register</button>
//         </fieldset>
//       </div>
//     </div>
//   </div>
// </div>
//     );
// };

// export default Register;



////raf bracket error***********



// import React, { useContext } from 'react';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebase/firebase.init';
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const handleRegister = e => {
//   e.preventDefault();
//   const form = e.target;

//   const name = form.name.value;
//   const email = form.email.value;
//   const password = form.password.value;
//   const photoURL = form.photoURL.value;

//   const userProfile = { name, email, photoURL };

//   createUserWithEmailAndPassword(auth, email, password)
//     .then(result => {
//       console.log("User created:", result.user);
//       // Save user info to MongoDB
//       fetch('https://treeplantcare-serversite.vercel.app/users', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(userProfile)
//       })
//         .then(res => res.json())
//         .then(data => {
//           console.log("Saved to DB:", data);
//           Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: "Registration complete!",
//             showConfirmButton: false,
//             timer: 1500
//           });
//           navigate('/login'); // ✅ Move inside after DB save
//         });
//     })
//     .catch(error => {
//       console.error("Registration error:", error);
//     });
// };

//   return (
//     <div className="hero bg-base-200 min-h-screen">
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//           <div className="card-body">
//             <form onSubmit={handleRegister}>
//               <h1 className="text-5xl font-bold">Register now!</h1>

//               <label className="label">Name</label>
//               <input name="name" type="text" className="input" placeholder="Name" />

//               <label className="label">Email</label>
//               <input name="email" type="email" className="input" placeholder="Email" />

//               <label className="label">Password</label>
//               <input name="password" type="password" className="input" placeholder="Password" />

//               <label className="label">Photo URL</label>
//               <input name="photoURL" type="text" className="input" placeholder="Photo URL" />

//               <button className="btn btn-neutral mt-4" type="submit">Register</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


//i sand email password authenticatio in fire base 
//now i want to sand users data in mongodb   do not change my code  add i want functionality so it worked perfectly 



/**name email go  */

// import React from 'react';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebase/firebase.init';
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const Register = () => {
//   const navigate = useNavigate(); // ✅ must be inside component

//   const handleRegister = e => {
//     e.preventDefault();
//     const form = e.target;

//     const name = form.name.value;
//     const email = form.email.value;
//     const password = form.password.value;
//     const photoURL = form.photoURL.value;

//     const userProfile = { name, email, photoURL,password };

//     createUserWithEmailAndPassword(auth, email, password)
//       .then(result => {
//         console.log("User created:", result.user);
//         // Save user info to MongoDB
//         fetch('https://treeplantcare-serversite.vercel.app/users', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(userProfile)
//         })
//           .then(res => res.json())
//           .then(data => {
//             console.log("Saved to DB:", data);
//             Swal.fire({
//               position: "top-end",
//               icon: "success",
//               title: "Registration complete!",
//               showConfirmButton: false,
//               timer: 1500
//             });
//             navigate('/login'); // ✅ only works inside component
//           });
//       })
//       .catch(error => {
//         console.error("Registration error:", error);
//       });
//   };

//   return (
//     <div className="hero bg-base-200 min-h-screen">
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//           <div className="card-body">
//             <form onSubmit={handleRegister}>
//               <h1 className="text-5xl font-bold">Register now!</h1>

//               <label className="label">Name</label>
//               <input name="name" type="text" className="input" placeholder="Name" required />

//               <label className="label">Email</label>
//               <input name="email" type="email" className="input" placeholder="Email" required />

//               <label className="label">Password</label>
//               <input name="password" type="password" className="input" placeholder="Password" required />

//               <label className="label">Photo URL</label>
//               <input name="photoURL" type="text" className="input" placeholder="Photo URL" />

//               <button className="btn btn-neutral mt-4" type="submit">Register</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;



//i sand email password authenticatio in fire base 
//now i want to sand users all data in mongodb (in this code name email send in mongodb)   do not change my code  add i want functionality so it worked perfectly 



// Register.jsx

// import React from 'react';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebase/firebase.init';
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const Register = () => {
//   const navigate = useNavigate();

//   const handleRegister = e => {
//     e.preventDefault();
//     const form = e.target;

//     const name = form.name.value;
//     const email = form.email.value;
//     const password = form.password.value;
//     const photoURL = form.photoURL.value;

//     const userProfile = { name, email, password, photoURL }; // ✅ include all fields

//     createUserWithEmailAndPassword(auth, email, password)
//       .then(result => {
//         console.log("User created in Firebase:", result.user);

//         // Send user data to MongoDB
//         fetch('https://treeplantcare-serversite.vercel.app/users', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(userProfile)
//         })
//         .then(res => res.json())
//         .then(data => {
//           console.log("Saved to MongoDB:", data);
//           Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: "Registration complete!",
//             showConfirmButton: false,
//             timer: 1500
//           });
//           navigate('/login');
//         });
//       })
//       .catch(error => {
//         console.error("Registration error:", error);
//       });
//   };

//   return (
//     <div className="hero bg-base-200 min-h-screen">
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//           <div className="card-body">
//             <form onSubmit={handleRegister}>
//               <h1 className="text-5xl font-bold">Register now!</h1>

//               <label className="label">Name</label>
//               <input name="name" type="text" className="input" placeholder="Name" required />

//               <label className="label">Email</label>
//               <input name="email" type="email" className="input" placeholder="Email" required />

//               <label className="label">Password</label>
//               <input name="password" type="password" className="input" placeholder="Password" required />

//               <label className="label">Photo URL</label>
//               <input name="photoURL" type="text" className="input" placeholder="Photo URL" />

//               <button className="btn btn-neutral mt-4" type="submit">Register</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;







///********* */

// import React from 'react';
// import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'; // Import updateProfile
// import { auth } from '../firebase/firebase.init'; // Assuming firebase.init.js provides the auth object
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2'; // For elegant alerts
// import { Link } from 'react-router';

// const Register = () => {
//   const navigate = useNavigate();

//   // handleRegister function to manage user registration
//   const handleRegister = async (e) => { // Made the function async to use await
//     e.preventDefault();
//     const form = e.target;

//     // Extract user input from the form
//     const name = form.name.value;
//     const email = form.email.value;
//     const password = form.password.value;
//     const photoURL = form.photoURL.value;

//     // Create a user profile object to send to MongoDB
//     const userProfileForMongo = { name, email, password, photoURL };

//     try {
//       // 1. Create user in Firebase Authentication
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
//       console.log("User created in Firebase:", user);

//       // 2. Update Firebase user profile with display name and photo URL
//       // This saves name and photoURL directly to Firebase's user object
//       await updateProfile(user, {
//         displayName: name,
//         photoURL: photoURL
//       });
//       console.log("Firebase profile updated with display name and photo URL:", user);

//       // 3. Send user data to your MongoDB backend
//       const response = await fetch('https://treeplantcare-serversite.vercel.app/users', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(userProfileForMongo) // Send the full user profile to MongoDB
//       });

//       if (!response.ok) {
//         // If the HTTP response status is not 2xx, throw an error
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Failed to save user data to MongoDB');
//       }

//       const mongoData = await response.json();
//       console.log("User data saved to MongoDB:", mongoData);

//       // Show success message and navigate to login page
//       Swal.fire({
//         position: "top-end",
//         icon: "success",
//         title: "Registration complete!",
//         showConfirmButton: false,
//         timer: 1500
//       });
//       navigate('/login');

//     } catch (error) {
//       // Handle any errors during Firebase creation or MongoDB saving
//       console.error("Registration error:", error);

//       // Display appropriate error message to the user
//       Swal.fire({
//         icon: "error",
//         title: "Registration Failed",
//         text: error.message || "An unexpected error occurred. Please try again.",
//       });
//     }
//   };

//   return (
//     <div className="hero bg-base-200 min-h-screen font-inter"> {/* Added font-inter class */}
//       <div className="hero-content flex-col lg:flex-row-reverse rounded-xl shadow-lg p-8"> {/* Added rounded corners and padding */}
//         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-xl"> {/* Added rounded corners */}
//           <div className="card-body p-6"> {/* Added padding */}
//             <form onSubmit={handleRegister}>
//               <h1 className="text-5xl font-bold text-center mb-6">Register now!</h1>

//               <div className="form-control mb-4">
//                 <label className="label">
//                   <span className="label-text">Name</span>
//                 </label>
//                 <input
//                   name="name"
//                   type="text"
//                   className="input input-bordered w-full rounded-md" // Added Tailwind classes
//                   placeholder="Your Name"
//                   required
//                 />
//               </div>

//               <div className="form-control mb-4">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <input
//                   name="email"
//                   type="email"
//                   className="input input-bordered w-full rounded-md" // Added Tailwind classes
//                   placeholder="Your Email"
//                   required
//                 />
//               </div>

//               <div className="form-control mb-4">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <input
//                   name="password"
//                   type="password"
//                   className="input input-bordered w-full rounded-md" // Added Tailwind classes
//                   placeholder="Your Password"
//                   required
//                 />
//               </div>

//               <div className="form-control mb-6">
//                 <label className="label">
//                   <span className="label-text">Photo URL</span>
//                 </label>
//                 <input
//                   name="photoURL"
//                   type="text"
//                   className="input input-bordered w-full rounded-md" // Added Tailwind classes
//                   placeholder="Optional Photo URL"
//                 />
//               </div>

//               <div className="form-control mt-6">
                
//                  <button
//                   className="btn btn-neutral w-full rounded-md py-3 text-lg font-semibold shadow-md hover:shadow-lg transition duration-300 ease-in-out" // Styled button
//                   type="submit"
//                 >
//                   Register
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


import React from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom'; // ✅ Fix incorrect import

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;

    const userProfileForMongo = { name, email, password, photoURL };

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL
      });

      const response = await fetch('https://treeplantcare-serversite.vercel.app/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userProfileForMongo)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to save user data to MongoDB');
      }

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Registration complete!",
        showConfirmButton: false,
        timer: 1500
      });

      navigate('/'); // ✅ Go to home after registration

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: error.message || "An unexpected error occurred. Please try again.",
      });
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen font-inter">
      <div className="hero-content flex-col lg:flex-row-reverse rounded-xl shadow-lg p-8">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-xl">
          <div className="card-body p-6">
            <form onSubmit={handleRegister}>
              <h1 className="text-5xl font-bold text-center mb-6">Register now!</h1>

              <div className="form-control mb-4">
                <label className="label"><span className="label-text">Name</span></label>
                <input name="name" type="text" className="input input-bordered w-full rounded-md" placeholder="Your Name" required />
              </div>

              <div className="form-control mb-4">
                <label className="label"><span className="label-text">Email</span></label>
                <input name="email" type="email" className="input input-bordered w-full rounded-md" placeholder="Your Email" required />
              </div>

              <div className="form-control mb-4">
                <label className="label"><span className="label-text">Password</span></label>
                <input name="password" type="password" className="input input-bordered w-full rounded-md" placeholder="Your Password" required />
              </div>

              <div className="form-control mb-6">
                <label className="label"><span className="label-text">Photo URL</span></label>
                <input name="photoURL" type="text" className="input input-bordered w-full rounded-md" placeholder="Optional Photo URL" />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-neutral w-full rounded-md py-3 text-lg font-semibold shadow-md hover:shadow-lg transition duration-300 ease-in-out" type="submit">
                  Register
                </button>
              </div>

              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;


