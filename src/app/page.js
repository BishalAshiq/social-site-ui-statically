import Image from "next/image";
import pageCss from "../app/page.module.css";
import Navigation from "../component/navigation/page";
import "bootstrap-icons/font/bootstrap-icons.css";
import LeftSidebar from "../component/lSidebar/page";
import RightSidebar from "../component/rSidebar/page";
import NewsFeed from "../component/newsFeed/page";

export default function Home() {
  return (
    <div>
      <div className={pageCss.page_div}>
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-2 col-2 ">
            <div className="container">
              <div className={pageCss.home_sidebar}>
                <LeftSidebar />
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-7 col-10">
            <NewsFeed />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-12">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
