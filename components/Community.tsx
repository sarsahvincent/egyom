import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import CheckIcon from "@mui/icons-material/Check";
import IconButton from "@mui/material/IconButton";

function Community() {
  return (
    <div className={styles.communityContainer}>
      <div className={styles.communityListContainer}>
        <header className={styles.communityHeader}>Community</header>
        <div className={styles.communityList}>
          <div className={styles.communityIcon}>
            <IconButton aria-label="Rating">
              <CheckIcon sx={{ color: "white" }} />
            </IconButton>
          </div>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
            tenetur, maxime commodi explicabo deleniti sed dolor vero veritatis
          </div>
        </div>
        <div className={styles.communityList}>
          <div className={styles.communityIcon}>
            <IconButton aria-label="Rating">
              <CheckIcon sx={{ color: "white" }} />
            </IconButton>
          </div>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
            tenetur, maxime commodi explicabo deleniti sed dolor vero veritatis
          </div>
        </div>
        <div className={styles.communityList}>
          <div className={styles.communityIcon}>
            <IconButton aria-label="Rating">
              <CheckIcon sx={{ color: "white" }} />
            </IconButton>
          </div>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
            tenetur, maxime commodi explicabo deleniti sed dolor vero veritatis
          </div>
        </div>
        <div className={styles.communityList}>
          <div className={styles.communityIconMobile}>
            <IconButton aria-label="Rating">
              <CheckIcon sx={{ color: "black" }} />
            </IconButton>
          </div>
          <button className={styles.communityButton}>Join Egyom</button>
        </div>
      </div>

      <div className={styles.communityImageContainer}>
        <Image
          unoptimized
          src="/images/community1.png"
          alt="hero image"
          width={380}
          height={300}
        />
      </div>
    </div>
  );
}

export default Community;
