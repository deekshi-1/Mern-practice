import { GoHome } from "react-icons/go";
import {
  IoMdNotificationsOutline,
  IoIosAddCircleOutline,
} from "react-icons/io";
import { CgProfile } from "react-icons/cg";

import "./header.css";
function Header() {
  return (
    <div className="headerWrapper">
      <div className="left">
        <div className="icon">
          <img src="images/instagramLogo.jpg" alt="logoImage" />
        </div>
        <div className="logoText">Pictogram</div>
      </div>
      <div className="right">
        <div className="taskbar-icon">
          <div className="icons">
            <GoHome />
          </div>
          <div className="taskbar-text">Home</div>
          
        </div>
        <div className="taskbar-icon">
          <div className="icons">
            <CgProfile />
          </div>
          <div className="taskbar-text">Profile</div>
          
        </div>
        <div className="taskbar-icon">
          <div className="icons">
            <IoMdNotificationsOutline />
          </div>
          <div className="taskbar-text">Notification</div>
          
        </div>
        <div className="taskbar-icon">
          <div className="icons">
            <IoIosAddCircleOutline />
          </div>
          <div className="taskbar-text">Create</div>
          
        </div>
        <div className="taskbar-icon logout">Logout</div>
      </div>
    </div>
  );
}

export default Header;
