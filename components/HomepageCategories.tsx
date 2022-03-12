import React from "react";
import styles from "../styles/Home.module.css";

const categories = [
  {
    name: "Illustration",
    image: "/images/cat1.jpg",
  },
  {
    name: "Transition",
    image: "/images/cat2.jpg",
  },
  {
    name: "Web Design",
    image: "/images/cat3.jpg",
  },
  {
    name: "Copy Writing",
    image: "/images/cat4.jpg",
  },
  {
    name: "Social Media",
    image: "/images/cat5.jpg",
  },
  {
    name: "Branding",
    image: "/images/cat6.jpg",
  },
];

function HomepageCategories() {
  return (
    <div className={styles.homepageCategoryImagesContainer}>
      {categories.map((item, index) => (
        <div className={styles.homepageCategoryImage} key={index}>
          <div
            style={{
              backgroundImage: `url(${item.image})`,
            }}
            id="work-img"
            className={styles.homepageCategoryImages}
          >
            <a href="">
              <div className={styles.homepageCategoryImagesText}>
                {item.name}
              </div>
            </a>
          </div>
        </div>
      ))}
      <div></div>
    </div>
  );
}

export default HomepageCategories;
