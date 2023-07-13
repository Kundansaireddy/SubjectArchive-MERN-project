import { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./SubjectPage.module.css";
const SubjectPage = () => {
  const params = useParams();
  const [fileData, setFileData] = useState([]);
  const subject = params.subject;
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    fetch("https://getdata-api.onrender.com/api/data")
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data
          .filter((item) => item.subject === subject)
          .map((item) => [item.name, item.link]);
        setFileData(filteredData);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  };
  return (
    <Fragment>
      {fileData.length === 0 && (
        <div className={styles.container}>
          <h1>No files uploaded</h1>
        </div>
      )}
      {fileData.length !== 0 && <h1>Uploaded Files</h1>}
      <div className={styles.container}>
        {fileData.map((item) => (
          <div className={styles.subjectCard}>
            {" "}
            {item[0]}
            <a href={item[1]} download>
              <button className={styles.loginButton}> Download </button>
            </a>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default SubjectPage;
