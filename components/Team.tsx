import React from "react";
import Image from "next/image";
import styles from "../styles/About.module.css";

const data = [
  {
    name: "Some Nice Name",
    role: "Awesome Roel",
    image: "/images/tg5.svg",
  },
  {
    name: "Some Nice Name",
    role: "Awesome Roel",
    image: "/images/tg1.svg",
  },
  {
    name: "Some Nice Name",
    role: "Awesome Roel",
    image: "/images/tg2.svg",
  },
  {
    name: "Some Nice Name",
    role: "Awesome Roel",
    image: "/images/tg4.svg",
  },
];

function Team() {
  return (
    <div className={styles.teamCardContainer}>
      {data.map((item, index) => (
        <div key={index} className={styles.teamCard}>
          <div>
            <Image
              className={styles.Howitworksimg1}
              unoptimized
              src={item.image}
              alt="imgae"
              width={300}
              height={300}
            />
          </div>
          <div>
            <b>Some Nice Name</b>
            <p>Awesome Role</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Team;
