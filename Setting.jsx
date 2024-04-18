import "./setting.css"
import SideBar from "../../sideBar/SideBar";

export default function Setting() {
  return (
    <div className="settings">
     <div className="settingWrapper">
      <div className="settingTitle">
        <span className="settingUpdateTitle">Update Your Account</span>
        <span className="settingDeleteTitle">Delete Your Account</span>
        
        </div>
        <form className="settingForm">
        <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://wallpaperaccess.com/full/2553091.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Your Name" name="name" />
          <label>Email</label>
          <input type="email" placeholder="Your Email" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
        </div> 
     <SideBar/>
    </div>
  )
}
