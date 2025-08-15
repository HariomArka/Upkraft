import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Dial = ({ pathcolor,textcolor, value, maxValue, degrees, label }) => {
  // Convert degrees to rotation and arc length
  let rotation = 0; // default full circle
  let arcLength = 1; // full arc

  if (degrees === 180) {
    rotation = 0.75; // starts from bottom-left
    arcLength = 0.5; // half arc
  } else if (degrees === 270) {
    rotation = 0.625; // start slightly above bottom-left
    arcLength = 0.75; // 270° arc
  }

  return (
    <div className="flex flex-col items-center ">
      {label && (
        <p className="text-center mt-2 text-sm font-medium mb-3">{label}</p>
      )}
      <CircularProgressbarWithChildren
        value={value}
        maxValue={maxValue}
        styles={buildStyles({
          rotation: rotation,
          strokeLinecap: "round",
          trailColor: "#f3f3f3",
          pathColor: pathcolor,
          pathTransitionDuration: 0.5,
        })}
        circleRatio={arcLength}
      >
        <div className="text-2xl font-bold" style={{color: textcolor}}>
          {value}
          {maxValue !== 100 && <span className="text-sm">/{maxValue}</span>}
        </div>
      </CircularProgressbarWithChildren>

    </div>
  );
};

export default Dial;
