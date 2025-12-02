import React from 'react';

const TestimonialCard = ({ t }) => {
    const testimonials = t
    console.log(testimonials);

    
    return (
      <div className="max-w-sm w-full bg-white shadow-md rounded-xl h-40 p-4 text-center px-12">
       
        {/* <img
        src={a}
        alt={name}
        className="w-16 h-16 rounded-full mx-auto object-cover"
      /> */}

        <h3 className="text-lg font-semibold mt-3">{t.name}</h3>
        <p className="text-gray-600 text-sm mt-1">{t.comment}</p>
      </div>
    );
};

export default TestimonialCard;