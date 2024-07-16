import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/SideBar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          setSelectedTab={setSelectedTab}
          selectedTab={selectedTab}
        ></Sidebar>
        <div className="content-container">
          <Header></Header>
          {selectedTab === "Home" ? <CreatePost></CreatePost> : null}
          {selectedTab === "CreatePost" ? <PostList></PostList> : null}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
