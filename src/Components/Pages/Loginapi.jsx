import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import { login, setField, reset } from "../../features/counter/Counterslice";

const Loginsignup = () => {
  const dispatch = useDispatch();
  const {
    email,
    password,
    errorMessage,
    isSignup,
    submittedEmail,
    submittedPassword,
  } = useSelector((state) => state.counter);

  return (
    <>
      <div style={styles.container}>
        <div style={styles.textContainer}>
          <h1 style={styles.text}>Welcome to Our Website</h1>
          <p style={styles.text}>
            {isSignup
              ? "Please enter your details to sign up."
              : "Please enter your details to login and access your account."}
          </p>
          <div>
            <h2 style={{ fontWeight: "bold" }}>***Your Detail Here***</h2>
            {submittedEmail && (
              <p style={{ color: "white" }}>
                <p style={{ color: "white" }}>Email:</p> {submittedEmail}
              </p>
            )}
            {submittedPassword && (
              <p>
                <p>Password:</p> {submittedPassword}
              </p>
            )}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={styles.formContainer}
        >
          <h1 style={styles.title}>Login Form</h1>
          <div style={styles.inputContainer}>
            <label htmlFor="email" style={styles.label}>
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                dispatch(setField({ field: "email", value: e.target.value }))
              }
              style={styles.input}
            />
          </div>
          <div style={styles.inputContainer}>
            <label htmlFor="password" style={styles.label}>
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                dispatch(setField({ field: "password", value: e.target.value }))
              }
              style={styles.input}
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              dispatch(login()); // Trigger the login action directly
            }}
            style={styles.button}
          >
            Login
          </motion.button>

          {errorMessage && <p style={styles.error}>{errorMessage}</p>}

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              dispatch(reset()); // Trigger the reset action directly
            }}
            style={styles.button}
          >
            Reset
          </motion.button>
        </motion.div>
      </div>
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "auto",
    width: "1000px",
    backgroundColor: "rgb(51, 51, 110)",
    padding: "20px",
  },
  textContainer: {
    textAlign: "center",
    color: "white",
  },
  text: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "white",
    textAlign: "center",
  },
  formContainer: {
    backgroundColor: "rgb(66, 66, 119)",
    padding: "20px 40px",
    borderRadius: "10px",
    border: "1px solid gray",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    width: "40%",
  },
  title: {
    color: "white",
    fontSize: "28px",
    marginBottom: "20px",
  },
  inputContainer: {
    marginBottom: "20px",
    textAlign: "left",
  },
  label: {
    display: "block",
    color: "white",
    fontSize: "16px",
    marginBottom: "8px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid white",
    backgroundColor: "rgb(66, 66, 119)",
    color: "white",
    fontSize: "14px",
  },
  button: {
    width: "100%",
    margin: "10px 0",
    padding: "12px",
    backgroundColor: "skyblue",
    color: "black",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
    transition: "background-color 0.3s",
  },
  error: {
    color: "red",
    fontSize: "16px",
    marginTop: "10px",
  },
};

export default Loginsignup;
