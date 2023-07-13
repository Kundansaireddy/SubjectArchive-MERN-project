import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NewAdmin.module.css";

const NewAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
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

    if (email === "" || password === "") {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    const userData = {
      name: email,
      password: password,
    };

    try {
      const response = await fetch(
        "https://authenticate-api-9vg2.onrender.com/api/ifAlready",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (response.ok) {
        console.log("Email does not exist in the database");
        // Proceed with adding the new user
        try {
          const addUserResponse = await fetch(
            "https://authenticate-api-9vg2.onrender.com/api/newuser",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userData),
            }
          );

          if (addUserResponse.ok) {
            console.log("Data posted successfully");
            setEmail("");
            setPassword("");
            navigate("/admin");
          } else {
            console.log("Failed to post data");
          }
        } catch (error) {
          console.log("Error occurred while posting data:", error);
        }
      } else {
        console.log("Email already exists in the database");
        setErrorMessage("Email already exists.");
      }
    } catch (error) {
      console.log("Error occurred while checking data:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>UserName:</label>
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className={styles.input}
          />
        </div>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        <button type="submit" className={styles.addButton}>
          Add User
        </button>
      </form>
    </div>
  );
};

export default NewAdmin;
