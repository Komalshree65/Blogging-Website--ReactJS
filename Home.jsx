import { useLocation } from "react-router";
import Header from "../../header/Header";
import Posts from "../../posts/Posts";
import SideBar from "../../sideBar/SideBar";
//import TopBar from "../../topBar/TopBar";
import "./home.css"

export default function Home() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header/>
      <div className="home">
      <Posts/>
      <SideBar/>
      
    </div>
    </>
  )
}
