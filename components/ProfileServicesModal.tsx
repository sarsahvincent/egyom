import React from "react";
import Image from "next/image";
import imageLoader from "../imageLoader";
import styles from "../styles/ServiceDetails.module.css";

export const ServiceDetailsModal: React.FC<{}> = () => {
  return (
    <div>
      
      <div className={styles.modalPicsContainerContainer}>
        <Image
          className={styles.modalPics}
          loader={imageLoader}
          width={350}
          height={200}
          unoptimized
          src="/images/cat3.jpg"
          alt="image"
        />
        <Image
          className={styles.modalPics}
          loader={imageLoader}
          width={350}
          height={200}
          unoptimized
          src="/images/cat2.jpg"
          alt="image"
        />
        <Image
          className={styles.modalPics}
          loader={imageLoader}
          width={350}
          height={200}
          unoptimized
          src="/images/cat5.jpg"
          alt="image"
        />
      </div>
      <div className={styles.modaDotsContainer}>
        <div className={styles.modaDots}></div>
        <div className={styles.modaDotsActive}></div>
        <div className={styles.modaDots}></div>
        <div className={styles.modaDots}></div>
      </div>
    </div>
  );
};
