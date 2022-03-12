import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/HowItWorks.module.css";
import GettingstartedHeadlineImage from "../public/images/GettingstartedHeadlineImage.svg";
import ClientsProfessionals from "../components/ClientsProfessionals";
import Community from "../components/Community";
import Footer from "../components/footer";

const HowItWorks: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>How It Works</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/EgyomLogo.svg" />
      </Head>
      <main>
        <div className={styles.heroContainer}>
          <div style={{ flex: 2 }}>
            <div>
              <h1 className={styles.heroHeading}>Getting started with Egyom</h1>
              <p style={{ fontSize: "20px" }}>
                Quick tutorials made to help you lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Velit mauris urna nunc quisque
                netus|
              </p>
            </div>

            <button className={styles.heroButton1}>Join Egyom</button>
          </div>
          <div
            className={styles.heroImage}
            style={{ flex: 3, alignItems: "end" }}
          >
            <Image
              unoptimized
              src={GettingstartedHeadlineImage}
              alt="hero image"
              width={700}
              height={700}
            />
          </div>
        </div>
        <div className={styles.clientsProfessionals}>
          <ClientsProfessionals />
        </div>
        <Community />
        <Footer />
      </main>
    </div>
  );
};

export default HowItWorks;