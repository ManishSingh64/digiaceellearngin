import React, { useContext, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { ReportContext } from "./Context/ReportContext";

export const Admin = () => {
  const { setAdminAuth } = useContext(ReportContext);
  const [question, setQuestion] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [optionValue, setOptionValue] = useState("");
  const [correctValue, setCorrectValue] = useState("");
  const [optionarr, setOptionArr] = useState([]);
  const [correctarr, setCorrectArr] = useState([]);
  const navigate = useNavigate();

  function addOption() {
    if (optionValue.length > 0) {
      if (optionarr.length < 4) {
        setOptionArr([...optionarr, optionValue]);
        setOptionValue("");
      } else {
        alert("4 option added");
        setOptionValue("");
      }
    } else {
      if (correctarr.length < 4) {
        setCorrectArr([...correctarr, correctValue]);
        setCorrectValue("");
      } else {
        alert("4 option added");
        setCorrectValue("");
      }
    }
  }
  
  function addQuestion() {
    console.log("in")
    axios
      .post(
        "https://dld-production.up.railway.app/question/create",
        {
          id: uuidv4(),
          difficulty: difficulty,
          question: question,
          optionArr: optionarr,
          correctArr: correctarr,
        }
      )
      .then((res) => {
        console.log("hi");
      }).catch((er) => {
        console.log(er)
      });
  }
  function handleHome() {
    setAdminAuth(false);
    localStorage.removeItem("adminToken");
    navigate("/");
  }
  return (
    <div>
      <h1>Admin Panel</h1>
      <input
        type="text"
        placeholder="questions"
        onChange={(e) => setQuestion(e.target.value)}
      />
      <input
        type="text"
        placeholder="Difficulty level"
        onChange={(e) => setDifficulty(e.target.value)}
      />

      <input
        type="text"
        value={optionValue}
        placeholder="Fill all 4 options"
        onChange={(e) => setOptionValue(e.target.value)}
      />

      <input
        type="text"
        value={correctValue}
        placeholder="Correct options"
        onChange={(e) => setCorrectValue(e.target.value)}
      />
      <button onClick={addOption}>Add 4 Options / Correct Options</button>
      <div>
        <button onClick={addQuestion}>Upload Quesiton</button>
      </div>
      <br />
      <br />
      <button onClick={handleHome}>Go To Home Page</button>
    </div>
  );
};
