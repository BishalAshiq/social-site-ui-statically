import React from "react";
import featuredUsersCss from "./featuredUsers.module.css";
import Image from "next/image";

const featuredUsersdata = [
  {
    id: 1,
    Image: "/fu-1.png",
    title: "Akonnamination Dev",
    content: "CEO",
    icon: "bi bi-person-fill-add",
  },
  {
    id: 2,
    Image: "/fu-3.png",
    title: "Nahid Talukder",
    content: "HR Manager",
    icon: "bi bi-person-fill-add",
  },
  {
    id: 3,
    Image: "/fu-2.png",
    title: "Amina Kamsinne",
    content: "HR Coordinator",
    icon: "bi bi-person-fill-add",
  },
  {
    id: 4,
    Image: "/fu-4.png",
    title: "Alexis Fox",
    content: "Recruiting Manager",
    icon: "bi bi-person-fill-add",
  },
  {
    id: 5,
    Image: "/fu-1.png",
    title: "Antonia Murray",
    content: "HR Manager",
    icon: "bi bi-person-fill-add",
  },
  {
    id: 6,
    Image: "/fu-3.png",
    title: "Ben Injjemma",
    content: "HR Manager",
    icon: "bi bi-person-fill-add",
  },
  {
    id: 7,
    Image: "/fu-2.png",
    title: "Brenda Keen",
    content: "DGM",
    icon: "bi bi-person-fill-add",
  },
  {
    id: 8,
    Image: "/fu-4.png",
    title: "Cristiane Jackson",
    content: "PMP",
    icon: "bi bi-person-fill-add",
  },
  {
    id: 9,
    Image: "/fu-2.png",
    title: "Elizabeth Bishop",
    content: "Trainer",
    icon: "bi bi-person-fill-add",
  },
  {
    id: 10,
    Image: "/fu-3.png",
    title: "James Donnelly",
    content: "MTO",
    icon: "bi bi-person-fill-add",
  },
];
const featuredUsers = () => {
  return (
    <div>
      <div>
        <h1 className={featuredUsersCss.sections_tag}>Featured users</h1>
        <div className={featuredUsersCss.scrollable_div}>
          <div>
            {featuredUsersdata.map((item,index) => (
              <div key={index} className={featuredUsersCss.featuredUsers_contents}>
                <div className={featuredUsersCss.featuredUsers_img_text}>
                  <img
                    src={item.Image}
                    width={40}
                    height={10}
                    alt="user-dp"
                  />
                  <div>
                    <h3 className={featuredUsersCss.features_h3}>
                      {item.title}
                    </h3>
                    <p className={featuredUsersCss.features_p}>
                      {item.content}
                    </p>
                  </div>
                </div>
                <span className={featuredUsersCss.add_icon}>
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

export default featuredUsers;
