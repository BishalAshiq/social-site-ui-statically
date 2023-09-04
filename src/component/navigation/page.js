"use client";
import Link from "next/link";
import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faBrush,
  faCheck,
  faClose,
  faComment,
  faDharmachakra,
  faLock,
  faMessage,
  faSearch,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import NavCss from "./navigation.module.css";
import Image from "next/image";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import { Inter, Roboto, Poppins } from "next/font/google";

// const Inter = Inter({ subsets: ["latin"] });

import Button from "react-bootstrap/Button";

// Chat Section
import Offcanvas from "react-bootstrap/Offcanvas";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const allChatUser = [
  {
    id: 1,
    img: "/fu-1.png",
    title: "Alice Jakson",
    onLine: "Online",
    icon: "bi bi-person-fill-add", // Add the icon class
  },
  {
    id: 2,
    img: "/fu-3.png",
    title: "Bobies Jamse Camerun ",
    onLine: "Offline",
    icon: "bi bi-person-fill-add", // Add the icon class
  },
  {
    id: 3,
    img: "/fu-3.png",
    title: "Fiona Chattarge",
    onLine: "Online",
    icon: "bi bi-person-fill-add", // Add the icon class
  },
  {
    id: 4,
    img: "/fu-2.png",
    title: "Emma Watson ",
    onLine: "Offline",
    icon: "bi bi-person-fill-add", // Add the icon class
  },
  {
    id: 5,
    img: "/fu-1.png",
    title: "Isaac Bin Bakhtiar Khilji ",
    onLine: "Offline",
    icon: "bi bi-person-fill-add", // Add the icon class
  },
  {
    id: 6,
    img: "/fu-1.png",
    title: "Isaac Bin Bakhtiar Khilji ",
    onLine: "Online",
    icon: "bi bi-person-fill-add", // Add the icon class
  },
  {
    id: 7,
    img: "/fu-3.png",
    title: "Isaac Bin Bakhtiar Khilji ",
    onLine: "Online",
    icon: "bi bi-person-fill-add", // Add the icon class
  },
  {
    id: 8,
    img: "/fu-4.png",
    title: "Isaac Bin Bakhtiar Khilji ",
    onLine: "Online",
    icon: "bi bi-person-fill-add", // Add the icon class
  },
  {
    id: 9,
    img: "/fu-1.png",
    title: "Isaac Bin Bakhtiar Khilji ",
    onLine: "Offline",
    icon: "bi bi-person-fill-add", // Add the icon class
  },
  {
    id: 10,
    img: "/fu-2.png",
    title: "Isaac Bin Bakhtiar Khilji ",
    onLine: "Online",
    icon: "bi bi-person-fill-add", // Add the icon class
  },
  {
    id: 11,
    img: "/fu-1.png",
    title: "Isaac Bin Bakhtiar Khilji ",
    onLine: "Online",
    icon: "bi bi-person-fill-add", // Add the icon class
  },
  {
    id: 12,
    img: "/fu-4.png",
    title: "Isaac Bin Bakhtiar Khilji ",
    onLine: "Online",
    icon: "bi bi-person-fill-add", // Add the icon class
  },
  {
    id: 13,
    img: "/fu-2.png",
    title: "Isaac Bin Bakhtiar Khilji ",
    onLine: "Online",
    icon: "bi bi-person-fill-add", // Add the icon class
  },
];

const allChatUserOnline = [
  {
    id: 1,
    img: "/fu-1.png",
    title: "Alice Jakson",
    onLine: "Online",
    icon: "bi bi-person-fill-add", // Add the icon class
  },
  {
    id: 2,
    img: "/fu-3.png",
    title: "Bobies Jamse Camerun ",
    onLine: "Online",
    icon: "bi bi-person-fill-add", // Add the icon class
  },
  {
    id: 3,
    img: "/fu-3.png",
    title: "Fiona Chattarge",
    onLine: "Online",
    icon: "bi bi-person-fill-add", // Add the icon class
  },
  {
    id: 4,
    img: "/fu-2.png",
    title: "Emma Watson ",
    onLine: "Online",
    icon: "bi bi-person-fill-add", // Add the icon class
  },
  {
    id: 5,
    img: "/fu-1.png",
    title: "Isaac Bin Bakhtiar Khilji ",
    onLine: "Online",
    icon: "bi bi-person-fill-add", // Add the icon class
  },
  {
    id: 6,
    img: "/fu-1.png",
    title: "Isaac Bin Bakhtiar Khilji ",
    onLine: "Online",
    icon: "bi bi-person-fill-add", // Add the icon class
  },
  {
    id: 7,
    img: "/fu-3.png",
    title: "Isaac Bin Bakhtiar Khilji ",
    onLine: "Online",
    icon: "bi bi-person-fill-add", // Add the icon class
  },
  {
    id: 8,
    img: "/fu-4.png",
    title: "Isaac Bin Bakhtiar Khilji ",
    onLine: "Online",
    icon: "bi bi-person-fill-add", // Add the icon class
  },
  {
    id: 9,
    img: "/fu-1.png",
    title: "Isaac Bin Bakhtiar Khilji ",
    onLine: "Online",
    icon: "bi bi-person-fill-add", // Add the icon class
  },
  {
    id: 10,
    img: "/fu-2.png",
    title: "Isaac Bin Bakhtiar Khilji ",
    onLine: "Online",
    icon: "bi bi-person-fill-add", // Add the icon class
  },
  {
    id: 11,
    img: "/fu-1.png",
    title: "Isaac Bin Bakhtiar Khilji ",
    onLine: "Online",
    icon: "bi bi-person-fill-add", // Add the icon class
  },
  {
    id: 12,
    img: "/fu-4.png",
    title: "Isaac Bin Bakhtiar Khilji ",
    onLine: "Online",
    icon: "bi bi-person-fill-add", // Add the icon class
  },
  {
    id: 13,
    img: "/fu-2.png",
    title: "Isaac Bin Bakhtiar Khilji ",
    onLine: "Online",
    icon: "bi bi-person-fill-add", // Add the icon class
  },
];

const allChatUserOfline = [
  {
    id: 1,
    img: "/fu-1.png",
    title: "Alice Jakson",
    onLine: "Offline",
    icon: "bi bi-person-fill-add", // Add the icon class
  },
  {
    id: 2,
    img: "/fu-3.png",
    title: "Bobies Jamse Camerun ",
    onLine: "Offline",
    icon: "bi bi-person-fill-add", // Add the icon class
  },
  {
    id: 3,
    img: "/fu-3.png",
    title: "Fiona Chattarge",
    onLine: "Offline",
    icon: "bi bi-person-fill-add", // Add the icon class
  },
  {
    id: 4,
    img: "/fu-2.png",
    title: "Emma Watson ",
    onLine: "Offline",
    icon: "bi bi-person-fill-add", // Add the icon class
  },
  {
    id: 5,
    img: "/fu-1.png",
    title: "Isaac Bin Bakhtiar Khilji ",
    onLine: "Offline",
    icon: "bi bi-person-fill-add", // Add the icon class
  },
  {
    id: 6,
    img: "/fu-1.png",
    title: "Isaac Bin Bakhtiar Khilji ",
    onLine: "Offline",
    icon: "bi bi-person-fill-add", // Add the icon class
  },
  {
    id: 7,
    img: "/fu-3.png",
    title: "Isaac Bin Bakhtiar Khilji ",
    onLine: "Offline",
    icon: "bi bi-person-fill-add", // Add the icon class
  },
  {
    id: 8,
    img: "/fu-4.png",
    title: "Isaac Bin Bakhtiar Khilji ",
    onLine: "Offline",
    icon: "bi bi-person-fill-add", // Add the icon class
  },
  {
    id: 9,
    img: "/fu-1.png",
    title: "Isaac Bin Bakhtiar Khilji ",
    onLine: "Offline",
    icon: "bi bi-person-fill-add", // Add the icon class
  },
  {
    id: 10,
    img: "/fu-2.png",
    title: "Isaac Bin Bakhtiar Khilji ",
    onLine: "Offline",
    icon: "bi bi-person-fill-add", // Add the icon class
  },
  {
    id: 11,
    img: "/fu-1.png",
    title: "Isaac Bin Bakhtiar Khilji ",
    onLine: "Offline",
    icon: "bi bi-person-fill-add", // Add the icon class
  },
  {
    id: 12,
    img: "/fu-4.png",
    title: "Isaac Bin Bakhtiar Khilji ",
    onLine: "Offline",
    icon: "bi bi-person-fill-add", // Add the icon class
  },
  {
    id: 13,
    img: "/fu-2.png",
    title: "Isaac Bin Bakhtiar Khilji ",
    onLine: "Offline",
    icon: "bi bi-person-fill-add", // Add the icon class
  },
];

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handlePostClick = (postId) => {
    setSelectedPostId(postId);
  };

  return (
    <>
      <div onClick={handleShow} className="">
        <FontAwesomeIcon icon={faMessage} className={NavCss.chat_icon} />
      </div>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header>
          {" "}
          {/* <FontAwesomeIcon icon={faClose} /> */}
          <form className={NavCss.search_chat} type="submit">
            <input
              className="form-control me-1"
              type="search"
              placeholder="Search Anything"
              aria-label="Search"
            />
            {/* <button className={NavCss.search_submit} type="submit">
                    Search
                  </button> */}
          </form>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Tabs
            defaultActiveKey="All"
            id="fill-tab-example"
            className="mb-3"
            fill
          >
            <Tab eventKey="All" title="All">
              <div>
                <ul>
                  {allChatUser.map((item) => (
                    <div key={item.id} className={NavCss.chat_user_info_div}>
                      <div className={NavCss.chat_user_info}>
                        {" "}
                        <div className={NavCss.chat_user_img}>
                          <img src={item.img} height={20} width={20} />
                        </div>
                        <div>
                          <h3 className={NavCss.chat_user_title}>
                            {item.title}
                          </h3>
                          <p className={NavCss.chat_user_online}>
                            {item.onLine}
                          </p>
                        </div>
                      </div>
                      <div className="">
                        <i className={item.icon}></i>
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
            </Tab>
            <Tab eventKey="Online" title="Online">
              <div>
                <ul>
                  {allChatUserOnline.map((item) => (
                    <div key={item.id} className={NavCss.chat_user_info_div}>
                      <div className={NavCss.chat_user_info}>
                        {" "}
                        <div className={NavCss.chat_user_img}>
                          <img src={item.img} height={20} width={20} />
                        </div>
                        <div>
                          <h3 className={NavCss.chat_user_title}>
                            {item.title}
                          </h3>
                          <p className={NavCss.chat_user_online}>
                            {item.onLine}
                          </p>
                        </div>
                      </div>
                      <div className="">
                        <i className={item.icon}></i>
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
            </Tab>
            <Tab eventKey="Ofline" title="Ofline">
              <div>
                <ul>
                  {allChatUserOfline.map((item) => (
                    <div key={item.id} className={NavCss.chat_user_info_div}>
                      <div className={NavCss.chat_user_info}>
                        {" "}
                        <div className={NavCss.chat_user_img}>
                          <img src={item.img} height={20} width={20} />
                        </div>
                        <div>
                          <h3 className={NavCss.chat_user_title}>
                            {item.title}
                          </h3>
                          <p className={NavCss.chat_user_online}>
                            {item.onLine}
                          </p>
                        </div>
                      </div>
                      <div className="">
                        <i className={item.icon}></i>
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
            </Tab>
          </Tabs>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const Navigation = () => {
  // const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isNotificationOpen, setNotificationOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);

  const handleNotificationToggle = () => {
    setNotificationOpen(!isNotificationOpen);
    setProfileOpen(false); // Close the profile dropdown
  };

  const handleProfileToggle = () => {
    setProfileOpen(!isProfileOpen);
    setNotificationOpen(false); // Close the notification dropdown
  };
  // const handleDropdownToggle2 = () => {
  //   setDropdownOpen2(!isDropdownOpen2);
  // };

  // const handleNotificationClick = () => {
  //   setDropdownOpen(false);
  // };
  const defaultBoxStyle = {
    borderRadius: "30px",
  };

  return (
    <div>
  
      <div className={NavCss.nav_full_div}>
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container-fluid row">
            <a className="navbar-brand col-lg-2 col-md-2 " href="#">
              <img src='/qp.png' height={100} width={140} alt="Logo" priority/>
            </a>

            <div className=" col-lg-7 col-md-7 p-0 " id="navbarTogglerDemo01">
              <div className={NavCss.search_div}>
                {/* <form className={NavCss.search_form} type="submit">
                  <input
                    className={NavCss.search_input}
                    type="search"
                    placeholder="Search Anything"
                    aria-label="Search"
                  ></input> */}
                {/* <button className={NavCss.search_submit} type="submit">
                    Search
                  </button> */}
                {/* </form> */}
                {/* <div className="search-bar">
                  <FontAwesomeIcon icon={faSearch} className="search-icon" />
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Search anything"
                  />
                </div> */}
                {/* <Box
                  sx={{
                    width: "50%",
                    border: "1px solid gray",
                    borderRadius: defaultBoxStyle.borderRadius,
                  }}
                >
                  <TextField
                    className={NavCss.search_input}
                    fullWidth
                    label="Search anything"
                    id="filled-hidden-label-small"
                    size="small"
                  />
                </Box> */}
                <div className={NavCss.search_container}>
                  {/* <i className="fas fa-search search-icon"></i>  */}
                  <FontAwesomeIcon
                    icon={faSearch}
                    className={NavCss.search_nav}
                  />
                  <input
                    className={NavCss.search_input}
                    type="text"
                    placeholder="Search Anything"
                    id="searchInput"
                  />
                  {/* <button className={NavCss.search_button}>Search</button> */}
                </div>
              </div>
            </div>

            {/* responsive Toggle button  */}
            <div className="col-lg-3 col-md-3 ms-3">
              <button
                className="navbar-toggler float-end"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarScroll"
                aria-controls="navbarScroll"
                aria-expanded="true"
                aria-label="Toggle navigatioN"
              >
                <span className="bi bi-border-style"></span>
              </button>

              <div>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <button className={NavCss.button_collect}>
                      {" "}
                      <span>
                        <i className="bi bi-plus"></i>
                      </span>
                      Collect Wallet
                    </button>
                  </div>

                  <div className="col-lg-8 col-md-8 col-sm-8">
                    <div className={NavCss.nav_icons_div}>
                      <div className="dropdown">
                        <i
                          className="bi bi-bell dropdown-toggle"
                          id="notificationDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded={isNotificationOpen}
                          onClick={handleNotificationToggle}
                        ></i>
                        <div
                          className={`dropdown-menu ${
                            isNotificationOpen ? "show" : ""
                          }`}
                          aria-labelledby="notificationDropdown"
                          style={{
                            position: "absolute",
                            top: "100%",
                            left: "50%",
                            transform: "translateX(-50%)",
                          }}
                        >
                          <a className="dropdown-item" href="#">
                            Notification 1
                          </a>
                          <a className="dropdown-item" href="#">
                            Notification 2
                          </a>
                        </div>
                      </div>
                      <div className="dropdown">
                        <i
                          className="bi bi-person-circle dropdown-toggle"
                          id="profileDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded={isProfileOpen}
                          onClick={handleProfileToggle}
                        ></i>
                        <div
                          className={`dropdown-menu ${
                            isProfileOpen ? "show" : ""
                          }`}
                          aria-labelledby="profileDropdown"
                          style={{
                            position: "absolute",
                            top: "100%",
                            left: "50%",
                            transform: "translateX(-50%)",
                          }}
                        >
                          <a className="dropdown-item" href="#">
                            Profile
                          </a>
                          <a className="dropdown-item" href="#">
                            Settings
                          </a>
                          <a className="dropdown-item" href="#">
                            Logout
                          </a>
                        </div>
                      </div>
                      <div className="">
                        <div>
                          {["end"].map((placement, idx) => (
                            <OffCanvasExample
                              key={idx}
                              placement={placement}
                              name={placement}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className=" collapse navbar-collapse" id="navbarScroll">
                <div className="">
                  <div className={NavCss.nav_icons}>
                    <div className={NavCss.button_collect_div}>
                      <button className={NavCss.button_collect}>
                        {" "}
                        <span>
                          <i class="bi bi-plus"></i>
                        </span>
                        Collect Wallet
                      </button>

                      <div className="dropdown me-5">
                        <i
                          className="bi bi-bell dropdown-toggle"
                          id="notificationDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded={isDropdownOpen}
                          onClick={handleDropdownToggle}
                          // onMouseLeave={handleDropdownToggle}
                        ></i>
                        <div
                          className={`dropdown-menu ${
                            isDropdownOpen ? "show" : ""
                          }`}
                          aria-labelledby="notificationDropdown"
                        >
                          <a className="dropdown-item" href="#">
                            Notification 1
                          </a>
                          <a className="dropdown-item" href="#">
                            Notification 2
                          </a>
                        </div>
                      </div>

                      <div className="dropdown me-5">
                        <div
                          className=" dropdown-toggle "
                          id="notificationDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded={isDropdownOpen1}
                          onClick={handleDropdownToggle1}
                          // onMouseLeave={handleDropdownToggle1}
                        >
                          {" "}
                          <span className={NavCss.single_icon}>
                            <i className="bi bi-person-circle"></i>
                          </span>
                        </div>
                        <div
                          className={`dropdown-menu ${
                            isDropdownOpen1 ? "show" : ""
                          }`}
                          aria-labelledby="notificationDropdown"
                        >
                          <div>
                            <ul>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Notification 1
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Notification 1
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={NavCss.message_icon_div}>
                      <div>
                        {["end"].map((placement, idx) => (
                          <OffCanvasExample
                            key={idx}
                            placement={placement}
                            name={placement}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;

{
  /* <ul className={NavCss.nav_ul}>
        <li className={NavCss.nav_single_link}>
          <FontAwesomeIcon icon={faDharmachakra} className={NavCss.nav_icon} />
          <Link href="/">Timeline</Link>
        </li>
        <li className={NavCss.nav_single_link}>
          <FontAwesomeIcon icon={faUser} className={NavCss.nav_icon} />
          <Link href="/">Profile</Link>
        </li>
        <li className={NavCss.nav_single_link}>
          <FontAwesomeIcon icon={faUsers} className={NavCss.nav_icon} />
          <Link href="/">Users</Link>
        </li>
        <li className={NavCss.nav_single_link}>
          <FontAwesomeIcon icon={faComment} className={NavCss.nav_icon} />
          <Link href="/">Messages</Link>
        </li>
        <li className={NavCss.nav_single_link}>
          <FontAwesomeIcon icon={faLock} className={NavCss.nav_icon} />
          <Link href="/">Login</Link>
        </li>
        <li className={NavCss.nav_single_link}>
          <FontAwesomeIcon icon={faBrush} className={NavCss.nav_icon} />
          <Link href="/">UI Components</Link>
        </li>
        <li className={NavCss.nav_single_link}>
          <FontAwesomeIcon
            icon={faArrowAltCircleDown}
            className={NavCss.nav_icon}
          />
          <Link href="/">Collapse</Link>
        </li>
      </ul> */
}
