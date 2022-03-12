import * as React from "react";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import styles from "../styles/ServiceDetails.module.css";
import Image from "next/image";
import imageLoader from "../imageLoader";
import Card from "@mui/material/Card";
import Icon from "@mdi/react";
import { mdiCheckDecagram, mdiMapMarker } from "@mdi/js";
import CardContent from "@mui/material/CardContent";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";
import PersonIcon from "@mui/icons-material/Person";
import FlagIcon from "@mui/icons-material/Flag";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

interface details {
  name: string;
  flag?: boolean;
  rating: number;
  reviews: number;
  contact?: string;
  profilePic?: any;
  certified?: boolean;
  joined: string;
  location?: string;
}
/* /images/Ellipse1.svg */
const serviceData: details[] = [
  {
    name: "Ama.Doe",
    rating: 3.8,
    profilePic: "/images/Ellipse5.svg",
    reviews: 102,
    certified: true,
    joined: "Feb 2022",
    location: "Ghana",
    flag: true,
    contact: "233444",
  },
];
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

export default function ProfessionalsCard() {
  return (
    <div>
      <div className={styles.profileDetailsListContainerMobile}>
        {serviceData.map((item: details, index: number) => (
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
                height={200}
                unoptimized
                src={item.profilePic}
                alt="image"
              />
              <div className={styles.profileFlag}>
                <FlagIcon sx={{ color: "white", fontSize: 20 }} />
              </div>
            </div>
            <div>
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
            <CardContent className={styles.cardContentMobile}>
              <div className={styles.cardContent}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <IconButton aria-label="Rating" className={styles.iconButton}>
                    <StarIcon sx={{ color: "orange", fontSize: 16 }} />
                    <StarIcon sx={{ color: "orange", fontSize: 16 }} />
                    <StarIcon sx={{ color: "orange", fontSize: 16 }} />
                    <StarIcon sx={{ color: "orange", fontSize: 16 }} />
                    <StarIcon sx={{ color: "orange", fontSize: 16 }} />

                    <b className={styles.rating}>{item.rating}</b>
                  </IconButton>
                  <div
                    style={{ color: "#808080" }}
                  >{`${item.reviews}(Reviews)`}</div>
                </div>
              </div>
              <div className={styles.locaJoined}>
                <div className={styles.joined}>
                  <div className={styles.joinedSub}>
                    <PersonIcon sx={{ color: "black", fontSize: 20 }} />
                    <div style={{ marginLeft: 8 }}>Joined</div>
                  </div>
                  <b className={styles.joineName}>Feb 2022</b>
                </div>
                <div className={styles.joined}>
                  <div className={styles.joinedSub}>
                    <Icon
                      path={mdiMapMarker}
                      title="location"
                      size={0.8}
                      horizontal
                      vertical
                      rotate={180}
                      color="black"
                    />
                    <div style={{ marginLeft: 8 }}>Location</div>
                  </div>
                  <b>Ghana</b>
                </div>
              </div>
              <hr className={styles.hr} />
              <div className={styles.cardButton}>
                <Link href="#" passHref>
                  <p className={styles.contactButton}>Contact</p>
                </Link>
                <Link href="/profile-information" passHref>
                  <p className={styles.profileButton}>Profile</p>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className={styles.profileDetailsListContainer}>
        {serviceData.map((item: details, index: number) => (
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
                height={200}
                unoptimized
                src={item.profilePic}
                alt="image"
              />
              <div className={styles.profileFlag}>
                <FlagIcon sx={{ color: "white", fontSize: 20 }} />
              </div>
            </div>
            <div>
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
            <CardContent className={styles.cardContentMobile}>
              <div className={styles.cardContent}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <IconButton aria-label="Rating" className={styles.iconButton}>
                    <StarIcon sx={{ color: "orange", fontSize: 16 }} />
                    <StarIcon sx={{ color: "orange", fontSize: 16 }} />
                    <StarIcon sx={{ color: "orange", fontSize: 16 }} />
                    <StarIcon sx={{ color: "orange", fontSize: 16 }} />
                    <StarIcon sx={{ color: "orange", fontSize: 16 }} />

                    <b className={styles.rating}>{item.rating}</b>
                  </IconButton>
                  <div
                    style={{ color: "#808080" }}
                  >{`${item.reviews}(Reviews)`}</div>
                </div>
              </div>
              <div className={styles.locaJoined}>
                <div className={styles.joined}>
                  <div className={styles.joinedSub}>
                    <PersonIcon sx={{ color: "black", fontSize: 20 }} />
                    <div style={{ marginLeft: 8 }}>Joined</div>
                  </div>
                  <b className={styles.joineName}>Feb 2022</b>
                </div>
                <div className={styles.joined}>
                  <div className={styles.joinedSub}>
                    <Icon
                      path={mdiMapMarker}
                      title="location"
                      size={0.8}
                      horizontal
                      vertical
                      rotate={180}
                      color="black"
                    />
                    <div style={{ marginLeft: 8 }}>Location</div>
                  </div>
                  <b>Ghana</b>
                </div>
              </div>
              <hr className={styles.hr} />
              <div className={styles.cardButton}>
                <Link href="#" passHref>
                  <p className={styles.contactButton}>Contact</p>
                </Link>
                <Link href="/profile-information" passHref>
                  <p className={styles.profileButton}>Profile</p>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
