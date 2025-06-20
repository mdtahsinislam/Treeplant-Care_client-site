// import React, { use } from 'react';
// import { AuthContext } from '../contexts/AuthContext';

// const Login = () => {

// const { crateUser}=use(AuthContext);
// console.log( crateUser);

// const handleLogin=e=>{
//   e.preventDefault();
//   const form=e.target;
//   const formData=new FormData(form);
//   const email=formData.get('email')
//   const password=formData.get('password');

//   console.log(email,password);




// //create user in the firebase

  
//    crateUser(email,password)
//    .then(result =>{
//     console.log(result.user);
//    })
//    .catch(error=>{
//     console.log(error)
//    })

// }


//     return (
//         <div className="hero bg-base-200 min-h-screen">
//   <div className="hero-content flex-col lg:flex-row-reverse">
  
//     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">



       
//       <div className="card-body">{/* form */}
//         <form onSubmit={handleLogin} className="fieldset">
            


//               <h1 className="text-2xl font-bold">Login your account now!</h1>
//               {/* Google */}
// <button onClick={handleLogin} className="btn bg-white text-black border-[#e5e5e5]">
//   <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
//   Login with Google
// </button>
//                {/* OR Divider */}
//                 <div className="flex items-center my-4">
//                     <div className="flex-grow h-px bg-green-800"></div>
//                     <span className="px-2 text-gray-500 text-sm">OR</span>
//                     <div className="flex-grow h-px bg-green-900"></div>
//                 </div>

//           <label className="label" >Email</label>
//           <input type="email" name="email" className="input" placeholder="Email" />
//           <label className="label" >Password</label>
//           <input type="password" name="password" className="input" placeholder="Password" />
          
//           <button className="btn btn-neutral mt-4">Login</button>
//         </form>
//       </div>
//     </div>
//   </div>
// </div>
//     );
// };

// export default Login;


///adddddddd swalllllllllllll


// import React, { useContext } from 'react';
// import { AuthContext } from '../contexts/AuthContext';

// const Login = () => {
//   const { loginUser, googleLogin } = useContext(AuthContext);

//   const handleLogin = e => {
//     e.preventDefault();
//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;

//     loginUser(email, password)
//       .then(result => {
//         console.log("Login successful", result.user);
//       })
//       .catch(error => {
//         console.error("Login error", error);
//       });
//   };

//   const handleGoogleLogin = () => {
//     googleLogin()
//       .then(result => {
//         console.log("Google login successful", result.user);
//       })
//       .catch(error => {
//         console.error("Google login error", error);
//       });
//   };

//   return (
//     <div className="hero bg-base-200 min-h-screen">
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//           <div className="card-body">
//             <form onSubmit={handleLogin}>
//               <h1 className="text-2xl font-bold">Login your account now!</h1>

//               {/* Google */}
//               <button type="button" onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5] mt-2">
//                 <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
//                 Login with Google
//               </button>

//               {/* OR Divider */}
//               <div className="flex items-center my-4">
//                 <div className="flex-grow h-px bg-green-800"></div>
//                 <span className="px-2 text-gray-500 text-sm">OR</span>
//                 <div className="flex-grow h-px bg-green-900"></div>
//               </div>

//               <label className="label">Email</label>
//               <input type="email" name="email" className="input" placeholder="Email" required />
//               <label className="label">Password</label>
//               <input type="password" name="password" className="input" placeholder="Password" required />
//               <button className="btn btn-neutral mt-4" type="submit">Login</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


// please add this when user login with google or email password

// Swal.fire({
//         icon: "error",
//         title: "Registration Failed",
//         text: error.message || "An unexpected error occurred. Please try again.",
//       }); 


///********** */


// import React, { useContext } from 'react';
// import { AuthContext } from '../contexts/AuthContext';
// import Swal from 'sweetalert2'; // ✅ import Swal
// import { Link } from 'react-router';

// const Login = () => {
//   const { loginUser, googleLogin } = useContext(AuthContext);

//   const handleLogin = e => {
//     e.preventDefault();
//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;

//     loginUser(email, password)
//       .then(result => {
//         Swal.fire({
//           icon: "success",
//           title: "Login Successful",
//           text: `Welcome back, ${result.user.displayName || result.user.email}!`,
//         });
        
//       })
//       .catch(error => {
//         Swal.fire({
//           icon: "error",
//           title: "Login Failed",
//           text: error.message || "An unexpected error occurred. Please try again.",
//         });
//       });
//   };

//   const handleGoogleLogin = () => {
//     googleLogin()
//       .then(result => {
//         Swal.fire({
//           icon: "success",
//           title: "Google Login Successful",
//           text: `Welcome, ${result.user.displayName || result.user.email}!`,
//         });
//       })
//       .catch(error => {
//         Swal.fire({
//           icon: "error",
//           title: "Google Login Failed",
//           text: error.message || "An unexpected error occurred. Please try again.",
//         });
//       });
//   };

//   return (
//     <div className="hero bg-base-200 min-h-screen">
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//           <div className="card-body">
//             <form onSubmit={handleLogin}>
//               <h1 className="text-2xl font-bold">Login your account now!</h1>

//               {/* Google */}
//               <button type="button" onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5] mt-2">
//                 <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
//                 Login with Google
//               </button>

//               {/* OR Divider */}
//               <div className="flex items-center my-4">
//                 <div className="flex-grow h-px bg-green-800"></div>
//                 <span className="px-2 text-gray-500 text-sm">OR</span>
//                 <div className="flex-grow h-px bg-green-900"></div>
//               </div>

//               <label className="label">Email</label>
//               <input type="email" name="email" className="input" placeholder="Email" required />
//               <label className="label">Password</label>
//               <input type="password" name="password" className="input" placeholder="Password" required />
//               <button className="btn btn-neutral mt-4" type="submit">Login</button>
             
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;





import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate and Link from 'react-router-dom'

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then(result => {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: `Welcome back, ${result.user.displayName || result.user.email}!`,
        });
        navigate('/'); // Redirect to home page after successful email/password login
      })
      .catch(error => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message || "An unexpected error occurred. Please try again.",
        });
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(result => {
        Swal.fire({
          icon: "success",
          title: "Google Login Successful",
          text: `Welcome, ${result.user.displayName || result.user.email}!`,
        });
        navigate('/'); // Redirect to home page after successful Google login
      })
      .catch(error => {
        Swal.fire({
          icon: "error",
          title: "Google Login Failed",
          text: error.message || "An unexpected error occurred. Please try again.",
        });
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <h1 className="text-2xl font-bold">Login your account now!</h1>

              {/* Google */}
              <button type="button" onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5] mt-2">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Login with Google
              </button>

              {/* OR Divider */}
              <div className="flex items-center my-4">
                <div className="flex-grow h-px bg-green-800"></div>
                <span className="px-2 text-gray-500 text-sm">OR</span>
                <div className="flex-grow h-px bg-green-900"></div>
              </div>

              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" required />
              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" required />
              <button className="btn btn-neutral mt-4" type="submit">Login</button>
              {/* <p className="mt-4 text-center text-sm">
                Don't have an account? <Link to="/register" className="text-blue-500 underline">Register</Link>
              </p> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;