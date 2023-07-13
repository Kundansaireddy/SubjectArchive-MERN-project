import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setErrorMessage("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setErrorMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://calm-erin-dove-sock.cyclic.app/api/checkUser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      if (response.ok) {
        setIsLoading(false);
        console.log("Data matches in the database");
        navigate("/auth");
      } else {
        setIsLoading(false);
        setErrorMessage("Username-Password doesnot Exist");
      }
    } catch (error) {
      setIsLoading(false);
      console.log("Error occurred while checking data:", error);
    }
  };

  const newUserHandler = (event) => {
    event.preventDefault();
    navigate("/newAdmin");
  };

  return (
    <div className={styles.container}>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <div className={styles.labelContainer}>
            <label htmlFor="emailField">UserName:</label>
          </div>
          <input
            type="text"
            id="emailField"
            value={email}
            onChange={handleEmailChange}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <div className={styles.labelContainer}>
            <label htmlFor="passwordField">Password:</label>
          </div>
          <input
            type="password"
            id="passwordField"
            value={password}
            onChange={handlePasswordChange}
            className={styles.input}
          />
        </div>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        {isLoading && <p className={styles.error}>Is Loading..</p>}
        <div className={styles.buttonContainer}>
          <button onClick={newUserHandler} className={styles.newAccountButton}>
            Create New Admin
          </button>
          <button type="submit" className={styles.signInButton}>
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
