import { useState, useEffect, useContext } from "react";

import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Stack from "@mui/material/Stack";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import GradesContext from "../Module/Grades";
import ExamContext from "../Module/ExamProvider";

import classes from "../Styles/Test.module.css";

export const Test = () => {
  const navigate = useNavigate();

  const { setGrades } = useContext(GradesContext);
  const { exam } = useContext(ExamContext);

  const [active, setActive] = useState(true);
  const [answers, setAnswers] = useState([]);
  const [answersIndex, setAnswersIndex] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [examQuestion, setExamQuestion] = useState("");

  let current = examQuestion[currentQuestion];

  useEffect(() => {
    const exist = answers.find((item) => item.q === current.q);
    if (exist) {
      setActive(false);
    } else {
      setActive(true);
    }
  }, [answers, current]);

  const marking = () => {
    // eslint-disable-next-line array-callback-return
    answers?.map((item) => {
      if (item.correct === item.a) {
        setGrades((grades) => grades + 1);
      }
    });
  };

  const handleChange = (e, current) => {
    const exist = answers.find((item) => item.q === current.q);
    if (exist) {
      exist.a = e.target.value;
      setAnswers([...answers]);
    } else {
      setAnswers([
        ...answers,
        { correct: current.c, q: current.q, a: e.target.value },
      ]);
    }
  };
  const handleChange1 = (e, current) => {
    setAnswersIndex((old) => {
      old[currentQuestion] = current.aa.indexOf(e.target.value);
      return old;
    });
  };

  useEffect(() => {
    let shuffledExam = [];
    while (shuffledExam.length < exam?.length) {
      let quistionIndex = exam[Math.floor(Math.random() * exam?.length)];
      if (shuffledExam.indexOf(quistionIndex) === -1)
        shuffledExam.push(quistionIndex);
    }
    setExamQuestion(shuffledExam);
  }, [exam]);

  return (
    <>
      <div className={classes.cont}>
        <div>
          <h4> Question No.{currentQuestion + 1}</h4> <h3>{current?.q}</h3>
        </div>
        <div>
          <Stack sx={{ width: "100%" }} spacing={2}>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              // defaultValue={answers?.map((item) => item?.a)[currentQuestion]}
            >
              {current?.aa?.map((answer, index) => (
                <FormControlLabel
                  key={uuidv4()}
                  checked={
                    index === answersIndex[currentQuestion] ? true : false
                  }
                  value={answer}
                  control={<Radio />}
                  label={answer}
                  onChange={(e) => {
                    handleChange1(e, current);
                    handleChange(e, current);
                    setActive(false);
                  }}
                />
              ))}
            </RadioGroup>
          </Stack>
        </div>
        <div className={classes.btnCont}>
          <button
            className={active ? classes.btnd : classes.btn}
            disabled={active}
            onClick={() =>
              setCurrentQuestion(
                currentQuestion === 6
                  ? currentQuestion + 0
                  : currentQuestion + 1
              )
            }
          >
            Next
          </button>
          <button
            className={classes.btn}
            onClick={() =>
              setCurrentQuestion(
                currentQuestion === 0
                  ? currentQuestion + 0
                  : currentQuestion - 1
              )
            }
          >
            Prev
          </button>
        </div>
        <button
          className={
            answers.length < examQuestion.length ? classes.yet : classes.fin
          }
          disabled={answers.length < examQuestion.length ? true : false}
          type="button"
          onClick={() => {
            marking();
            navigate("/resualt", { replace: true });
          }}
          variant="outlined"
        >
          {" "}
          Finish{" "}
        </button>
      </div>
    </>
  );
};
