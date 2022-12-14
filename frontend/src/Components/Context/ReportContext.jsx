import { createContext, useState } from "react";

export const ReportContext = createContext();

export const ReportProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [admintoken, setAdminToken] = useState("");
  const [usertoken, setUserToken] = useState("");
  const [adminAuth, setAdminAuth] = useState(false);
  const [userAuth, setUserAuth] = useState(false);
  const [adminId,setAdminId] = useState('')

  return (
    <ReportContext.Provider
      value={{
        setData,
        data,
        admintoken,
        setAdminToken,
        usertoken,
        setUserToken,
        adminAuth,
        setAdminAuth,
        userAuth,
        setUserAuth,
        setAdminId,
        adminId
      }}
    >
      {children}
    </ReportContext.Provider>
  );
};
