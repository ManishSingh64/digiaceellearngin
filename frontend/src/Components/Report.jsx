import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReportContext } from "./Context/ReportContext";
import { LineChart } from "./LineChart";

export const Report = () => {
  const { data } = useContext(ReportContext);
  const [attempts,setAttempts] = useState(data[data.length-1].attempts)
  const navigate = useNavigate();
  console.log(data)
  function handleClick() {
    localStorage.removeItem("userToken");
    navigate("/");
  }
  return (
    <div>
      <h1>Report</h1>
      {/* <LineChart chartData={chartData}/> */}
      <h1>Attempts: {attempts - 1}</h1>
      <h1>Score: {data[data.length-1].score}</h1>
      <div>
        <button onClick={handleClick}>Back to HomePage</button>
      </div>
    </div>
  );
};
