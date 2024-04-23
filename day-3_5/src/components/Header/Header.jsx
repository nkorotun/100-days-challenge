import { Timer } from "../Timer";
import classes from "./Header.module.css";

export const Header = ({ isFinished, onTimerFinish, onRestart }) => {
  return (
    <header className={classes.header}>
      <div className="logo">
        <span className={classes.logo__name}>Memory</span>
      </div>
      <Timer finish={isFinished} onRefresh={onRestart} onFinish={onTimerFinish} />
    </header>
  );
};
