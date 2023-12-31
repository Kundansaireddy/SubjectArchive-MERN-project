import { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./SubjectPage.module.css";
const SubjectPage = () => {
  const params = useParams();
  const [fileData, setFileData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const subject = params.subject;
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    fetch("https://getdata-api.onrender.com/api/data")
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        const filteredData = data
          .filter((item) => item.subject === subject)
          .map((item) => [item.name, item.link]);
        setFileData(filteredData);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log("Error fetching data:", error);
      });
  };
  return (
    <Fragment>
      {isLoading && <h1 className={styles.container}>Is Loading..</h1>}
      {!isLoading && fileData.length === 0 && (
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
