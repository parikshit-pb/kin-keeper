import React, { use } from "react";
import { Link } from "react-router-dom";

const friendPromise = fetch("/friendData.json").then((res) => res.json());

const YourFriend = () => {
  const friend = use(friendPromise);

  return (
    <div className="my-12 container mx-auto">
      <h1 className="font-bold text-3xl">Hello Friends</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
        {friend.map((item) => (
          <Link
            key={item.id}
            to={`/friend/${item.id}`}
            className="w-full max-w-[280px]"
          >
            <div className="card bg-base-100 shadow-sm border border-gray-100 p-3 hover:shadow-lg transition">
              <figure className="px-10 pt-10 flex justify-center">
                <img
                  src={item.picture}
                  alt={item.name}
                  className="rounded-full w-20 h-20"
                />
              </figure>

              <div className="text-center">
                <h2>{item.name}</h2>
                <p className="text-[12px] pb-1">{item.title}</p>

                <p className="inline-block bg-green-100 py-1 px-2 rounded-full font-semibold text-sm">
                  {item.tags}
                </p>

                <div className="card-actions flex justify-center pt-2">
                  <button className="border px-4 rounded-full">
                    {item.status}
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default YourFriend;