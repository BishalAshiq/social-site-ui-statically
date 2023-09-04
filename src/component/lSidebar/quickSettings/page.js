import React from "react";
import QuickSettingsCss from "./quickSettings.module.css";

const quickSettings = () => {
  return (
    <div>
      <div className="container-fluid">
        <h1 className={QuickSettingsCss.sections_tag}>Quick Settings</h1>
        <div className={QuickSettingsCss.scrollable_div}>
          <div className={QuickSettingsCss.single_div}>
            <span className={QuickSettingsCss.quickSettings_icon}>
              <i className="bi bi-currency-dollar pe-2"></i>
            </span>
            <h3 className={QuickSettingsCss.quickSettings_h3}>Earn</h3>
          </div>
          <div className={QuickSettingsCss.single_div}>
            <span className={QuickSettingsCss.quickSettings_icon}>
              <i className="bi bi-graph-up-arrow pe-2"></i>
            </span>
            <h3 className={QuickSettingsCss.quickSettings_h3}>Analytics</h3>
          </div>
          <div className={QuickSettingsCss.single_div}>
            <span className={QuickSettingsCss.quickSettings_icon}>
              <i className="bi bi-chat-left pe-2"></i>
            </span>
            <h3 className={QuickSettingsCss.quickSettings_h3}>Chat</h3>
          </div>
          <div className={QuickSettingsCss.single_div}>
            <span className={QuickSettingsCss.quickSettings_icon}>
              <i className="bi bi-sliders2-vertical pe-2"></i>
            </span>
            <h3 className={QuickSettingsCss.quickSettings_h3}>Settings</h3>
          </div>
          <div className={QuickSettingsCss.single_div}>
            <span className={QuickSettingsCss.quickSettings_icon}>
              <i className="bi bi-toggle-off pe-2"></i>
            </span>
            <h3 className={QuickSettingsCss.quickSettings_h3}>
              Enter Dark Mode
            </h3>
          </div>
          <div className={QuickSettingsCss.single_div}>
            <span className={QuickSettingsCss.quickSettings_icon}>
              <i className="bi bi-question-circle pe-2"></i>
            </span>
            <h3 className={QuickSettingsCss.quickSettings_h3}>Help</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default quickSettings;
