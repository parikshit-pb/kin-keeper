import React from 'react';

const Banner = () => {
    return (
            <div className="hero  min-h-[60vh] container mx-auto p-3 ">
  <div className="hero-content text-center flex flex-col">
    <div className="max-w-fill">
      <h1 className="text-4xl font-bold">Friends to keep close in your life</h1>
      <p className="py-6 text-[12px]">
      Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> relationships that matter most.
      </p>
      <button className="btn btn-primary">+ Add a Friend</button>
    </div> 
    <div className="grid gap-4 justify-center items-center grid-col-2 sm:grid-cols-2 md:grid-cols-4">

  
  <div className="w-[149px] h-[90px] bg-gray-100 rounded-xl shadow flex flex-col justify-center items-center">
    <h2 className="text-xl font-bold text-green-700">10</h2>
    <p className="text-xs text-gray-500">Total Friends</p>
  </div>

  
  <div className="w-[149px] h-[90px] bg-gray-100 rounded-xl shadow flex flex-col justify-center items-center">
    <h2 className="text-xl font-bold text-green-700">3</h2>
    <p className="text-xs text-gray-500">On Track</p>
  </div>

  
  <div className="w-[149px] h-[90px] bg-gray-100 rounded-xl shadow flex flex-col justify-center items-center">
    <h2 className="text-xl font-bold text-green-700">6</h2>
    <p className="text-xs text-gray-500">Need Attention</p>
  </div>

  
  <div className="w-[149px] h-[90px] bg-gray-100 rounded-xl shadow flex flex-col justify-center items-center">
    <h2 className="text-xl font-bold text-green-700">12</h2>
    <p className="text-xs text-gray-500">Interactions This Month</p>
  </div>

</div>
  </div>
</div>
    );
};

export default Banner;