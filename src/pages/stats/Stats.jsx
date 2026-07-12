import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#7C3AED", "#14532D", "#22C55E"];

const Stats = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const loadData = () => {
      const timeline =
        JSON.parse(localStorage.getItem("timeline")) || [];

      const call = timeline.filter(
        (item) => item.type === "Call"
      ).length;

      const text = timeline.filter(
        (item) => item.type === "Text"
      ).length;

      const video = timeline.filter(
        (item) => item.type === "Video"
      ).length;

      setChartData([
        {
          name: "Text",
          value: text,
        },
        {
          name: "Call",
          value: call,
        },
        {
          name: "Video",
          value: video,
        },
      ]);
    };

    loadData();

    window.addEventListener("storage", loadData);

    return () => {
      window.removeEventListener("storage", loadData);
    };
  }, []);

  return (
    <div className="container mx-auto py-10 px-4">

      <h1 className="text-5xl font-bold mb-8">
        Friendship Analytics
      </h1>

      <div className="bg-white rounded-xl shadow-md p-8">

        <h2 className="text-xl font-semibold mb-6">
          By Interaction Type
        </h2>

        <div className="h-[450px]">

          <ResponsiveContainer width="100%" height="100%">

            <PieChart>

              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="45%"
                innerRadius={90}
                outerRadius={130}
                paddingAngle={5}
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />
                ))}
              </Pie>

              <Tooltip />

              <Legend
                verticalAlign="bottom"
                height={36}
              />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
};

export default Stats;