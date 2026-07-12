import React, { use } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const friendPromise = fetch("/friendData.json").then((res) => res.json());

const FriendDetails = () => {
  const friends = use(friendPromise);
  const { id } = useParams();

  const friend = friends.find((item) => item.id == id);

  const handleTimeline = (type) => {
    const timeline = JSON.parse(localStorage.getItem("timeline")) || [];

    const newItem = {
      id: Date.now(),
      type,
      person: friend.name,
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
    };

    timeline.unshift(newItem);

    localStorage.setItem("timeline", JSON.stringify(timeline));
    toast.success(`${type} with ${friend.name}`);
   
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="grid md:grid-cols-4 gap-5">

        {/* Left Side */}
        <div className="space-y-3">
          <div className="bg-white shadow rounded-xl p-5 text-center">
            <img
              src={friend.picture}
              alt={friend.name}
              className="w-24 h-24 rounded-full mx-auto object-cover"
            />

            <h2 className="text-xl font-bold mt-3">{friend.name}</h2>

            <span className="badge badge-error mt-2">
              {friend.status}
            </span>

            <span className="badge badge-success ml-2">
              {friend.tags}
            </span>

            <p className="italic text-gray-500 mt-3">
              "{friend.bio}"
            </p>

            <p className="text-sm mt-2">
              Preferred: {friend.preferred}
            </p>
          </div>

          <button className="btn btn-outline w-full">
            Snooze 2 Weeks
          </button>

          <button className="btn btn-outline w-full">
            Archive
          </button>

          <button className="btn btn-outline btn-error w-full">
            Delete
          </button>
        </div>

        {/* Right Side */}
        <div className="md:col-span-3 space-y-5">

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white shadow rounded-xl p-5 text-center">
              <h1 className="text-3xl font-bold text-green-700">
                {friend.daysSince}
              </h1>
              <p>Days Since Contact</p>
            </div>

            <div className="bg-white shadow rounded-xl p-5 text-center">
              <h1 className="text-3xl font-bold text-green-700">
                {friend.goal}
              </h1>
              <p>Goal (Days)</p>
            </div>

            <div className="bg-white shadow rounded-xl p-5 text-center">
              <h1 className="text-2xl font-bold text-green-700">
                {friend.nextDue}
              </h1>
              <p>Next Due</p>
            </div>
          </div>

          <div className="bg-white shadow rounded-xl p-5">
            <h2 className="font-bold text-lg">
              Relationship Goal
            </h2>

            <p className="mt-2">
              Connect every <b>{friend.goal}</b> days
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-5">
            <h2 className="font-bold text-lg mb-4">
              Quick Check-In
            </h2>

            <div className="grid grid-cols-3 gap-4">

              <button
                onClick={() => handleTimeline("Call")}
                className="btn btn-outline"
              >
                📞 Call
              </button>

              <button
                onClick={() => handleTimeline("Text")}
                className="btn btn-outline"
              >
                💬 Text
              </button>

              <button
                onClick={() => handleTimeline("Video")}
                className="btn btn-outline"
              >
                🎥 Video
              </button>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default FriendDetails;