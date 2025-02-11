"use client";

import React, { useState, useEffect, useCallback } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface Contestants {
  contest: {
    endDate: string;
  };
}

const ContestCounter = () => {
  const contestants: Contestants = {
    contest: { endDate: "2025-02-10T23:59:59" }
  };

  const calculateTimeLeft = useCallback(() => {
    const now = new Date();
    const endDate = new Date(contestants?.contest?.endDate);
    const timeDiff = endDate.getTime() - now.getTime();

    return {
      days: Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((timeDiff % (1000 * 60)) / 1000)
    };
  }, [contestants]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  if (!contestants) {
    return (
      <div className="text-center w-full text-lg mt-4">
        Now no contest is running, register yourself for the upcoming contest.
      </div>
    );
  }

  // Calculate the percentage for the seconds circular progress
  const secondsProgress = (timeLeft.seconds / 60) * 100;

  return (
    <div className="flex justify-between items-center">
      <div>
        <span className="mt-8 text-[3rem] font-bold font-nunito">
          Contest Ends In
        </span>
      </div>
      <div className="flex flex-wrap justify-center gap-[3rem]">
        <div className="h-[5rem] w-[5rem]">
          <CircularProgressbar
            value={timeLeft.days}
            text={`${timeLeft.days}d`}
            className="w-32 md:w-20 drop-shadow-md"
            styles={progressBarStyles}
          />
        </div>
        <div className="h-[5rem] w-[5rem]">
          <CircularProgressbar
            value={timeLeft.hours}
            text={`${timeLeft.hours}h`}
            className="w-32 md:w-20 drop-shadow-md"
            styles={progressBarStyles}
          />
        </div>
        <div className="h-[5rem] w-[5rem]">
          <CircularProgressbar
            value={timeLeft.minutes}
            text={`${timeLeft.minutes}m`}
            className="w-32 md:w-20 drop-shadow-md"
            styles={progressBarStyles}
          />
        </div>
        <div className="h-[5rem] w-[5rem]">
          <CircularProgressbar
            value={secondsProgress}
            text={`${timeLeft.seconds}s`}
            className="w-32 md:w-20 drop-shadow-md"
            styles={progressBarStyles}
          />
        </div>
      </div>
    </div>
  );
};

const progressBarStyles = {
  path: {
    stroke: "#BA5EEF",
    filter: "drop-shadow(0px 0px 4px rgba(255, 255, 255, 0.3))",
    strokeWidth: 8
  },
  trail: {
    stroke: "white",
    strokeWidth: 2
  },
  text: {
    fill: "white",
    fontSize: "16px",
    fontWeight: "bold"
  }
};

export default ContestCounter;
