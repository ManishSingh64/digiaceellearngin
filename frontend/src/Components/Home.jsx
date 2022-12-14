import React from "react";
import { Link } from "react-router-dom";
import styles from './Home.module.css';

const Home = () => {
  return (
    <div>
      <h1>Quiz Game</h1>
      <div className={styles.links}>
        <Link to="/admin">
          <button>Admin Panel</button>
        </Link>
        <Link to="/user">
          <button>User Panel</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
