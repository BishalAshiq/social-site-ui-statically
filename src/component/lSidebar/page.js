import React from "react";
import SidebarCss from "./lSidebar.module.css";
import CommonSideMenu from "./commonSideMenu/page";
import QuickSettings from "./quickSettings/page";

const sidebar = () => {
  return (
    <div className={SidebarCss.scrollable_div}>
      <div>
        <div>
          <CommonSideMenu />
        </div>

        <div className={SidebarCss.quickSettings_div}>
          <QuickSettings />
        </div>
      </div>
    </div>
  );
};

export default sidebar;
