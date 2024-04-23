import { useState, useEffect } from "react";
import classes from "./Timer.module.css";

const defaultTimeToSolve = 60 * 0.1; // 5 mins
export const Timer = ({ finish, onRefresh, onFinish }) => {
  const [time, setTime] = useState(defaultTimeToSolve);
  const [startTime, setStartTime] = useState(new Date());

  useEffect(() => {
    let interval = setInterval(() => {
      const now = new Date();
      const diff = Math.ceil((now.getTime() - startTime.getTime()) / 1000);
      if (!finish) {
        if (defaultTimeToSolve - diff <= 0) {
          onFinish();
        } else {
          setTime(Math.max(defaultTimeToSolve - diff, 0));
        }
      }
      clearInterval(interval);
    }, 1000);
    return () => clearInterval(interval);
  });

  const refreshTimer = () => {
    setStartTime(new Date());
    onRefresh();
  };

  return (
    <>
      <h2 className={classes.time}>{`${("0" + Math.floor(time / 60)).slice(
        -2
      )}:${("0" + (time % 60)).slice(-2)}`}</h2>

      <button className={"btn"} onClick={refreshTimer}>
        Restart
      </button>
    </>
  );
};
