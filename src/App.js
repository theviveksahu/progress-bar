import { useEffect, useRef, useState } from "react";
import "./App.css";

export default function App() {
  const [progress, setProgress] = useState(0);
  const progressInterval = useRef();

  useEffect(() => {
    progressInterval.current = setInterval(() => {
      setProgress((prev) => prev + 1);
    }, 100);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      clearInterval(progressInterval.current);
    }
  }, [progress]);

  return (
    <div className="wrapper">
      <div style={{ width: progress + "%" }} className="progress-bar">
        {progress + "%"}
      </div>
    </div>
  );
}
