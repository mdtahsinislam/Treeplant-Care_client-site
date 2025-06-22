



import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdatePlant = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true); // Added for initial fetch loading state
  const [error, setError] = useState(null);   // Added for initial fetch error state

  useEffect(() => {
    // Fetch plant data when the component mounts or ID changes
    if (id) {
      fetch(`https://treeplantcare-serversite.vercel.app/plants/${id}`)
        .then(res => {
          if (!res.ok) {
            // Attempt to read error message from backend if available
            return res.json().catch(() => {
              throw new Error(`HTTP error! Status: ${res.status}`);
            }).then(errorData => {
              throw new Error(errorData.message || `HTTP error! Status: ${res.status}`);
            });
          }
          return res.json();
        })
        .then(data => {
          setPlant(data);
          setLoading(false); // Data loaded, stop loading
        })
        .catch(err => {
          console.error("UpdatePlant.jsx: Error fetching plant for update:", err);
          setError("Failed to load plant details."); // Set error message
          setLoading(false); // Stop loading even on error
          Swal.fire({
            icon: "error",
            title: "Error",
            text: err.message || "Failed to load plant details. Please try again.",
          });
        });
    }
  }, [id]);

  const handleChange = e => {
    setPlant({ ...plant, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!plant) {
      Swal.fire("Error", "Plant data not loaded for update.", "error");
      return;
    }

    const cleanedData = {};
    for (const key in plant) {
      if (plant[key] !== undefined && key !== '_id') { // Ensure _id is not sent in update body
        cleanedData[key] = plant[key];
      }
    }

    fetch(`https://treeplantcare-serversite.vercel.app/plants/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cleanedData)
    })
      .then(res => {
        if (!res.ok) {
          // If response is not OK, parse error message from body if available
          return res.json().then(errorData => {
            throw new Error(errorData.message || `HTTP error! Status: ${res.status}`);
          });
        }
        return res.json();
      })
      .then(data => {
        console.log("Frontend update response:", data); // ✅ log backend response
        // Check for modifiedCount (if actual changes occurred) OR matchedCount (if plant was found)
        if (data.modifiedCount > 0 || data.matchedCount > 0) {
          Swal.fire("Success", "Plant updated successfully!", "success");
          navigate("/myplant"); // Redirect to My Plants page after successful update
        } else {
          // This case means matchedCount was 0, or matchedCount > 0 but modifiedCount was 0 (no actual changes)
          Swal.fire("Info", "No changes were made to the plant.", "info");
        }
      })
      .catch(err => { // Changed error to err for consistency
        console.error("UpdatePlant.jsx: Update error:", err); // Log the actual error
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: err.message || "An unexpected error occurred during update. Please try again.",
        });
      });
  };

  if (loading) return <div className="text-center mt-10">Loading plant data...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;
  if (!plant) return <div className="text-center mt-10 text-gray-500">Plant not found or could not be loaded.</div>;

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-green-600 text-center">Update Plant</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["name", "photo", "category", "description", "wateringFrequency", "healthStatus"].map(field => (
          <div key={field}>
            <label className="block mb-1 font-semibold capitalize">{field.replace(/([A-Z])/g, ' $1').trim()}</label>
            <input
              type="text"
              name={field}
              value={plant[field] || ""}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>
        ))}
        <div className="text-center">
          <button type="submit" className="btn btn-success">Update</button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePlant;

//update fullfill it go 
