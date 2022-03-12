import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

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

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function HireCard({ data }: { data: Details[] }) {
  const router = useRouter();
  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: 0,
      height: 0,
    });

    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== "undefined") {
        // Handler to call on window resize
        const handleResize = () => {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        };

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  const size = useWindowSize();

  return (
    <div className={styles.cardContentContainer}>
      {router.pathname === "/services" && (
        <div className={styles.categoryServicesHeaderContainer}>
          <div className={styles.categoryServicesHeader}>
            <b>
              Category: <span>All Services</span>
            </b>
          </div>
          <div className={styles.categoryServicesHeaderResults}>
            10 Services Found
          </div>
        </div>
      )}
      <div
        className={`${
          size?.width <= 575.98
            ? styles.profileInfoDetailsContainer
            : styles.profileDetailsContainer
        }`}
      >
        {data.map((item: Details, index: number) => (
          <Card
            sx={{ width: 345, boxShadow: 0, margin: 1, height: 400 }}
            key={index}
          >
            <CardMedia
              component="img"
              height="200px"
              width="200px"
              image={item.image}
              alt="Paella dish"
            />
            <div className={styles.nameAndBookmarks}>
              <div className={styles.cardProfileImageContainer}>
                <div className={styles.cardProfileImageBorder}>
                  <Image
                    className={styles.cardProfileImage}
                    unoptimized
                    src={item.profilePic}
                    alt="hero image"
                    width={40}
                    height={40}
                  />
                </div>
                <div style={{ marginLeft: "5px" }}>
                  <b>{item.name}</b>
                </div>
              </div>
              <div>
                {item?.bookMark ? (
                  <BookmarkIcon
                    sx={{
                      color: "orange",
                      marginRight: 2,
                    }}
                  />
                ) : (
                  <BookmarkBorderIcon
                    sx={{
                      color: "black",
                      marginRight: 2,
                    }}
                  />
                )}
              </div>
            </div>
            <div className={styles.cardProfileCardDescription}>
              illum adipisci obcaecati ducimus enim blanditiis incidunt delectus
            </div>
            <CardContent className={styles.cardContentReviews}>
              <div className={styles.cardContent}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <IconButton aria-label="Rating">
                    <StarIcon sx={{ color: "orange" }} />
                    <b style={{ color: "orange" }}>{item.rating}</b>
                  </IconButton>
                  <div
                    style={{ color: "#808080" }}
                  >{`${item.reviews}(Reviews)`}</div>
                </div>
                <b>GhC{item.amount}</b>
              </div>
              <Link href="/service-details" passHref>
                <div className={styles.cardButton}>
                  <p>View Service</p>
                </div>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
