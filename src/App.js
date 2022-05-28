import { BrowserRouter, Routes, Route } from "react-router-dom";

import DisabledTabs from "./Components/Navbar";
import { Test } from "./pages/Test";
import { Login } from "./pages/Login";
import { AuthProvider } from "./Module/AuthProvider";
import { ExamProvider } from "./Module/ExamProvider";
import { GradesProvider } from "./Module/Grades";
import { Resualt } from "./pages/Resualt";
function App() {
  return (
    <>
      {" "}
      <BrowserRouter>
        <ExamProvider>
          <AuthProvider>
            <GradesProvider>
              <DisabledTabs />
              <Routes>
                <Route index element={<Login />} />
                <Route path="login" element={<Login />} />
                <Route path="resualt" element={<Resualt />} />
                <Route path="Test" element={<Test />} />
                <Route path="*" element={<div>Not Found</div>} />
              </Routes>
            </GradesProvider>
          </AuthProvider>
        </ExamProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
