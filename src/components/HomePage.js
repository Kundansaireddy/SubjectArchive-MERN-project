import { Fragment } from "react";
import styles from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const semesters = [
    "Semester-1",
    "Semester-2",
    "Semester-3",
    "Semester-4",
    "Semester-5",
    "Semester-6",
    "Semester-7",
    "Semester-8",
  ];

  const onClickHandler = (semester) => {
    navigate(`${semester}`);
  };
  return (
    <Fragment>
      <div className={styles.container}>
        {semesters.map((semester, index) => (
          <div
            onClick={() => {
              onClickHandler(semester);
            }}
            key={index}
            className={styles.card}
          >
            {semester}
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default HomePage;
