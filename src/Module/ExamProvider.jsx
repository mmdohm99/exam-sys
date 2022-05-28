import { createContext } from "react";

export const ExamContext = createContext({});

export const ExamProvider = ({ children }) => {
  const question = {
    q: "",
    a: [],
    c: "",
    aa: [],
    shuffle: function () {
      while (this.aa.length < this.a.length) {
        let quistionIndex = this.a[Math.floor(Math.random() * this.a.length)];
        if (this.aa.indexOf(quistionIndex) === -1) this.aa.push(quistionIndex);
      }
    },
  };
  const q1 = Object.create(question);
  q1.aa = [];
  q1.q = "what is tallest build in the world";
  q1.a = ["The pyramids", "Twin tower", "khalifa Tower", "Long Tower"];
  q1.c = "khalifa Tower";
  q1.answers = q1.shuffle();
  const q2 = Object.create(question);
  q2.aa = [];
  q2.q = "how many planets in the solar system";
  q2.a = ["7", "8", "9", "10"];
  q2.c = "8";
  q2.answers = q2.shuffle();

  const q3 = Object.create(question);
  q3.aa = [];
  q3.q = " 1+1=?";
  q3.a = ["2", "3", "4", "10"];
  q3.c = "2";
  q3.answers = q3.shuffle();

  const q4 = Object.create(question);
  q4.aa = [];
  q4.q = "who we are ?";
  q4.a = ["humans", "animals", "birds", "numbers"];
  q4.c = "humans";
  q4.answers = q4.shuffle();

  const q5 = Object.create(question);
  q5.aa = [];
  q5.q = "how many hands do we have ?";
  q5.a = ["2", "3", "9", "10"];
  q5.c = "2";
  q5.answers = q5.shuffle();

  const q6 = Object.create(question);
  q6.aa = [];
  q6.q = "how many eyes do we have ?";
  q6.a = ["7", "3", "2", "10"];
  q6.c = "2";
  q6.answers = q6.shuffle();

  const q7 = Object.create(question);
  q7.aa = [];
  q7.q = "we live in planet ?";
  q7.a = ["earth", "mars", "moon", "sun"];
  q7.c = "earth";
  q7.answers = q7.shuffle();

  const exam = [q1, q2, q3, q4, q5, q6, q7];
  return (
    <ExamContext.Provider value={{ exam }}>{children}</ExamContext.Provider>
  );
};

export default ExamContext;
