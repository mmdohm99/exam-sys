import React from "react";
import classes from "../Styles/Resualt.module.css";
import { useContext } from "react";
import AuthContext from "../Module/AuthProvider";
import GradesContext from "../Module/Grades";
export const Resualt = () => {
  const { signInName } = useContext(AuthContext);
  const { final } = useContext(GradesContext);
  return (
    <>
      <div className={classes.cont}>
        {final > 50 ? (
          <h2>
            Congartiolations {signInName} you passed the Exam your final resualt
            is : <span style={{ color: "green" }}>{final}%</span>
          </h2>
        ) : (
          <h2>
            Unfortunately {signInName} you Didn't pass the Exam your final
            resualt is : <span style={{ color: "red" }}>{final}%</span>
          </h2>
        )}
      </div>
    </>
  );
};
