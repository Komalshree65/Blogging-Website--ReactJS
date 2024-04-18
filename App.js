import Write from "./pages/Write/Write";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Posts from "./posts/Posts";
import TopBar from "./topBar/TopBar";
import Login from "./pages/Login/Login"
import Setting from "./pages/settings/Setting";
import Register from "./pages/Register/Register"
import Single from "./pages/single/Single";
function App() {
  const currentUser=false;
  return (
    <div>
      <BrowserRouter>
      <TopBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        {/* <Route path="/Home" element={<Home/>}/> */}
        <Route path="/Register" element={currentUser? <Home/>:<Register/>}/>
        <Route path="/Write" element={currentUser? <Write/>:<Register/>}/>
        <Route path="/Login" element={currentUser? <Home/>:<Login/>}/>
        <Route path="/posts" element={currentUser? <Home/>:<Posts/>}/>
        <Route path="/settings" element={currentUser? <Setting/>:<Register/>}/>
        <Route path="/post/:postId" element={<Single/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
