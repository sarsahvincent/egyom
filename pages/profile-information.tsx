import React, { useState } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import styles from "../styles/ServiceDetails.module.css";
import Community from "../components/Community";
import Footer from "../components/footer";
import ProfileInfoCard from "../components/ProfileInfoCard";
import { ServiceDetailsModal } from "../components/ServiceDetailsModal";
import Pagination from "../components/Pagination";
import SkillTag from "../components/SkillTag";
import { useRouter } from "next/router";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  padding: 0,
  borderRadius: "5px",
  p: 2,
  fontSize: 16,
  width: "500px",
};
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

const data: Details[] = [
  {
    name: "Jame Doe",
    image: "/images/h1.jpg",
    description: "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,",
    rating: 5.0,
    reviews: 2,
    amount: 100,
    profilePic: "/images/Ellipse5.svg",
    bookMark: true,
  },
  {
    name: "Jame Doe",
    image: "/images/h2.jpg",
    description: "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,",
    rating: 5.0,
    reviews: 2,
    amount: 100,
    profilePic: "/images/Ellipse5.svg",
    bookMark: true,
  },
  {
    name: "Jame Doe",
    image: "/images/h3.jpg",
    description: "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,",
    rating: 5.0,
    reviews: 2,
    amount: 100,
    profilePic: "/images/Ellipse5.svg",
  },
];

const ProfileInformation: NextPage = () => {
  const [searchOption, setSearchOption] = useState("");
  const [openRatingModal, setOpenRatingModal] = React.useState(false);
  const handleOpenRatingModal = () => setOpenRatingModal(true);
  const handleCloseRatingModal = () => setOpenRatingModal(false);
  const [message, setMessage] = useState("");
  return (
    <div className={styles.container}>
      <Head>
        <title>Services Details</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/EgyomLogo.svg" />
      </Head>

      <main>
        <div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openRatingModal}
            onClose={handleCloseRatingModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={openRatingModal}>
              <Box sx={style}>
                <div className={styles.ratingForm}>
                  <div className={styles.ratingHeader}>
                    <h3>You are rating Ama.doe</h3>
                    <CloseIcon onClick={handleCloseRatingModal} />
                  </div>
                  <hr />
                  <form
                    id="contact-form"
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                    method="POST"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <label htmlFor="namhowe">Rating</label>
                    <select>
                      <option value="grapefruit">Grapefruit</option>
                      <option value="lime">Lime</option>
                      <option selected value="coconut">
                        Coconut
                      </option>
                      <option value="mango">Mango</option>
                    </select>

                    <label htmlFor="message">Message</label>
                    <div className="form-group">
                      <textarea
                        rows={8}
                        className="form-control"
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                    <div className={styles.ratingActionBtns}>
                      <button type="submit" className={styles.RatingsubmitBtn}>
                        Add Review
                      </button>
                      <button
                        onClick={handleCloseRatingModal}
                        type="submit"
                        className={styles.cancelBtn}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </Box>
            </Fade>
          </Modal>
        </div>
        <div className={styles.servicessSummary}>
          <section className={styles.categoryContainer}>
            <div className={styles.categorySettingsContainer}>
              <ProfileInfoCard />
            </div>
            <div className={styles.categoryServicesContainer}>
              <ServiceDetailsModal data={data} />
              <div>
                <h2>Reviews (3)</h2>
              </div>
              <div className={styles.details}>
                <div className={`${styles.reviewContent}`}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      Seller Reviews (19)
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          color: "orange",
                          fontSize: 16,
                        }}
                      >
                        <StarIcon sx={{ fontSize: 16 }} />
                        <StarIcon sx={{ fontSize: 16 }} />
                        <StarIcon sx={{ fontSize: 16 }} />
                        <StarIcon sx={{ fontSize: 16 }} />
                        <StarIcon sx={{ fontSize: 16 }} />
                        5.0
                      </span>
                    </div>
                  </div>
                  <button onClick={handleOpenRatingModal}>Rate Seller</button>
                </div>
                <div className={styles.commentsContainer}>
                  <div className={styles.commentsPic}>
                    <Image
                      className={styles.commentProfileImage}
                      unoptimized
                      src="./images/pc1.webp"
                      alt="hero image"
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className={styles.commentsCommen}>
                    <div className={styles.commentNameRating}>
                      <b>Buyer Name</b>
                      <span
                        style={{
                          color: "orange",
                          fontWeight: "600",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <StarIcon sx={{ color: "orange", fontSize: 16 }} />
                        <span>5.0</span>
                      </span>
                    </div>
                    <div className={styles.buyerComment}>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Exercitationem recusandae non accusantium, illo error,
                        blanditiis inventore, necessitatibus quibusdam fugit
                        minus sit maxime sapiente autem quo ratione architecto
                        quam magnam consequuntur? blanditiis inventore,
                        necessitatibus quibusdam fugit minus sit maxime sapiente
                        autem quo ratione architecto quam magnam consequuntur?
                      </p>
                    </div>
                    <div className={styles.commentsDuration}>2 weeks ago</div>
                  </div>
                </div>
                <div className={styles.commentsContainer}>
                  <div className={styles.commentsPic}>
                    <Image
                      className={styles.commentProfileImage}
                      unoptimized
                      src="./images/pc1.webp"
                      alt="hero image"
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className={styles.commentsCommen}>
                    <div className={styles.commentNameRating}>
                      <b>Buyer Name</b>
                      <span
                        style={{
                          color: "orange",
                          fontWeight: "600",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <StarIcon sx={{ color: "orange", fontSize: 16 }} />
                        <span>5.0</span>
                      </span>
                    </div>
                    <div className={styles.buyerComment}>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Exercitationem recusandae non accusantium, illo error,
                        blanditiis inventore, necessitatibus quibusdam fugit
                        minus sit maxime sapiente autem quo ratione architecto
                        quam magnam consequuntur? blanditiis inventore,
                        necessitatibus quibusdam fugit minus sit maxime sapiente
                        autem quo ratione architecto quam magnam consequuntur?
                      </p>
                    </div>
                    <div className={styles.commentsDuration}>2 weeks ago</div>
                  </div>
                </div>
                <div className={styles.commentsContainer}>
                  <div className={styles.commentsPic}>
                    <Image
                      className={styles.commentProfileImage}
                      unoptimized
                      src="./images/pc1.webp"
                      alt="hero image"
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className={styles.commentsCommen}>
                    <div className={styles.commentNameRating}>
                      <b>Buyer Name</b>
                      <span
                        style={{
                          color: "orange",
                          fontWeight: "600",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <StarIcon sx={{ color: "orange", fontSize: 16 }} />
                        <span>5.0</span>
                      </span>
                    </div>
                    <div className={styles.buyerComment}>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Exercitationem recusandae non accusantium, illo error,
                        blanditiis inventore, necessitatibus quibusdam fugit
                        minus sit maxime sapiente autem quo ratione architecto
                        quam magnam consequuntur? blanditiis inventore,
                        necessitatibus quibusdam fugit minus sit maxime sapiente
                        autem quo ratione architecto quam magnam consequuntur?
                      </p>
                    </div>
                    <div className={styles.commentsDuration}>2 weeks ago</div>
                  </div>
                </div>
                {/* pagination */}
                <Pagination />
              </div>
            </div>
          </section>
        </div>
        <div className={styles.servicessSummaryMobile}>
          <div className={styles.categorySettingsContainer}>
            <ProfileInfoCard />
          </div>
        </div>
        <Community />
        <Footer />
      </main>
    </div>
  );
};

export default ProfileInformation;
