import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import imageLoader from "../imageLoader";
import styles from "../styles/ServiceDetails.module.css";
import HireCard from "./HireCard";

interface Details {
  name: string;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  amount: number;
  profilePic: string;
  bookMark?: boolean;
}

export const ServiceDetailsModal = ({ data }: { data: Details[] }) => {
  const router = useRouter();

  return (
    <div>
      {router.pathname === "/profile-information" && (
        <div style={{ marginTop: -17 }}>
          <h2>Services</h2>
        </div>
      )}

      {router.pathname === "/profile-information" ? (
        <HireCard data={data} />
      ) : (
        <div className={styles.modalPicsContainerContainer}>
          <div className={styles.modalPic}>
            <Image
              className={styles.modalPics}
              loader={imageLoader}
              width={250}
              height={200}
              unoptimized
              src="/images/cat2.jpg"
              alt="image"
            />
          </div>
          <div className={styles.modalPic}>
            <Image
              className={styles.modalPics}
              loader={imageLoader}
              width={250}
              height={200}
              unoptimized
              src="/images/cat1.jpg"
              alt="image"
            />
          </div>

          <div className={styles.modalPic}>
            <Image
              className={styles.modalPics}
              loader={imageLoader}
              width={250}
              height={200}
              unoptimized
              src="/images/cat5.jpg"
              alt="image"
            />
          </div>
        </div>
      )}

      <div className={styles.modaDotsContainer}>
        <div className={styles.modaDots}></div>
        <div className={styles.modaDotsActive}></div>
        <div className={styles.modaDots}></div>
        <div className={styles.modaDots}></div>
      </div>
    </div>
  );
};
