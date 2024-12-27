import React from 'react';
import certificate1 from '../assets/certi_5g.png';
import certificate2 from '../assets/certificate2.png';

// Declare constants for the certificates
const CERTIFICATES = [
  {
    id: 1,
    title: "Recognition by TCOE Ministry of Communications, Government of India",
    images: [ certificate1 ],
  },
  {
    id: 2, 
    title: "Recognition by Telangana Medical Council and Indian Society for Clinical Research",
    images: [ certificate2 ],
  },
];

const Certificate = () => {
  return (
    <div className="container mx-auto px-4 py-8 mb-7">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Certificates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CERTIFICATES.map((cert) => (
          <div 
            key={cert.id} 
            className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
                {cert.title}
              </h2>
              <div className="flex justify-center items-center">
                {cert.images.map((image, index) => (
                  <div 
                    key={index} 
                    className="w-full max-w-md h-96 flex justify-center items-center"
                  >
                    <img
                      src={image}
                      alt={`${cert.title} - Certificate ${index + 1}`}
                      className="object-contain w-full h-full rounded-lg border border-gray-200"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
