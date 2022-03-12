import {
  Button,
  Checkbox,
  IconButton,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Register.module.css";
import { ClipLoader } from "react-spinners";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import imageLoader from "../imageLoader";
import Image from "next/image";
import { useState } from "react";

const Register: NextPage = () => {
  const [loading, setloading] = useState(false);

  const [passvalue, setPassvalue] = useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword1 = () => {
    setPassvalue({ ...passvalue, showPassword: !passvalue.showPassword });
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const login = (event: any) => {};

  return (
    <div className={styles.container}>
      <section className={styles.login}>
        <section className={styles.heading}>
          <div className={styles.welcome}>Join the club</div>
          <div className={styles.heading}>
            To get started, create an account
          </div>
        </section>
        <section className={styles.formElements}>
          <form onSubmit={login}>
            <div className={styles.emailContainer}>
              <div id="email" className={styles.emailLabel}>
                Email
              </div>
              <div className={styles.emailField}>
                <TextField
                    placeholder="Enter email"
                  id="email"
                  type="email"
                  variant="outlined"
                  size="small"
                  name="loginMail"
                  className={styles.email}
                  fullWidth
                />
              </div>
            </div>
            <div className={styles.nameContainer}>
              <section className={styles.firstNameContainer}>
                <div id="email" className={styles.nameLabel}>
                  First Name
                </div>
                <div className={styles.firstField}>
                  <TextField
                     placeholder="Enter First Name"
                    id="firstName"
                    variant="outlined"
                    size="small"
                    name="firstName"
                    className={styles.firstName}
                  />
                </div>
              </section>
              <section className={styles.firstNameContainer}>
                <div id="email" className={styles.nameLabel}>
                  Last Name
                </div>
                <div className={styles.lastField}>
                  <TextField
                  placeholder="Enter Last Name"
                    id="lastName"
                    variant="outlined"
                    size="small"
                    name="lastName"
                    className={styles.lastName}
                  />
                </div>
              </section>
            </div>

            <div className={styles.accountTypeContainer}>
              <div id="accountType" className={styles.accountType}>
                Account Type
              </div>
              <div>
                <Select
                  className={styles.accountTypeField}
                  labelId="accountType"
                  id="accountType"
                  variant="outlined"
                  name="accountType"
                  fullWidth
                >
                  <MenuItem value={10}>Buyer</MenuItem>
                </Select>
              </div>
            </div>

            <div className={styles.passwordContainer}>
              <div id="password" className={styles.passwordLabel}>
                Password
              </div>
              <div className={styles.passwordField}>
                <TextField
                  placeholder="Enter password"
                  variant="outlined"
                  size="small"
                  id="password"
                  name="password"
                  className={styles.password}
                  type="password"
                  fullWidth
                />
              </div>
            </div>

            <div className={styles.confirmPasswordContainer}>
              <div id="confirmPassword" className={styles.passwordLabel}>
                Confirm Password
              </div>
              <div className={styles.passwordField}>
                <TextField
                  placeholder="confirmPassword"
                  variant="outlined"
                  size="small"
                  id="confirmPassword"
                  name="confirmPassword"
                  className={styles.password}
                  type="password"
                  fullWidth
                />
              </div>
            </div>

            <div className={styles.termsContainer}>
              <div className={styles.terms}>
                By proceeding, you confirm you have agreed to our
                <strong className={styles.termsBold}> Terms</strong> of use and
                <strong className={styles.termsBold}> privacy policy</strong>
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
                {loading ? "" : "Create Account"}
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
              Or create account with socials
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
            <div>Already have an account? </div>
            <div className={styles.create}>
              <Link href="/login">Login</Link>
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

export default Register;
