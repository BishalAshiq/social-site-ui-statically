"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import checkCss from "./page.module.css";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  opacity: 0.9,
  p: 4,
};
const Checkcaro = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={checkCss.slider_div}>
      <Slider {...settings}>
        <div className={checkCss.slide_content}>
          <div className={checkCss.image_wrapper}>
            <img src="/brand-ci.png" alt="Slide 1" />
            <div className={checkCss.link_text_div}>
              {/* <Link href="https://react-bootstrap.netlify.app/docs/components/cards"></Link> */}
              <p onClick={handleOpen} className={checkCss.link_text}>
                Check Your Branding Products
              </p>
            </div>
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
        </div>
        <div className={checkCss.slide_content}>
          <div className={checkCss.image_wrapper}>
            <img src="/on-meet-ci.png" alt="Slide 1" />
            <div className={checkCss.link_text_div}>
              {/* <Link href="https://react-bootstrap.netlify.app/docs/components/cards"> </Link> */}
              <p onClick={handleOpen} className={checkCss.link_text}>
                You Can do Online Meeting by onClick
              </p>
            </div>
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
        </div>
        <div className={checkCss.slide_content}>
          <div className={checkCss.image_wrapper}>
            <img src="/tech-ci.png" alt="Slide 1" />
            <div className={checkCss.link_text_div}>
              {/* <Link href="https://react-bootstrap.netlify.app/docs/components/cards">
               
              </Link> */}
              <p className={checkCss.link_text} onClick={handleOpen}>
                Grow Your Tech Skills
              </p>
            </div>
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
        </div>
        <div className={checkCss.slide_content}>
          <div className={checkCss.image_wrapper}>
            <img src="/rich-food-ci.png" alt="Slide 1" />
            <div className={checkCss.link_text_div}>
              {/* <Link href="https://react-bootstrap.netlify.app/docs/components/cards">
                
              </Link> */}
              <p className={checkCss.link_text} onClick={handleOpen}>
                Your Selected Food is Here
              </p>
            </div>
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
        </div>
        <div className={checkCss.slide_content}>
          <div className={checkCss.image_wrapper}>
            <img src="/veg-ci.png" alt="Slide 1" />
            <div className={checkCss.link_text_div}>
              {/* <Link href="https://react-bootstrap.netlify.app/docs/components/cards">
           
              </Link> */}
              <p onClick={handleOpen} className={checkCss.link_text}>
                Take Your Vegetables
              </p>
            </div>
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
        </div>
      </Slider>
    </div>
  );
};

export default Checkcaro;
