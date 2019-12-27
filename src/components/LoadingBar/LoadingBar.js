import React, { useState } from "react";
import { Progress, Badge } from "reactstrap";

const [resolution, delay] = [5, 120];

export default function LoadingBar({}) {
  const [progress, setProgress] = useState(0);
  const intervalId = setInterval(handleIntervalPass, delay);

  function handleIntervalPass() {
    clearInterval(intervalId);
    if (progress >= 100) {
      setProgress(0);

      return;
    }
    setProgress(progress + resolution);
  }

  return (
    <div className="progress-wrapper">
      <div className="progress-info">
        <Badge color="secondary" className="badge-default" pill>
          Default
        </Badge>
      </div>
      <Progress max="100" value={progress} />
    </div>
  );
}
