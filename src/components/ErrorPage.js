import { Fragment } from "react";
import styles from "./ErrorPage.module.css";
import NavBar from "./NavBar";
const ErrorPage = () => {
  return (
    <Fragment>
      <NavBar />
      <div className={styles.container}>
        <h1>Entered unknown URL</h1>
      </div>
    </Fragment>
  );
};

export default ErrorPage;
