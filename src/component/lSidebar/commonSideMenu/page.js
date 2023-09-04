import React from "react";
import Link from "next/link";
import CommonMenuCss from "./CommonSideMenu.module.css";

const commonSideMenu = () => {
  return (
    <div>
      <ul className={CommonMenuCss.common_menu_ul}>
        <li className={CommonMenuCss.single_link}>
          <Link href="/">
            {" "}
            <span>
              <i class="bi bi-house-door ps-2 pe-3"></i>
            </span>{" "}
            Newsfeed
          </Link>
        </li>
        <li className={CommonMenuCss.single_link}>
          <Link href="/">
            {" "}
            <span>
              <i className="bi bi-hash ps-2 pe-3"></i>
            </span>{" "}
            Explore
          </Link>
        </li>
        <li className={CommonMenuCss.single_link}>
          <Link href="/">
            {" "}
            <span>
              <i className="bi bi-collection ps-2 pe-3"></i>
            </span>{" "}
            Group
          </Link>
        </li>
        <li className={CommonMenuCss.single_link}>
          <Link href="#">
            <span>
              <i className="bi bi-file-earmark ps-2 pe-3"></i>
            </span>{" "}
            Pages
          </Link>
        </li>
        <li className={CommonMenuCss.single_link}>
          <Link href="/">
            <span>
              <i className="bi bi-bookmarks ps-2 pe-3"></i>
            </span>{" "}
            Bookmarks
          </Link>
        </li>
        <li className={CommonMenuCss.single_link}>
          <Link href="/">
            <span>
              <i className="bi bi-people-fill ps-2 pe-3"></i>
            </span>{" "}
            friends
          </Link>
        </li>
        <li className={CommonMenuCss.single_link}>
          <Link href="/">
            <span>
              <i className="bi bi-cash-stack ps-2 pe-3"></i>
            </span>{" "}
            Wallet
          </Link>
        </li>
        <li className={CommonMenuCss.single_link}>
          <Link href="/">
            <span>
              <i className="bi bi-shop ps-2 pe-3"></i>
            </span>{" "}
            Marketplaces
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default commonSideMenu;
