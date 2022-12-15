import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { ReportContext } from "./Context/ReportContext";
import { useNavigate } from "react-router-dom";
import "./Quizes.css";

export const Quizes = () => {
  const { setData, data, adminId } = useContext(ReportContext);
  const [quiz, setQuiz] = useState();
  const [correct, setCorrect] = useState();
  const [difficulty, setDifficulty] = useState(5);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [selected, setSelected] = useState([]);
  const [checked, setChecked] = useState(false);
  const [activeAns, setActiveAns] = useState();

  const navigate = useNavigate();
  // console.log(adminId)
  useEffect(() => {
    setSelected([]);
    setActiveAns();
    axios
      .get(
        `https://dld-production.up.railway.app/question/${adminId}/${difficulty}`
      )
      .then((res) => {
        console.log(res);
        setQuiz(res.data[0]);
        setCorrect(res.data[0].correct);
        // setTotalQuestions(res.data.length);
      });
  }, [difficulty]);

  function handleNext() {
    console.log(correct, selected);

    if (correct.length !== selected.length) {
      if (difficulty == 1) {
        setScore((prev) => prev - 2);
        setAttempts((prev) => prev + 1);
        setData([...data, { attempts: attempts, score: score }]);
        navigate("/reports");
        return;
      }
      setScore((prev) => prev - 2);
      setAttempts((prev) => prev + 1);
      setDifficulty((prev) => prev - 1);
      setData([...data, { attempts: attempts, score: score }]);
    } else {
      let result =
        selected.sort((a, b) => a - b).join() ==
        correct.sort((a, b) => a - b).join();
      console.log("res", result);
      if (result) {
        // if (difficulty == 10) {
        //   setScore((prev) => prev + 5);
        //   setAttempts((prev) => prev + 1);
        //   setData([...data, { attempts: attempts, score: score }]);
        //   navigate("/reports");
        //   return;
        // }
        console.log("true", result);
        setScore((prev) => prev + 5);
        setAttempts((prev) => prev + 1);
        setDifficulty((prev) => prev + 1);
        setData([...data, { attempts: attempts, score: score }]);
        console.log(data);
      } else {
        if (difficulty == 1) {
          setScore((prev) => prev - 2);
          setAttempts((prev) => prev + 1);
          setData([...data, { attempts: attempts, score: score }]);
          navigate("/reports");
          return;
        }
        setScore((prev) => prev - 2);
        setAttempts((prev) => prev + 1);
        setDifficulty((prev) => prev - 1);
        setData([...data, { attempts: attempts, score: score }]);
      }
    }
  }
  if (difficulty == 11) {
    setData([...data, { attempts: attempts, score: score }]);
    navigate("/reports");
  }
  function handleOption(i, el) {
    console.log(i);
    console.log(el);
    // const { innerText } = e.target;
    // console.log(e.target.innerText);
    if (!selected.includes(el)) {
      setActiveAns(i);
      setSelected([...selected, el]);
    } else {
      setActiveAns();
      const index = selected.indexOf(el);
      selected.splice(index, 1);
      setSelected([...selected]);
    }
  }

  return (
    <div>
      <div>
        <h1>Score : {score}</h1>
        <h3>Difficulty: {quiz?.difficulty}</h3>
        <h1>{quiz?.question}</h1>
        {quiz?.options?.map((el, i) => (
          <div key={i} className={i === activeAns ? "active" : "inactive"}>
            {/* <input type="checkbox" value={el} name='sel' onChange={handleChange} checked={checked}/> */}
            <h3 onClick={() => handleOption(i, el)}>{el}</h3>
            {/* <label>{el}</label> */}
          </div>
        ))}
      </div>

      <div>
        <button onClick={handleNext}>Next Question</button>
      </div>
    </div>
  );
};
