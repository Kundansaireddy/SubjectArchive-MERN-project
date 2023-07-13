import React from "react";
import { Fragment } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "../components/Subjects.module.css";

const SubjectsAuth = () => {
  const params = useParams();
  const navigate = useNavigate();
  const subjects = {};
  const currSem = params.semester;
  semesters.forEach((sem, index) => {
    subjects[sem] = subjectNames[index];
  });
  const currSubjects = subjects[currSem];

  const onClickHandler = (subject) => {
    navigate(`${subject}`);
  };

  return (
    <Fragment>
      <div className={styles.container}>
        <h1> {params.semester} </h1>
        {currSubjects.map((subject, index) => (
          <div
            onClick={() => {
              onClickHandler(subject);
            }}
            className={styles["subject-card"]}
            key={index}
          >
            {subject}
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default SubjectsAuth;

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
const subjectNames = [
  [
    "Linear Algebra & Calculus",
    "Optics and Semiconductor Physics",
    "Problem Solving And Programming",
    "English",
    "Optics and Semiconductor Physics Lab",
    "English Lab",
    "Problem Solving And Programming",
    "CAD AND DRAFTING",
    "Digital Fabrication Lab",
  ],
  [
    "Differential Equations & Numerical Methods",
    "Chemistry",
    "Basic Electrical Engineering",
    "Object Oriented Programming",
    "Chemistry Lab",
    "Community Engagement",
    "Object Oriented Programming Lab",
    "Robotics & Drones Lab",
    "Basic Electrical Engineering Lab",
  ],
  [
    "Basic Electrical Engineering",
    "Basic Electronics",
    "Data Structures",
    "Discrete Mathematics",
    "Digital Logic Design",
    "Fundamentals of Data Science",
    "Basic Electrical Engineering Lab",
    "Basic Electronics Lab",
    "Data Structures Lab",
    "Fundamentals of Data Science Lab",
    "MOOCs / Training / Internship",
    "Activity Points",
  ],
  [
    "Mathematical Foundation for Data Science & Security",
    "Computer Architecture and Microprocessor",
    "Data Base Management Systems",
    "Internet and Web Technologies",
    "Artificial Intelligence",
    "Engineering Economics & Accountancy",
    "Mathematical Foundation for Data Science & Security Lab",
    "Data Base Management Systems Lab",
    "Internet and Web Technologies Lab",
    "Activity Points",
  ],
  [
    "Design and Analysis of Algorithms",
    "Operating Systems",
    "Software Engineering",
    "Machine Learning",
    "Professional Elective – I",
    "Open Elective-I",
    "Design and Analysis of Algorithms Lab",
    "Operating Systems Lab",
    "Case Studies Lab using UML",
    "Machine Learning Lab",
    "Internship-II (Industrial/ Rural Internship)",
  ],
  [
    "Data Communication and Computer Networks",
    "Deep Learning for Computer Vision",
    "Theory of Computation & Compilers",
    "Professional Elective – II",
    "Professional Elective – III",
    "Open Elective-II",
    "Universal Human Values-II: Understanding Harmony",
    "Deep Learning for Computer Vision Lab",
    "Professional Elective – II Lab",
    "Employability Skills",
  ],
  [
    "Cloud Technologies",
    "Professional Elective-IV",
    "Open Elective-III",
    "Indian Constitution and Fundamental Principles",
    "Indian Traditional Knowledge",
    "Professional Elective-IV Lab",
    "Technical Seminar",
    "Project Part-1",
    "Internship-III",
  ],
  [
    "Professional Elective-V",
    "Environmental Science",
    "Gender Sensitization",
    "Project Part – 2",
  ],
];
