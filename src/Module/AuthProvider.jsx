import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [signInMail, setSignInMail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [signInName, setSignInName] = useState("");
  const [signInConfirmPassword, setSignInConfirmPassword] = useState("");
  return (
    <AuthContext.Provider
      value={{
        signInMail,
        setSignInMail,
        signInPassword,
        setSignInPassword,
        signInName,
        setSignInName,
        signInConfirmPassword,
        setSignInConfirmPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
