import React, { useContext, useState } from "react";
import { useEffect } from "react";
import styles from './Slide.module.css';

export const Slide = ({
  quizes,
  handleNext,
  setScore,
  count,
  setAttempts,
  totalQuestions,
}) => {
  const { question, difficulty, options, correct } = quizes;
  const [selected, setSelected] = useState([]);
  const [save, setSave] = useState(false);
  console.log(count,'slide')
  useEffect(() =>{
    setSave(!save)
  },[count])

  function handleSelect(e) {
    const { checked, value } = e.target;
    if (checked) {
      if (!selected.includes(value)) {
        setSelected([...selected, value]);
      }
    }
  }

  function handleSave() {
    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;
    document.getElementById("check4").checked = false;
    alert("saved")
    setSave(!save)
    setAttempts((attempts) => attempts + 1);
    correct.sort((a, b) => a - b);
    selected.sort((a, b) => a - b);
    if (correct.length != selected.length) {
      return setScore((score) => score - 2);
    } else {
      for (var i = 0; i < selected.length; i++) {
        if (correct[i] != selected[i]) return setScore((score) => score - 2);
        return setScore((score) => score + 5);
      }
    }
  }
  return (
    <div className={styles.question}>
      <h2>All The Best 👍</h2>
      <h5>difficulty :{difficulty}</h5>
      <div>
        <h1>{question}</h1>
      </div>
      <input
        id="check1"
        onClick={(e) => handleSelect(e)}
        type="checkbox"
        value={options[3]}
      />
      <label htmlFor="">{options[3]}</label>
      <input
        id="check2"
        onClick={(e) => handleSelect(e)}
        type="checkbox"
        value={options[0]}
      />
      <label htmlFor="">{options[0]}</label>
      <input
        id="check3"
        onClick={(e) => handleSelect(e)}
        type="checkbox"
        value={options[1]}
      />
      <label htmlFor="">{options[1]}</label>
      <input
        id="check4"
        onClick={(e) => handleSelect(e)}
        type="checkbox"
        value={options[2]}
      />
      <label htmlFor="">{quizes.options[2]}</label>
      <div>
          <button disabled={!save} onClick={handleSave}>
            Save
          </button>
        </div>
    </div>
  );
};
