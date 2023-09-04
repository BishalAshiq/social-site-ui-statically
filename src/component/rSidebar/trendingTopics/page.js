import React from "react";
import TreandingTopCss from "./trendingTopics.module.css";

const trendidata = [
  {
    id: 1,
    title: "#fridaymemewar",
    content: "388 posts",
    icon: "bi bi-plus-circle", // Add the icon class
  },
  {
    id: 2,
    title: "#usa ",
    content: "81 posts",
    icon: "bi bi-plus-circle", // Add the icon class
  },
  {
    id: 3,
    title: "#ai",
    content: "151 post",
    icon: "bi bi-plus-circle", // Add the icon class
  },
  {
    id: 4,
    title: "#ukranian_people",
    content: "11k post",
    icon: "bi bi-plus-circle", // Add the icon class
  },
  {
    id: 5,
    title: "#covid",
    content: "21k post",
    icon: "bi bi-plus-circle", // Add the icon class
  },
  {
    id: 6,
    title: "#anime",
    content: "15k post",
    icon: "bi bi-plus-circle", // Add the icon class
  },
  {
    id: 6,
    title: "#technology",
    content: "5k post",
    icon: "bi bi-plus-circle", // Add the icon class
  },
  {
    id: 6,
    title: "#anime",
    content: "15k post",
    icon: "bi bi-plus-circle", // Add the icon class
  },
];
const trendingTopics = () => {
  return (
    <div>
      <div>
        <div className={TreandingTopCss.trendTopics_full_div}>
          <h1 className={TreandingTopCss.sections_tag}>Trending Topics</h1>
          <div className={TreandingTopCss.scrollable_div}>
            {trendidata.map((item) => (
              <div key={item.id} className={TreandingTopCss.treanding_topics}>
                {/* Render the icon */}

                <div className={TreandingTopCss.trendi_texts}>
                  {" "}
                  <h3 className={TreandingTopCss.trendi_h3}>{item.title}</h3>
                  <p className={TreandingTopCss.trendi_p}>{item.content}</p>
                </div>
                <span className={TreandingTopCss.add_icon}>
                  <i className={item.icon}></i>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default trendingTopics;
