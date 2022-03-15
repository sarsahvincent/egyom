import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import styles from "../styles/ServiceDetails.module.css";

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

export default function UserModal({
  handleOpenUserModal,
}: {
  handleOpenUserModal: any;
}) {
  const [openRatingModal, setOpenRatingModal] = React.useState(false);
  const handleOpenRatingModal = () => setOpenRatingModal(true);
  const handleCloseRatingModal = () => setOpenRatingModal(false);

  //HOOKS FOR FORM FIELDS ONLY
  const [message, setMessage] = useState("");

  return (
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
                onSubmit={() => {}}
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
                <div>
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
  );
}
