import React from "react";
import styles from "../styles/About.module.css";

function AboutCard(props: any) {
  return (
    <div className={styles.AboutCard}>
      <div
        style={{ backgroundColor: props.color }}
        className={styles.aboutCardColor}
      ></div>
      <div className={styles.aboutCardTitleInfo}>
        <b>{props.title}</b>
        <p className={styles.aboutCardinfo}>{props.info}</p>
      </div>
    </div>
  );
}

export default AboutCard;
