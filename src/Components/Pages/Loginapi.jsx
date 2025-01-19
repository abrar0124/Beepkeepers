import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import "./Sassfile.scss";
import { login, setField, reset } from "../../features/counter/Counterslice";
import Header from "../../Header/Header";

const Loginapi = () => {
  const dispatch = useDispatch();
  const { email, password, errorMessage, submittedEmail, submittedPassword } =
    useSelector((state) => state.counter);

  return (
    <>
      <Header />
      <div>
        <div className="login-container">
          <div className="text-container">
            <img src="/Images/download1.png" className="image1" />
          </div>
          {/* <img src="/Images/logo512.png" className="logoo" /> */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="form-container"
          >
            <h1 className="title">Sign In</h1>
            <div className="input-container">
              <label htmlFor="email" className="label">
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
                className="input"
              />
            </div>
            <div className="input-container">
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  dispatch(
                    setField({ field: "password", value: e.target.value })
                  )
                }
                className="input"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                dispatch(login());
              }}
              className="button"
            >
              Sign in
            </motion.button>
            <br />

            {errorMessage && <p className="error">{errorMessage}</p>}

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                dispatch(reset());
              }}
              className="button"
            >
              Reset
            </motion.button>
          </motion.div>
          <div>
            <img src="/Images/download2.png" className="image2" />
          </div>
        </div>
        <div>
          <h2 className="ssaass" style={{ fontWeight: "bold", color: "white" }}>
            **Your Detail Here**
          </h2>
          {submittedEmail && (
            <p style={{ color: "white", marginLeft: "40%" }}>
              <p style={{ color: "white" }}>Email:</p> {submittedEmail}
            </p>
          )}
          {submittedPassword && (
            <p style={{ color: "white", marginLeft: "40%" }}>
              <p style={{ color: "white" }}>Password:</p> {submittedPassword}
            </p>
          )}
        </div>
      </div>
    </>
  );
};
export default Loginapi;
