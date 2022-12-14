import React, { useEffect, useState } from "react";
import axios from "axios";
import { Slide } from "./Slide";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ReportContext } from "./Context/ReportContext";
import styles from "./User.module.css";
import { Quizes } from "./Quizes";

export const User = () => {
  const { setData, data, setAdminId } = useContext(ReportContext);
  const [questions, setQuestions] = useState([]);
  const [difficulty, setDifficulty] = useState(5);
  const [numberOfQuizes, setNumberOfQuizes] = useState([]);

  const navigate = useNavigate();

  let token = localStorage.getItem("userToken");

  async function getQuiz() {
    // console.log(token, "userToken");
    await axios.get(`https://dld-production.up.railway.app/question`).then((res) => {
      // console.log(res.data)
      setQuestions([...res.data]);
      let num = Math.ceil(res.data.length / 10); //2
      let arr = new Array(num).fill(1);
      setNumberOfQuizes([...arr]);
    });
  }
  useEffect(() => {
    getQuiz();
  }, []);
  function showQuiz(number) {
    console.log(questions[number * 10].AdminId)
    setAdminId(questions[number * 10].AdminId);
    navigate('/quiz')
  }
  // console.log("quis", quizes);

 
   console.log(data)
  return (
    <div>
      <h1>User Panel</h1>
      {numberOfQuizes?.map((el, i) => (
        <h1 className={styles.quiz} key={i} onClick={() => showQuiz(i)}>
          Quiz {i + 1}
        </h1>
      ))}

      
    </div>
  );
};
