import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const checkWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", checkWidth);

    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, []);

  return width;
};

const WindowSize = () => {
  const width = useWindowSize();
  return <h1>Window inner width : {width}</h1>;
};
export default WindowSize;
