import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import styles from "../styles/FAQS.module.css";

export default function FAQS() {
  return (
    <div>
      <Accordion className={styles.accordionContainer}>
        <AccordionSummary
          className={styles.accordion}
          expandIcon={
            <div className={styles.accordionIconDiv}>
              <AddIcon className={styles.accordionIcon} />
            </div>
          }
          aria-controls="panel2a-content"
          id="panel1a-header"
        >
          <Typography>Some lorem lorem FAQ here</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque habitant vivamus tempus ullamcorper maecenas non. Nisl
            pellentesque egestas eget eget aliquam pretium aliquam aliquet
            dolor. Augue leo commodo platea sit sed ut facilisis egestas amet.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={styles.accordionContainer}>
        <AccordionSummary
          className={styles.accordion}
          expandIcon={
            <div className={styles.accordionIconDiv}>
              <AddIcon className={styles.accordionIcon} />
            </div>
          }
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Some lorem lorem FAQ here</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque habitant vivamus tempus ullamcorper maecenas non. Nisl
            pellentesque egestas eget eget aliquam pretium aliquam aliquet
            dolor. Augue leo commodo platea sit sed ut facilisis egestas amet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordionContainer}>
        <AccordionSummary
          className={styles.accordion}
          expandIcon={
            <div className={styles.accordionIconDiv}>
              <AddIcon className={styles.accordionIcon} />
            </div>
          }
          aria-controls="panel2a-content"
          id="panel1a-header"
        >
          <Typography>Some lorem lorem FAQ here</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque habitant vivamus tempus ullamcorper maecenas non. Nisl
            pellentesque egestas eget eget aliquam pretium aliquam aliquet
            dolor. Augue leo commodo platea sit sed ut facilisis egestas amet.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={styles.accordionContainer}>
        <AccordionSummary
          className={styles.accordion}
          expandIcon={
            <div className={styles.accordionIconDiv}>
              <AddIcon className={styles.accordionIcon} />
            </div>
          }
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Some lorem lorem FAQ here</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque habitant vivamus tempus ullamcorper maecenas non. Nisl
            pellentesque egestas eget eget aliquam pretium aliquam aliquet
            dolor. Augue leo commodo platea sit sed ut facilisis egestas amet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordionContainer}>
        <AccordionSummary
          className={styles.accordion}
          expandIcon={
            <div className={styles.accordionIconDiv}>
              <AddIcon className={styles.accordionIcon} />
            </div>
          }
          aria-controls="panel2a-content"
          id="panel1a-header"
        >
          <Typography>Some lorem lorem FAQ here</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque habitant vivamus tempus ullamcorper maecenas non. Nisl
            pellentesque egestas eget eget aliquam pretium aliquam aliquet
            dolor. Augue leo commodo platea sit sed ut facilisis egestas amet.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={styles.accordionContainer}>
        <AccordionSummary
          className={styles.accordion}
          expandIcon={
            <div className={styles.accordionIconDiv}>
              <AddIcon className={styles.accordionIcon} />
            </div>
          }
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Some lorem lorem FAQ here</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque habitant vivamus tempus ullamcorper maecenas non. Nisl
            pellentesque egestas eget eget aliquam pretium aliquam aliquet
            dolor. Augue leo commodo platea sit sed ut facilisis egestas amet.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
