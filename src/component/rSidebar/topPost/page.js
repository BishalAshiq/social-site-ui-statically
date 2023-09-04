import React from "react";
import TopPostCss from "./topPost.module.css";

const topPostdata = [
  {
    id: 1,
    title: "Amazing Sunset",
    content: "Captured a stunning sunset over the horizon.",
    icon: "bi bi-calendar3-range",
  },
  {
    id: 2,
    title: "Tech Talk",
    content: "Shared insights on the latest tech trends.",
    icon: "bi bi-file-earmark-text",
  },
  {
    id: 3,
    title: "Morning Motivation",
    content: "Inspired others with a motivational quote.",
    icon: "bi bi-chat-dots",
  },
  {
    id: 4,
    title: "Travel Diaries",
    content: "Explored new places and experienced different cultures.",
    icon: "bi bi-image",
  },
  {
    id: 5,
    title: "Gourmet Delights",
    content: "Tried a new recipe and shared the culinary adventure.",
    icon: "bi bi-egg-fried",
  },
  {
    id: 6,
    title: "Book Review",
    content: "Shared thoughts on the latest bestseller.",
    icon: "bi bi-book",
  },
  {
    id: 7,
    title: "Fitness Journey",
    content: "Reached a fitness milestone and shared the progress.",
    icon: "bi bi-heart",
  },
  {
    id: 8,
    title: "Creative Artwork",
    content: "Showcased a new artwork creation.",
    icon: "bi bi-palette",
  },
  {
    id: 9,
    title: "Nature's Beauty",
    content: "Shared a glimpse of nature's beauty in the wild.",
    icon: "bi bi-tree",
  },
  {
    id: 10,
    title: "Music Vibes",
    content: "Created a playlist of favorite music tracks.",
    icon: "bi bi-music-note-list",
  },
];
const topPost = () => {
  return (
    <div>
      <div className={TopPostCss.topPost_full_div}>
        <h1 className={TopPostCss.sections_tag}>Top Post</h1>
        <div className={TopPostCss.scrollable_div}>
          {topPostdata.map((item) => (
            <div key={item.id} className={TopPostCss.topPost_topics}>
              <div className={TopPostCss.topPost_texts}>
                <h3 className={TopPostCss.topPost_h3}>{item.title}</h3>
                <p className={TopPostCss.topPost_p}>{item.content}</p>
              </div>
              <span className={TopPostCss.add_icon}>
                <i className={item.icon}></i>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default topPost;
