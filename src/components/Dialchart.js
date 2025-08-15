import React from "react";
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function DialCharts() {
  return (
    <div className="flex gap-6 p-6 bg-gray-100 min-h-screen">
      
      {/* Semi-Circle Gauge - Overall Course Performance */}
      <div className="w-40">
        <CircularProgressbar
          value={76} // 7.6/10 -> 76%
          maxValue={100}
          styles={buildStyles({
            rotation: 0.75, // start position
            strokeLinecap: "round",
            trailColor: "#f3f3f3",
            pathColor: "#9333ea", // purple
            textColor: "#9333ea",
          })}
          text={`7.6/10`}
        />
        <p className="text-center mt-2 text-sm font-medium">
          Overall Course Performance
        </p>
      </div>

      {/* Semi-Circle Gauge - Overall Student Performance */}
      <div className="w-40">
        <CircularProgressbar
          value={66} // 6.6/10 -> 66%
          maxValue={100}
          styles={buildStyles({
            rotation: 0.75,
            strokeLinecap: "round",
            trailColor: "#f3f3f3",
            pathColor: "#f59e0b", // amber
            textColor: "#f59e0b",
          })}
          text={`6.6/10`}
        />
        <p className="text-center mt-2 text-sm font-medium">
          Overall Student Performance
        </p>
      </div>

      {/* Full Circle Progress - Feedback Pending */}
      <div className="w-40">
        <CircularProgressbar
          value={12}
          maxValue={12} // full circle since all pending
          styles={buildStyles({
            strokeLinecap: "round",
            trailColor: "#f3f3f3",
            pathColor: "#ef4444", // red
            textColor: "#000",
          })}
          text={`12`}
        />
        <p className="text-center mt-2 text-sm font-medium">
          Feedback Pending
        </p>
        <button className="mt-2 w-full bg-purple-600 text-white py-1 rounded hover:bg-purple-700">
          Give Feedback →
        </button>
      </div>

    </div>
  );
}
