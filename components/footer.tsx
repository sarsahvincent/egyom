import Link from "next/link";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import imageLoader from "../imageLoader";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import { Button, TextField } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <section className={styles.footerLinksContainer}>
        <section className={styles.logoContainer}>
          <div className={styles.logoHeading} style={{ marginTop: 15 }}>
            <Link href="/" passHref>
              <Image
                className={styles.logoHeadingcc}
                loader={imageLoader}
                width={80}
                height={78}
                unoptimized
                src="/EgyomLogo.svg"
                alt="logo"
              />
            </Link>
          </div>
          <div className={styles.footerdescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </section>

        <div className={styles.quickLinkDsktop}>
          <section
            style={{ marginTop: 25, marginRight: 15 }}
            className={styles.contents}
          >
            <div className={styles.header}>Quick Link</div>
            <div className={styles.linksContainer}>
              <div className={styles.links}>
                <Link href="/">Some Link</Link>
              </div>
              <div className={styles.links}>
                <Link href="/">Some Link</Link>
              </div>
              <div className={styles.links}>
                <Link href="/">Some Link</Link>
              </div>
            </div>
          </section>
        </div>
        <div className={styles.quickLinkDsktop}>
          <section style={{ marginTop: 25 }} className={styles.contents}>
            <div className={styles.header}>Quick Link</div>
            <div className={styles.linksContainer}>
              <div className={styles.links}>
                <Link href="/">Some Link</Link>
              </div>
              <div className={styles.links}>
                <Link href="/">Some Link</Link>
              </div>
              <div className={styles.links}>
                <Link href="/">Some Link</Link>
              </div>
            </div>
          </section>
        </div>

        <section className={styles.quickLinkMobile}>
          <section
            style={{ marginTop: 25, marginRight: 50 }}
            className={styles.contents}
          >
            <div className={styles.header}>Quick Link</div>
            <div className={styles.linksContainer}>
              <div className={styles.links}>
                <Link href="/">Some Link</Link>
              </div>
              <div className={styles.links}>
                <Link href="/">Some Link</Link>
              </div>
              <div className={styles.links}>
                <Link href="/">Some Link</Link>
              </div>
            </div>
          </section>

          <section style={{ marginTop: 25 }} className={styles.contents}>
            <div className={styles.header}>Quick Link</div>
            <div className={styles.linksContainer}>
              <div className={styles.links}>
                <Link href="/">Some Link</Link>
              </div>
              <div className={styles.links}>
                <Link href="/">Some Link</Link>
              </div>
              <div className={styles.links}>
                <Link href="/">Some Link</Link>
              </div>
            </div>
          </section>
        </section>

        <section style={{ marginTop: 25 }} className={styles.contents}>
          <div style={{ marginTop: 15 }} className={styles.header}>
            Contact
          </div>
          <div className={styles.linksContainer}>
            <div className={styles.links}>
              <PhoneIcon className={styles.phoneIcon} />
              +233 000 000 0000
            </div>
            <div className={styles.links}>
              <EmailIcon className={styles.emailIcon} />
              info@egyom.com
            </div>
            <div className={styles.links}>
              <LocationOnIcon className={styles.locationOnIcon} />
              City,Country
            </div>
          </div>
        </section>

        <section style={{ marginTop: 25 }} className={styles.contents}>
          <div style={{ marginTop: 15 }} className={styles.header}>
            Subscribe to our Newsletter
          </div>
          <div style={{ marginTop: 15 }} className={styles.linksContainer}>
            <div className={styles.subscribeContainer}>
              <input type="text" placeholder="Enter a valid email" />
              <button> Submit</button>
            </div>
            {/*      <TextField
              className={styles.subscribeInput}
              label="Enter a valid email"
              variant="outlined"
              size="small"
              id="email"
              name="email"
              type="email"
              InputProps={{
                endAdornment: (
                  <Button
                    variant="contained"
                    className={styles.navButtonRegister}
                  >
                    Submit
                  </Button>
                ),
              }}
            /> */}
          </div>
        </section>
      </section>
      <section className={styles.line}>
        <hr />
      </section>
      <div className={styles.scialLinksDektop}>
        <section className={styles.lastSection}>
          <div className={styles.copyRight}>
            <p className={styles.copyRightYear}>Copyright 2022</p>
            <Link href="/terms-of-service" passHref>
              <p className={styles.terms}>Terms of Use</p>
            </Link>
            <Link href="/privacy-policy" passHref>
              <p className={styles.terms}>Privacy Policy</p>
            </Link>
          </div>
          <div>
            <TwitterIcon className={styles.socailIconDstp} />
            <LinkedInIcon className={styles.socailIconDstp} />
            <FacebookIcon className={styles.socailIconDstp} />
            <InstagramIcon className={styles.socailIconDstp} />
          </div>
        </section>
      </div>
      <div className={styles.socialLinksMobile}>
        <section className={styles.lastSectionMobile}>
          <div className={styles.copyRightMobile}>
            <p className={styles.copyRightYear}>Copyright 2022</p>
            <div className={styles.privacy}>
              <Link href="/terms-of-service" passHref>
                <p className={styles.terms}>Terms of Use</p>
              </Link>
              <Link href="/privacy-policy" passHref>
                <p className={styles.terms}>Privacy Policy</p>
              </Link>
            </div>
          </div>
          <div>
            <TwitterIcon className={styles.socailIcon} />
            <LinkedInIcon className={styles.socailIcon} />
            <FacebookIcon className={styles.socailIcon} />
            <InstagramIcon className={styles.socailIcon} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
