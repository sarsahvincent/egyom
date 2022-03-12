import Footer from "./footer";
import NavBar from "./navbar";
import styles from "../styles/Home.module.css";
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layoutContainer}>
      <NavBar />
      <div className={styles.layoutContainerwidth}>{children}</div>
    </div>
  );
}

export default Layout;
