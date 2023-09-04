"use client";
import React, { useEffect, useState } from "react";
import newsFeedCss from "./newsFeed.module.css";
import { Editor } from "@tinymce/tinymce-react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Checkcaro from "../../app/checkcaro/page";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import {
  faCheckCircle,
  faDollar,
  faHashtag,
  faImage,
  faLanguage,
  faLightbulb,
  faShare,
  faSmile,
  faThumbsDown,
  faThumbsUp,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const feedData = [
//   { id: 1, name: "Adriana", content: "just logged in.", time: "2 min ago" },
//   {
//     id: 2,
//     name: "Karim",
//     content: " just added mosaicpro as their office.",
//     time: "4 min ago",
//   },
//   {
//     id: 3,
//     name: "Yuehi ",
//     content: " just logged in.",
//     time: "5 min ago",
//   },
// ];

import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";

const getRandomName = () => {
  const names = [
    "Alice Jakson ",
    "Bobies Jamse Camerun",
    "Charlie put",
    "David Loop Whatsom",
    "Emma Watson",
    "Fiona Chattarge",
    "George Rodrigej",
    "Helena Ysesmin",
    "Isaac Bin Bakhtiar Khilji",
    "Julia Amin Hossain",
  ];
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
};

const getRandomTitle = () => {
  const titles = [
    "London, UK",
    "Delih ,India",
    "Bali, Indonesia",
    "Torento, Canada",
    "NYC, USA",
    "Miami, USA",
    "Florida, USA",
    "Manitoba, Canada",
  ];
  const randomIndex = Math.floor(Math.random() * titles.length);
  return titles[randomIndex];
};
// const getRandomImageUrls = () => {
//   const imageUrl = [
//     "/rich-food-ci.png",
//     "/tech-ci.png",
//     "/fu-3.png",
//     // ... add more image URLs here
//   ];
//   const randomIndex = Math.floor(Math.random() * titles.length);
//   return imageUrl[randomIndex];
// };

const getRandomTime = () => {
  const currentTime = Date.now();
  const randomTime = Math.floor(Math.random() * 3600000); // Up to 1 hour in milliseconds
  const timestamp = new Date(currentTime - randomTime).toLocaleString();
  return timestamp;
};
// const defaultPosts = [];

const defaultPosts = [
  {
    id: 1,
    content: "Test-1",
    imageUrl: "/rich-food-ci.png", // Add your default image URL here
    username: getRandomName(),
    title: getRandomTitle(),
    timestamp: getRandomTime(),
  },
  {
    id: 2,
    content: "Test-1",
    imageUrl: "/tech-ci.png", // Add your default image URL here
    username: getRandomName(),
    title: getRandomTitle(),
    timestamp: getRandomTime(),
  },
  {
    id: 3,
    content: "Test-1",
    imageUrl: "/tech-ci.png", // Add your default image URL here
    username: getRandomName(),
    title: getRandomTitle(),
    timestamp: getRandomTime(),
  },
  {
    id: 4,
    content: "Test-1",
    imageUrl: "/tech-ci.png", // Add your default image URL here
    username: getRandomName(),
    title: getRandomTitle(),
    timestamp: getRandomTime(),
  },
  {
    id: 5,
    content: "Test-1",
    imageUrl: "/tech-ci.png", // Add your default image URL here
    username: getRandomName(),
    title: getRandomTitle(),
    timestamp: getRandomTime(),
  },
  // ... add more default posts if needed
];

const NewsFeed = () => {
  const [content, setContent] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [submittedItems, setSubmittedItems] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const [editedTitle, setEditedTitle] = useState(""); // For edited title
  const [editedDescription, setEditedDescription] = useState("");

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleMenuOpen = (event, index) => {
    setAnchorEl(event.currentTarget);
    setSelectedIndex(index);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedIndex(null);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    const editedItem = submittedItems[index];
    setContent(editedItem.content);
    setSelectedFile(editedItem.imageUrl ? editedItem.file : null);
  };

  useEffect(() => {
    const storedItems =
      JSON.parse(localStorage.getItem("submittedItems")) || [];
    if (storedItems.length === 0) {
      setSubmittedItems(defaultPosts);
      localStorage.setItem("submittedItems", JSON.stringify(defaultPosts));
    } else {
      setSubmittedItems(storedItems);
    }
  }, []);

  const handleSaveEdit = () => {
    if (editIndex !== -1) {
      const editedItem = {
        content: content.trim(),
        imageUrl: selectedFile ? URL.createObjectURL(selectedFile) : null,
        username: submittedItems[editIndex].username,
        title: submittedItems[editIndex].title, // Keep title unchanged
        description: submittedItems[editIndex].description, // Keep description unchanged
        timestamp: submittedItems[editIndex].timestamp, // Keep timestamp unchanged
      };

      const updatedItems = [...submittedItems];
      updatedItems[editIndex] = editedItem;

      setSubmittedItems(updatedItems);
      setEditIndex(-1);
      setContent("");
      setSelectedFile(null);
    }
  };

  const handleCancelEdit = () => {
    setEditIndex(-1);
    setContent("");
    setSelectedFile(null);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    if (content.trim() !== "" || selectedFile) {
      const submittedItem = {
        content: content.trim(),
        imageUrl: selectedFile ? URL.createObjectURL(selectedFile) : null,
        username: getRandomName(),
        title: getRandomTitle(),
        timestamp: getRandomTime(),
      };

      const updatedItems = [...submittedItems, submittedItem];
      setSubmittedItems(updatedItems);
      setContent("");
      setSelectedFile(null);

      localStorage.setItem("submittedItems", JSON.stringify(updatedItems));
    }
  };

  const handleDelete = (index) => {
    const updatedItems = submittedItems.filter((_, i) => i !== index);
    setSubmittedItems(updatedItems);

    // Save to localStorage
    localStorage.setItem("submittedItems", JSON.stringify(updatedItems));
  };

  useEffect(() => {
    const storedItems =
      JSON.parse(localStorage.getItem("submittedItems")) || [];
    if (storedItems.length === 0) {
      setSubmittedItems(defaultPosts);
      localStorage.setItem("submittedItems", JSON.stringify(defaultPosts));
    } else {
      setSubmittedItems(storedItems);
    }
  }, []);

  return (
    <div>
      <div className={newsFeedCss.scrollable_div}>
        <div className={newsFeedCss.checkcaro_div}>
          <Checkcaro />
        </div>
        <div className={newsFeedCss.input_div}>
          <div className={newsFeedCss.input_post_field}>
            <textarea
              className={newsFeedCss.textarea_content}
              value={content}
              onChange={handleContentChange}
              placeholder="What's on your mind..."
            />
          </div>
          <div className={newsFeedCss.file_post}>
            <div className={newsFeedCss.post_icons}>
              <label className={newsFeedCss.customFileButton}>
                <FontAwesomeIcon icon={faSmile} className={newsFeedCss.img} />
              </label>
              <label className={newsFeedCss.customFileButton}>
                <FontAwesomeIcon icon={faImage} className={newsFeedCss.img} />
                <input
                  type="file"
                  onChange={handleFileChange}
                  style={{ display: "none" }} // Hide the default input
                />
              </label>
              <label className={newsFeedCss.customFileButton}>
                <FontAwesomeIcon
                  icon={faLanguage}
                  className={newsFeedCss.img}
                />
              </label>
              <label className={newsFeedCss.customFileButton}>
                <FontAwesomeIcon icon={faDollar} className={newsFeedCss.img} />
              </label>
              <label className={newsFeedCss.customFileButton}>
                <FontAwesomeIcon icon={faHashtag} className={newsFeedCss.img} />
              </label>
              <label className={newsFeedCss.customFileButton}>
                <FontAwesomeIcon
                  icon={faLightbulb}
                  className={newsFeedCss.img}
                />
              </label>
              <label className={newsFeedCss.customFileButton}>
                <FontAwesomeIcon icon={faVideo} className={newsFeedCss.img} />
              </label>
            </div>
            <button className={newsFeedCss.news_submit} onClick={handleSubmit}>
              Post
            </button>
          </div>
        </div>

        <div>
          <div>
            {submittedItems
              // .slice()
              // .reverse()
              .map((item, index) => (
                <div key={index} className="card">
                  <div className="card-body">
                    <div className={newsFeedCss.postHeader}>
                      <div className={newsFeedCss.user_top_div}>
                        <div className={newsFeedCss.profilePic}>
                          <img src="/fu-1.png" width={40} height={20} />
                        </div>
                        <div className={newsFeedCss.userInfo}>
                          <p className={newsFeedCss.username}>
                            {item.username}{" "}
                            <span>
                              <FontAwesomeIcon
                                className={newsFeedCss.varified_icon}
                                icon={faCheckCircle}
                              />
                            </span>
                          </p>
                          <p className={newsFeedCss.timestamp}>
                            {item.timestamp}
                          </p>
                          <h4 className={newsFeedCss.title_location}>
                            {item.title}
                          </h4>
                        </div>
                      </div>
                      <div>
                        <IconButton
                          aria-label="more"
                          aria-controls={`menu-${index}`}
                          aria-haspopup="true"
                          onClick={(event) => handleMenuOpen(event, index)}
                        >
                          <MoreVertIcon />
                        </IconButton>
                        <Menu
                          id={`menu-${index}`}
                          anchorEl={anchorEl}
                          open={Boolean(anchorEl) && selectedIndex === index}
                          onClose={handleMenuClose}
                          anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                          }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                          }}
                        >
                          <MenuItem onClick={() => handleEdit(index)}>
                            Edit
                          </MenuItem>
                          <MenuItem onClick={() => handleDelete(index)}>
                            Delete
                          </MenuItem>
                        </Menu>
                      </div>
                    </div>

                    {editIndex === index ? (
                      <div className={newsFeedCss.save_cancel_div}>
                        <textarea
                          value={content}
                          onChange={handleContentChange}
                          placeholder="Edit content..."
                        />
                        <input type="file" onChange={handleFileChange} />
                        <div className={newsFeedCss.save_cancel_button_div}>
                          <button
                            className={newsFeedCss.save_cancel_button}
                            onClick={handleSaveEdit}
                          >
                            Save
                          </button>
                          <button
                            className={newsFeedCss.save_cancel_button}
                            onClick={handleCancelEdit}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <p className={newsFeedCss.post_text}>{item.content}</p>
                        {item.imageUrl && (
                          <div>
                            <img
                              className={newsFeedCss.posted_img}
                              src={item.imageUrl}
                              alt="Uploaded"
                            />
                          </div>
                        )}
                        <div className={newsFeedCss.post_reaction}>
                          <div className={newsFeedCss.like_dislike_share}>
                            <FontAwesomeIcon
                              className={newsFeedCss.like_icons}
                              icon={faThumbsUp}
                            />

                            <FontAwesomeIcon
                              className={newsFeedCss.like_icons}
                              icon={faThumbsDown}
                            />
                            <FontAwesomeIcon
                              className={newsFeedCss.like_icons}
                              icon={faShare}
                            />
                          </div>
                          <div className={newsFeedCss.edit_delete_button_div}>
                            {/* <button
                              className={newsFeedCss.edit_delete_button}
                              onClick={() => handleEdit(index)}
                            >
                              Edit
                            </button>
                            <button
                              className={newsFeedCss.edit_delete_button}
                              onClick={() => handleDelete(index)}
                            >
                              Delete
                            </button> */}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;

{
  /* {feedData.map((item) => (
        <div key={item.id} className="">
          <h4>
            <span className={newsFeedCss}>{item.name}</span>
            {item.content}
          </h4>
          <p>{item.time}</p>
        </div>
      ))} */
}
