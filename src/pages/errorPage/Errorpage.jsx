import React from 'react';

const Errorpage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-base-200 text-center px-4">

  <h1 className="text-7xl font-bold text-green-600">404</h1>
  
  <h2 className="text-2xl md:text-3xl font-semibold mt-4">
    Page Not Found
  </h2>
  
  <p className="text-gray-500 mt-2 max-w-md">
    Oops! The page you are looking for doesn’t exist or has been moved.
  </p>

  <a href="/" className="btn btn-success mt-6">
    Go Back Home
  </a>

</div>
    );
};

export default Errorpage;