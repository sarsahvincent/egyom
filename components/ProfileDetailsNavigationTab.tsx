import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import styles from "../styles/ServiceDetails.module.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import SkillTag from "./SkillTag";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import Pagination from "../components/Pagination";
import imageLoader from "../imageLoader";
import ratingStyles from "../styles/ServiceDetails.module.css";
import { ServiceDetailsModal } from "../components/ServiceDetailsModal";
import HireCard from "./HireCard";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface education {
  title: string;
  name: string;
  school: string;
  year: number;
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
  biography?: string;
  languages?: string[];
  skills?: string[];
  education?: education;
}

interface HireDetails {
  name: string;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  amount: number;
  profilePic: string;
  bookMark?: boolean;
}

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
};
const serviceData: HireDetails[] = [
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
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ data }: { data: any }) {
  const [value, setValue] = React.useState(0);

  const [openRatingModal, setOpenRatingModal] = React.useState(false);
  const handleOpenRatingModal = () => setOpenRatingModal(true);
  const handleCloseRatingModal = () => setOpenRatingModal(false);

  //HOOKS FOR FORM FIELDS ONLY
  const [message, setMessage] = useState("");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className={ratingStyles.profileDetailsNavigation}>
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
              <div className={ratingStyles.ratingForm}>
                <div className={ratingStyles.ratingHeader}>
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
                  <div className={ratingStyles.ratingActionBtns}>
                    <button
                      type="submit"
                      className={ratingStyles.RatingsubmitBtn}
                    >
                      Add Review
                    </button>
                    <button
                      onClick={handleCloseRatingModal}
                      type="submit"
                      className={ratingStyles.cancelBtn}
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
      <Box sx={{ borderBottom: 0, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="About" {...a11yProps(0)} />
          <Tab label="Services" {...a11yProps(1)} />
          <Tab label="Portfolio" {...a11yProps(2)} />
          <Tab label="Reviews" {...a11yProps(4)} />
        </Tabs>
      </Box>

      {data.map((item: details, index: number) => (
        <TabPanel key={index} value={value} index={0}>
          {console.log(item)}
          <div>
            <div>
              <b>Biography</b>
              <p>{item?.biography}</p>
            </div>
            <hr className={styles.hr} />
            <div>
              <b>Languages</b>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                {item?.languages?.map((language, index) => (
                  <div key={index}>
                    <p style={{ marginRight: 5 }}>{language}</p>
                  </div>
                ))}
              </div>
            </div>
            <hr className={styles.hr} />
            <div>
              <b>Skills</b>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  marginTop: "15px",
                }}
              >
                {item?.skills?.map((sk, key) => (
                  <SkillTag key={index}>{sk}</SkillTag>
                  /*  <div key={index}>
                    <button className={styles.profileSkills}>{sk}</button>
                  </div> */
                ))}
              </div>
            </div>
            <hr className={styles.hr} />
            <div>
              <b>Education</b>
              <div>
                <div>{item.education?.title}.</div>
                <div>{item.education?.name}</div>
                <div className={styles.schAndYear}>
                  {item.education?.school} <span>{item.education?.year}</span>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      ))}

      <TabPanel value={value} index={1}>
        <HireCard data={serviceData} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div>
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
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className={styles.profileDetails}>
          <div className={`${styles.profileReviewContent}`}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <b> Seller Reviews (19)</b>
              <div
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
              </div>
            </div>
            <button onClick={handleOpenRatingModal}>Rate Seller</button>
          </div>
          <div className={styles.profileCommentsContainer}>
            <div className={styles.commentsPic}>
              <Image
                className={styles.commentProfileImage}
                unoptimized
                src="./images/pc1.webp"
                alt="hero image"
                width={300}
                height={300}
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
                  Lorem ipsum dolor sit amet ctetur adipisicing elit.
                  Exercitationem recusandae non accusantium, illo error,
                  blanditiis inventore, necessitatibus quibusdam fugit minus sit
                  maxime sapiente autem quo ratione architecto quam magnam
                  consequuntur? blanditiis inventore, necessitatibus quibusdam
                  fugit minus sit maxime sapiente autem quo ratione architecto
                  quam magnam consequuntur?
                </p>
              </div>
              <div className={styles.commentsDuration}>2 weeks ago</div>
            </div>
          </div>
          <div className={styles.profileCommentsContainer}>
            <div className={styles.commentsPic}>
              <Image
                className={styles.commentProfileImage}
                unoptimized
                src="./images/pc1.webp"
                alt="hero image"
                width={300}
                height={300}
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
                  Lorem ipsum dolor sit amet ectetur adipisicing elit.
                  Exercitationem recusandae non accusantium, illo error,
                  blanditiis inventore, necessitatibus quibusdam fugit minus sit
                  maxime sapiente autem quo ratione architecto quam magnam
                  consequuntur? blanditiis inventore, necessitatibus quibusdam
                  fugit minus sit maxime sapiente autem quo ratione architecto
                  quam magnam consequuntur?
                </p>
              </div>
              <div className={styles.commentsDuration}>2 weeks ago</div>
            </div>
          </div>
          <div className={styles.profileCommentsContainer}>
            <div className={styles.commentsPic}>
              <Image
                className={styles.commentProfileImage}
                unoptimized
                src="./images/pc1.webp"
                alt="hero image"
                width={300}
                height={300}
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
                  blanditiis inventore, necessitatibus quibusdam fugit minus sit
                  maxime sapiente autem quo ratione architecto quam magnam
                  consequuntur? blanditiis inventore, necessitatibus quibusdam
                  fugit minus sit maxime sapiente autem quo ratione architecto
                  quam magnam consequuntur?
                </p>
              </div>
              <div className={styles.commentsDuration}>2 weeks ago</div>
            </div>
          </div>
          <Pagination />
        </div>
      </TabPanel>
    </Box>
  );
}
