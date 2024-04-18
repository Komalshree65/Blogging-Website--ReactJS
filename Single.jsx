//import SinglePost from "../../SinglePost/SinglePost"
import SinglePost from "../../SinglePost/SinglePost"
import SideBar from "../../sideBar/SideBar"
import "./single.css"

export default function Single() {
  return (
    <div className="single">
      <SinglePost/>
      <SideBar/>
      
    </div>
  )
}
