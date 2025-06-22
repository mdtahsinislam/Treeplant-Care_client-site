



import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Viewdetails = () => {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);
  const imageRef = useRef();

  useEffect(() => {
    fetch(`https://treeplantcare-serversite.vercel.app/plants/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => setPlant(data))
      .catch((error) => console.error("Error fetching plant details:", error));
  }, [id]);

  if (!plant) return <div className="text-center mt-10 text-xl text-gray-600">Loading plant details...</div>;

  // ✅ Handle printing
  const handlePrint = () => {
    window.print();
  };

  // ✅ Handle PDF download with CORS fix and image preload
  const handleDownloadPdf = async () => {
    const input = document.getElementById('plant-details-card');
    const image = imageRef.current;

    if (!input) {
      alert("❌ Could not find the card to print.");
      return;
    }

    if (image && !image.complete) {
      // Wait for image to load fully
      await new Promise((resolve) => {
        image.onload = resolve;
        image.onerror = resolve;
      });
    }

    html2canvas(input, {
      scale: 2,
      useCORS: true, // 🔑 Necessary for external images like ibb.co
    })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210;
        const pageHeight = 297;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save(`${plant.name}_details.pdf`);
      })
      .catch((err) => {
        console.error("PDF Generation Failed:", err);
        alert("❌ Failed to generate PDF. Make sure image is loaded and CORS is allowed.");
      });
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 shadow-md mt-6 rounded-xl print-container">
      {/* Printable / PDF Section */}
      <div id="plant-details-card" className="card-content text-gray-700">
        <h2 className="text-3xl font-bold text-green-700 mb-4 text-center">{plant.name}</h2>
        <img
          ref={imageRef}
          src={plant.photo}
          crossOrigin="anonymous"
          alt={plant.name}
          className="w-60 h-60 object-cover mx-auto rounded-lg border"
          onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
        />
        <div className="mt-4 space-y-2">
          <p><strong>Category:</strong> {plant.category}</p>
          <p><strong>Description:</strong> {plant.description}</p>
          <p><strong>Care Level:</strong> {plant.careLevel}</p>
          <p><strong>Watering:</strong> {plant.wateringFrequency}</p>
          <p><strong>Last Watered:</strong> {plant.lastWatered}</p>
          <p><strong>Next Watering:</strong> {plant.nextWatering}</p>
          <p><strong>Health Status:</strong> {plant.healthStatus}</p>
          <p><strong>Added By:</strong> {plant.userName} ({plant.userEmail})</p>
          <p><strong>Created At:</strong> {new Date(plant.createdAt).toLocaleString()}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-6 no-print">
        <button onClick={handlePrint} className="btn btn-outline btn-success">
          🖨️ Print Card
        </button>
{/* 
        <button onClick={handleDownloadPdf} className="btn btn-outline btn-primary">
          📄 Download as PDF
        </button> */}

        {plant.photo && (
          <a
            href={plant.photo}
            download={`${plant.name}_photo.jpg`}
            className="btn btn-outline btn-info"
            target="_blank"
            rel="noopener noreferrer"
          >
            🖼️ Download Photo
          </a>
        )}
      </div>
    </div>
  );
};

export default Viewdetails;
//i want to this page private only login user to see   not change my code add the feature 