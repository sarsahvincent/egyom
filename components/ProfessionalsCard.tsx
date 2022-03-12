import * as React from "react";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import styles from "../styles/Professionals.module.css";
import Image from "next/image";
import imageLoader from "../imageLoader";
import Card from "@mui/material/Card";
import Icon from "@mdi/react";
import { mdiCheckDecagram } from "@mdi/js";
import CardContent from "@mui/material/CardContent";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";

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
  certified?: boolean;
  skills: string[];
}

interface Skills {
  skills: string[];
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

export default function ProfessionalsCard({ data }: { data: Details[] }) {
  return (
    <div className={styles.profileDetailsListContainer}>
      {data.map((item: Details, index: number) => (
        <Card
          sx={{ boxShadow: 0, margin: 1 }}
          key={index}
          className={styles.profileDetailsContainer}
        >
          <div className={styles.profileImageContainer}>
            <Image
              className={styles.profileImage}
              loader={imageLoader}
              width={200}
              height={170}
              unoptimized
              src={item.image}
              alt="image"
            />
          </div>
          <div className={styles.cardProfileImageContainer}>
            <div className={styles.nameAndCertification}>
              <b>{item.name}</b>

              {item?.certified ? (
                <Icon
                  path={mdiCheckDecagram}
                  title=""
                  size={1}
                  horizontal
                  vertical
                  rotate={180}
                  color="#0EAFAF"
                />
              ) : null}
            </div>
          </div>
          <CardContent>
            <div className={styles.cardContent}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconButton aria-label="Rating">
                  <StarIcon sx={{ color: "orange", fontSize: 18 }} />
                  <StarIcon sx={{ color: "orange", fontSize: 18 }} />
                  <StarIcon sx={{ color: "orange", fontSize: 18 }} />
                  <StarIcon sx={{ color: "orange", fontSize: 18 }} />
                  <StarIcon sx={{ color: "orange", fontSize: 18 }} />

                  <b className={styles.rating}>{item.rating}</b>
                </IconButton>
                <div
                  style={{ color: "#808080" }}
                >{`${item.reviews}(Reviews)`}</div>
              </div>
            </div>

            <div>
              <p className={styles.profileSection}>{item.description}</p>
            </div>
            <div className={styles.profileSkills}>
              {item?.skills.map((sk, index) => (
                <p key={index}>{sk}</p>
              ))}
            </div>

            <hr />
            <Link href="/service-details" passHref>
              <div className={styles.cardButton}>
                <p>View Service</p>
              </div>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
