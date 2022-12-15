import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReportContext } from "./Context/ReportContext";
import { LineChart } from "./LineChart";

export const Report = () => {
  const { data } = useContext(ReportContext);
  const [attempts, setAttempts] = useState(data[data.length - 1].attempts);
  const [userData, setUserData] = useState({
    label:'x axis',
    labels: data.map((data) => data.attempts),
    datasets: [
      {
        label: "User Score",
        data: data.map((data) => data.score),
        // backgroundColor:["blue"]
      },
    ],
  });

  const navigate = useNavigate();
  console.log(data);
  function handleClick() {
    localStorage.removeItem("userToken");
    navigate("/");
  }
  return (
    <div>
      <h1>Report</h1>
      <h1>Attempts: {attempts - 1}</h1>
      <h1>Score: {data[data.length - 1].score}</h1>
      <div >
      <LineChart chartData={userData} />
      </div>
      <div>
        <button onClick={handleClick}>Back to HomePage</button>
      </div>
    </div>
  );
};
