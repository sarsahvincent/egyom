import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Howitworksimg1 from "../public/images/Howitworksimg1.svg";
import Howitworksimg2 from "../public/images/Howitworksimg2.svg";

function ClientsProfessionals() {
  return (
    <div>
      <section className={styles.homepageClientContainer}>
        <div className={styles.clients}>
          <div>
            <h4 style={{ textAlign: "left", color: "black" }}>Clients</h4>
          </div>
          <div>
            <div className={styles.clientDiscriptipn}>
              <div className={styles.clientDiscriptipnNumber}>1</div>
              <div>
                <b className={styles.getStartedTextTitle}>Create an account</b>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  <br />
                  Quam tristique massa elementum rhoncus ipsum.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.clientDiscriptipn}>
              <div className={styles.clientDiscriptipnNumber}>2</div>
              <div>
                <b>Find a service</b>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  <br />
                  Quam tristique massa elementum rhoncus ipsum.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.clientDiscriptipn}>
              <div className={styles.clientDiscriptipnNumber}>3</div>
              <div>
                <b>Hire</b>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  <br />
                  Quam tristique massa elementum rhoncus ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.clientsImage}>
          <Image
            className={styles.Howitworksimg1}
            unoptimized
            src={Howitworksimg1}
            alt="imgae"
            width={400}
            height={400}
          />
        </div>
      </section>
      <section className={styles.homepageProfContainer}>
        <div className={styles.Howitworksimg}>
          <Image
            unoptimized
            src={Howitworksimg2}
            alt="imgae"
            width={400}
            height={400}
          />
        </div>
        <div>
          <div>
            <h4 style={{ textAlign: "left", color: "black" }}>Professionals</h4>
          </div>

          <div className={styles.professionals}>
            <div style={{ marginBottom: "30px" }}>
              <div className={styles.clientDiscriptipn}>
                <div className={styles.clientDiscriptipnNumber}>1</div>
                <div>
                  <b>Create an account</b>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                    <br />
                    Quam tristique massa elementum rhoncus ipsum.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.clientDiscriptipn}>
                <div className={styles.clientDiscriptipnNumber}>2</div>
                <div>
                  <b>Setup your profile</b>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                    <br />
                    Quam tristique massa elementum rhoncus ipsum.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.clientDiscriptipn}>
                <div className={styles.clientDiscriptipnNumber}>3</div>
                <div>
                  <b>Add a portfolio</b>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                    <br />
                    Quam tristique massa elementum rhoncus ipsum.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.clientDiscriptipn}>
                <div className={styles.clientDiscriptipnNumber}>4</div>
                <div>
                  <b>Create a service</b>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                    <br />
                    Quam tristique massa elementum rhoncus ipsum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ClientsProfessionals;
