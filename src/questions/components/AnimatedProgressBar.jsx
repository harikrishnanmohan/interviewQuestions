import { useEffect, useState } from "react";

const ProgressBar = ({ value }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage(0);
    const interval = setInterval(() => {
      console.log("interval");
      setPercentage((prev) => {
        if (prev >= value) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, [value]);

  return (
    <div className="progressbar">
      <span
        className="percentage"
        style={{ color: `${percentage > 49 ? "#fff" : "#000"}` }}
      >
        {percentage}%
      </span>
      <div
        className="progressbar__percentage"
        style={{
          width: `${percentage}%`,
        }}
        // style={{ transform: `scaleX(${percentage}%)` }}
      ></div>
    </div>
  );
};

const AnimatedProgressBar = () => {
  const data = [0, 10, 60, 75, 100];
  return (
    <div className="animated_progressbar">
      {data.map((item, index) => (
        <ProgressBar key={index} value={item} />
      ))}
    </div>
  );
};

export default AnimatedProgressBar;
