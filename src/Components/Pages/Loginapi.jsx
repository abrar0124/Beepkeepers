import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import axios from "axios";
import "./Sassfile.scss";
import { login, setField, reset } from "../../features/counter/Counterslice";

const Loginapi = () => {
  const dispatch = useDispatch();

  const {
    name,
    email,
    password,
    errorMessage,
    submittedEmail,
    submittedPassword,
  } = useSelector((state) => state.counter);
  const loginfunction = async () => {
    try {
      const data = {
        name,
        email,
        password,
        avatar: "https://picsum.photos/800",
      };
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/users/",
        data
      );

      if (response.status === 200 || response.status === 201) {
        console.log("API Response:", response.data);
      } else {
        throw new Error("Failed to create user.");
      }
    } catch (error) {
      console.error("API Error:", error);
    }
  };
  return (
    <>
      <div>
        <div className="login-container">
          <div className="text-container">
            <img
              src="/Images/download1.png"
              className="image1"
              alt="Login visual 1"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="form-container"
          >
            <h1 className="title">Sign In</h1>
            <div className="input-container">
              <label htmlFor="name" className="label">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) =>
                  dispatch(setField({ field: "name", value: e.target.value }))
                }
                className="input"
              />
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
            <div
              className="additional-options"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <div>
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe" className="remember-me-label">
                  Remember Me
                </label>
              </div>
              <a
                href="#"
                className="forgot-password"
                style={{ cursor: "pointer" }}
              >
                Forgot Password?
              </a>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={loginfunction}
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
            <p style={{ color: "white", cursor: "pointer" }}>
              Or sign In with another account?
            </p>
            <div
              className="flexo"
              style={{ display: "flex", gap: "4px", justifyContent: "center" }}
            >
              <p style={{ color: "white", cursor: "pointer" }}>
                Don’t have an account?
              </p>
              <a href="#" className="zzzz">
                Click here to signup
              </a>
            </div>
          </motion.div>
          <div>
            <img
              src="/Images/download2.png"
              className="image2"
              alt="Login visual 2"
            />
          </div>
        </div>
        <div>
          <h2 className="ssaass" style={{ fontWeight: "bold", color: "white" }}>
            **Your Detail Here**
          </h2>
          {submittedEmail && (
            <p style={{ color: "white", marginLeft: "40%" }}>
              <span>Email:</span> {submittedEmail}
            </p>
          )}
          {submittedPassword && (
            <p style={{ color: "white", marginLeft: "40%" }}>
              <span>Password:</span> {submittedPassword}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Loginapi;
