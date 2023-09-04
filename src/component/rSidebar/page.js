import React from "react";
import rSidebarCss from "./rSidebar.module.css";
import TrendingTopics from "./trendingTopics/page";
import TopPost from "./topPost/page";
import FeaturedUser from "./featuredUsers/page";

const rSidebar = () => {
  return (
    <div>
      <div className={rSidebarCss.scrollable_div}>
        <div className={rSidebarCss.right_side_div}>
          <div className="container-fluid">
            <div>
              <TrendingTopics />
            </div>

            <div className={rSidebarCss.top_post_div}>
              <TopPost />
            </div>

            <div className={rSidebarCss.featureUsers_div}>
              <FeaturedUser />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default rSidebar;
