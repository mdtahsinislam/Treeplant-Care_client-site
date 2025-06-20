






// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../contexts/AuthContext';

// const Navbar = () => {
//   const { user, logout } = useContext(AuthContext);

//   const handleLogout = () => {
//     logout()
//       .then(() => {
//         console.log("Logged out successfully");
//       })
//       .catch(error => {
//         console.error("Logout error", error);
//       });
//   };

//   return (
//     <div className="navbar bg-base-300 flex justify-between px-4">
//       {/* Logo Section */}
//       <div className='flex items-center gap-2'>
//         <img className='w-10' src="https://i.ibb.co/kzK4pQ2/download-tree.jpg" alt="Logo" />
//         <h1 className='text-green-700 font-bold text-lg'>Plant Care Tracker</h1>
//       </div>

//       {/* Nav Links */}
//       <div className='flex gap-5 items-center'>
//         <Link to="/" className='hover:text-green-700'>Home</Link>
//         <Link to="/plantall" className='hover:text-green-700'>All Plant</Link>
//         <Link to="/addplants" className='hover:text-green-700'>Add Plant</Link>
//         <Link to="/myplant" className='hover:text-green-700'>My Plant</Link>
//         <Link to="/*" className='hover:text-green-700'>#404</Link>
//       </div>

//       {/* User Section */}
//       <div className='flex items-center gap-4'>
//         {user ? (
//           <>
//             {/* Tooltip with name & email on hover */}
//             <div className="tooltip tooltip-bottom" data-tip={`${user.name || user.displayName || 'User'}\n${user.email}`}>
//               <img
//                 className='w-10 h-10 rounded-full object-cover border'
//                 src={user.photoURL || "https://i.ibb.co/3yLCwW1Q/imagesprofileeee.jpg"}
//                 alt="Profile"
//               />
//             </div>
//             <button onClick={handleLogout} className="btn btn-neutral btn-outline">LogOut</button>
//           </>
//         ) : (
//           <>
//             <Link to="/login"><button className="btn btn-neutral btn-outline">Login</button></Link>
//             <Link to="/register"><button className="btn btn-neutral btn-outline">Register</button></Link>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

//please don't change my code   responsive  this code for any device 







import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout()
      .then(() => {
        console.log("Logged out successfully");
      })
      .catch(error => {
        console.error("Logout error", error);
      });
  };

  return (
    <div className="navbar bg-base-300 px-4 flex justify-between items-center relative">
      {/* Logo Section */}
      <div className='flex items-center gap-2'>
        <img className='w-10' src="https://i.ibb.co/kzK4pQ2/download-tree.jpg" alt="Logo" />
        <h1 className='text-green-700 font-bold text-lg'>Plant Care Tracker</h1>
      </div>

      {/* Mobile Toggle Button */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl">
          <FaBars />
        </button>
      </div>

      {/* Nav Links - Desktop */}
      <div className='hidden md:flex gap-5 items-center'>
        <Link to="/" className='hover:text-green-700'>Home</Link>
        <Link to="/plantall" className='hover:text-green-700'>All Plant</Link>
        <Link to="/addplants" className='hover:text-green-700'>Add Plant</Link>
        <Link to="/myplant" className='hover:text-green-700'>My Plant</Link>
        <Link to="/*" className='hover:text-green-700'>#404</Link>
      </div>

      {/* User Section - Desktop */}
      <div className='hidden md:flex items-center gap-4'>
        {user ? (
          <>
            <div className="tooltip tooltip-bottom" data-tip={`${user.name || user.displayName || 'User'}\n${user.email}`}>
              <img
                className='w-10 h-10 rounded-full object-cover border'
                src={user.photoURL || "https://i.ibb.co/3yLCwW1Q/imagesprofileeee.jpg"}
                alt="Profile"
              />
            </div>
            <button onClick={handleLogout} className="btn btn-neutral btn-outline">LogOut</button>
          </>
        ) : (
          <>
            <Link to="/login"><button className="btn btn-neutral btn-outline">Login</button></Link>
            <Link to="/register"><button className="btn btn-neutral btn-outline">Register</button></Link>
          </>
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-base-200 py-4 px-6 z-50 flex flex-col gap-4 md:hidden">
          <Link to="/" className='hover:text-green-700' onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/plantall" className='hover:text-green-700' onClick={() => setMenuOpen(false)}>All Plant</Link>
          <Link to="/addplants" className='hover:text-green-700' onClick={() => setMenuOpen(false)}>Add Plant</Link>
          <Link to="/myplant" className='hover:text-green-700' onClick={() => setMenuOpen(false)}>My Plant</Link>
          <Link to="/*" className='hover:text-green-700' onClick={() => setMenuOpen(false)}>#404</Link>

          <div className="mt-4">
            {user ? (
              <>
                <div className="flex items-center gap-3 mb-2">
                  <img
                    className='w-10 h-10 rounded-full object-cover border'
                    src={user.photoURL || "https://i.ibb.co/3yLCwW1Q/imagesprofileeee.jpg"}
                    alt="Profile"
                  />
                  <span>{user.name || user.displayName || 'User'}</span>
                </div>
                <button onClick={handleLogout} className="btn btn-neutral btn-outline w-full">LogOut</button>
              </>
            ) : (
              <>
                <Link to="/login"><button className="btn btn-neutral btn-outline w-full">Login</button></Link>
                <Link to="/register"><button className="btn btn-neutral btn-outline w-full">Register</button></Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
