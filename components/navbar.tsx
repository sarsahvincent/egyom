import Button from "@mui/material/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import imageLoader from "../imageLoader";
import styles from "../styles/NavBar.module.css";
import Image from "next/image";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CloseIcon from "@mui/icons-material/Close";

function NavBar() {
  const router = useRouter();
  const [togglemenu, setToggleMenu] = useState<boolean>(true);
  const [screenWidth, setScreenWidth] = useState<number>(0);

  const setShowPanel = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setToggleMenu(!togglemenu);
  };

  const goToRegistrationPage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    router.push("/register");
  };
  const goToLoginPage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    router.push("/login");
  };

  const changeWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    changeWidth();
    setToggleMenu(false);
  }, [router, screenWidth]);
  /*   useEffect(() => {
    changeWidth();
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerHeight - 140);
    });
  }, [screenWidth]);
 */
  return (
    <div className={styles.navbarContainer}>
      <nav className={styles.navbar}>
        <section className={styles.logo}>
          <div className={styles.logoContainer}>
            <section className={styles.logo}>
              <Link href="/" passHref>
                <Image
                  loader={imageLoader}
                  width={80}
                  height={78}
                  unoptimized
                  className="d-block w-100"
                  src="/EgyomLogo.svg"
                  alt="logo"
                />
              </Link>
            </section>
            <section className={styles.logoIcon}>
              {!togglemenu && screenWidth < 576 ? (
                <DensityMediumIcon onClick={(e) => setShowPanel(e as any)} />
              ) : (
                <CloseIcon onClick={(e) => setShowPanel(e as any)} />
              )}
            </section>
          </div>
        </section>
        <section
          className={
            !togglemenu && screenWidth < 576 ? styles.hideList : styles.navItems
          }
        >
          <div>
            <ul className={styles.navListContainer}>
              <li className={styles.navList}>
                <Link href="/">Home</Link>
              </li>
              <li className={styles.navList}>
                <Link href="/how-it-works">How it works</Link>
              </li>
              <li className={styles.navList}>
                <Link href="/professionals">Professionals</Link>
              </li>
              <li className={styles.navList}>
                <Link href="/services">Services</Link>
              </li>
              <li className={styles.navList}>
                <Link href="/faqs">FAQs</Link>
              </li>
              <li className={styles.navList}>
                <Link href="/about">About</Link>
              </li>
              <li className={styles.navList}>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className={styles.navButtonContainer}>
            <button
              className={styles.navButtonLogin}
              onClick={(e) => goToLoginPage(e as any)}
            >
              Login
            </button>
            <button
              className={styles.navButtonRegister}
              onClick={(e) => goToRegistrationPage(e as any)}
            >
              Join Egyom
            </button>
          </div>
        </section>
      </nav>
    </div>
  );
}

export default NavBar;
