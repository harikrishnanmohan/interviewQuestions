import { useEffect, useState } from "react";

const Bar = ({ progress }) => {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgressValue(progress);
    }, 100);

    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div className="outer">
      <div
        className="inner"
        style={{ transform: `translateX(${progressValue - 100}%)` }}
      >
        <span className="progress-value">{progressValue}%</span>
      </div>
    </div>
  );
};

const Progressbar = () => {
  const values = [0, 10, 15, 20, 40, 60, 70, 100];
  return values.map((value) => <Bar progress={value} />);
};
export default Progressbar;
