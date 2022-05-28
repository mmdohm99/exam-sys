import { createContext, useState, useEffect, useContext } from "react";
import ExamContext from "../Module/ExamProvider";
export const GradesContext = createContext({});

export const GradesProvider = ({ children }) => {
  const { exam } = useContext(ExamContext);
  const [grades, setGrades] = useState(0);
  const [final, setFinal] = useState(0);
  useEffect(() => {
    setFinal((grades * 100) / exam?.length);
  }, [grades, exam]);

  return (
    <GradesContext.Provider value={{ setGrades, grades, setFinal, final }}>
      {children}
    </GradesContext.Provider>
  );
};

export default GradesContext;
