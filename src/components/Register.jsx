

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


