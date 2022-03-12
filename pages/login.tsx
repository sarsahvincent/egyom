import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Checkbox, IconButton, TextField } from "@mui/material";
import type { NextPage } from "next";
import styles from "../styles/Login.module.css";
import { ClipLoader } from "react-spinners";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import imageLoader from "../imageLoader";
import * as auth from "../services/auth";
import Api from "../services/api";

interface Props {}
const Login: NextPage = () => {
  const stateSchema = {
    loginMail: { value: "", error: "" },
    password: { value: "", error: "" },
  };
  const stateValidatorSchema = {
    loginMail: {
      required: true,
      validator: {
        func: (value: string) =>
          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            value
          ),
        error: "Email must be a valid one",
      },
    },
    password: {
      required: true,
      validator: {
        func: (value: string) =>
          /^(?=.*[A-Za-z])(?=.*[@$!%*#?&.,<>();:^/[+'"])[A-Za-z\d@$!%*#?&.,<>();:^/[+'"]{8,}$/.test(
            value
          ) && /([0-9])/.test(value),
        error: "Minimum 8, at least a special character & a number",
      },
    },
  };

  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const [userType, setUserType] = useState(1);
  const [loginMail, setLoginMail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loading, setloading] = useState(false);

  const [password, setPassword] = useState(false);

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const loginUser = (event: any) => {
    event.preventDefault();
    const data = {
      email: loginMail,
      password: loginPassword,
    };

    console.log("data", data.email, data.password);
    if (loginMail === "" || loginPassword === "") {
      setOpen(true);
      setAlert({
        open: true,
        message: "Both fields cannot be empty",
        severity: "error",
      });
    } else {
      setloading(true);
      auth.loginUser(data).then((response) => {
        setUserType(response as any);
        setloading(false);
        window.location.assign("/professionals");
      });
    }
  };
  return (
    <div className={styles.container}>
      <section className={styles.login}>
        <section className={styles.heading}>
          <div className={styles.welcome}>Welcome Back</div>
          <div className={styles.heading}>Login to continue</div>
        </section>
        <section className={styles.loginFroms}>
          <form onSubmit={loginUser} className={styles.form}>
            <div className={styles.emailContainer}>
              <div id="email" className={styles.emailLabel}>
                Email
              </div>
              <div className={styles.emailField}>
                <TextField
                  id="email"
                  label="Email"
                  type="email"
                  variant="outlined"
                  size="small"
                  name="loginMail"
                  className={styles.email}
                  fullWidth
                  value={loginMail}
                  onChange={(e) => setLoginMail(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.passwordContainer}>
              <div id="password" className={styles.passwordLabel}>
                Password
              </div>
              <div className={styles.emailField}>
                <TextField
                  label="Password"
                  variant="outlined"
                  size="small"
                  id="password"
                  name="password"
                  className={styles.password}
                  type="password"
                  fullWidth
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.forgotPasswordContainer}>
              <div className={styles.rememberMe}>
                <Checkbox />
                Remember me
              </div>
              <div className={styles.forgotPassword}>
                <Link href="/forgot-password">Forgot Password</Link>
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <button
                className={styles.button}
                type="submit"
                disabled={loading}
              >
                {loading && (
                  <div>
                    <ClipLoader size={15} color="#1b98e0" loading />
                  </div>
                )}
                {loading ? "" : "Log In"}
              </button>
            </div>
          </form>
        </section>

        <section className={styles.loginWithSocials}>
          <section className={styles.socialLabel}>
            <div className={styles.line}>
              <hr />
            </div>
            <div className={styles.loginWithSocialsLabel}>
              Or login with socials
            </div>
            <div className={styles.line}>
              <hr />
            </div>
          </section>
          <section className={styles.socialIcons}>
            <FacebookIcon />
            <GoogleIcon className={styles.googleIcon} />
            <TwitterIcon />
          </section>
        </section>
        <section className={styles.createAccountContainer}>
          <div className={styles.createAccount}>
            <div>Dont have an account ?</div>
            <div className={styles.create}>
              <Link href="/signup"> Create Account</Link>
            </div>
          </div>
        </section>
      </section>
      <section className={styles.image}>
        <Image
          loader={imageLoader}
          width={651}
          height={750}
          src="/Welcome-Image.svg"
          alt="logo"
        />
      </section>
    </div>
  );
};

export default Login;
