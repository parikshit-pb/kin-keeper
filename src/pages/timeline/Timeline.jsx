import { useMemo, useState } from "react";
import { FaPhoneAlt, FaVideo } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";

export default function Timeline() {
  const [search, setSearch] = useState("");

  // localStorage থেকে Timeline Data
  const [timeline] = useState(() => {
    return JSON.parse(localStorage.getItem("timeline")) || [];
  });

  // Search Filter
  const filteredTimeline = useMemo(() => {
    return timeline.filter((item) => {
      const text = search.toLowerCase();

      return (
        item.type.toLowerCase().includes(text) ||
        item.person.toLowerCase().includes(text)
      );
    });
  }, [timeline, search]);

  // Icon Function
  const getIcon = (type) => {
    switch (type) {
      case "Call":
        return <FaPhoneAlt className="text-pink-500 text-xl" />;

      case "Text":
        return <BsChatDotsFill className="text-purple-500 text-xl" />;

      case "Video":
        return <FaVideo className="text-gray-700 text-xl" />;

      default:
        return <span className="text-2xl">🤝</span>;
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">

      <h1 className="text-4xl font-bold mb-6">
        Timeline
      </h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by type or person..."
        className="input input-bordered w-full mb-8"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Timeline */}
      <div className="space-y-4">

        {filteredTimeline.length > 0 ? (
          filteredTimeline.map((item) => (
            <div
              key={item.id}
              className="bg-white border rounded-xl px-5 py-4 shadow flex items-center gap-4 hover:shadow-lg duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                {getIcon(item.type)}
              </div>

              <div>
                <h2 className="font-bold text-lg">
                  {item.type}
                  <span className="font-normal text-gray-500">
                    {" "}with {item.person}
                  </span>
                </h2>

                <p className="text-sm text-gray-500">
                  {item.date}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold text-gray-500">
              No Timeline Found
            </h2>

            <p className="text-gray-400 mt-2">
              Click Call, Text or Video from Friend Details.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}