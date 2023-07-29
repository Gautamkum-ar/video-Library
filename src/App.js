import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/Home";
import { Navbar } from "./component/navbar/Navbar";
import { Videos } from "./pages/videolisting/Videos";
import { Singlevide } from "./pages/singlevideo/Singlevideo";
import { Explore } from "./pages/explore/Explore";
import { Playlist } from "./pages/playlist/Playlist";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<Videos />} />
        <Route path="/single/:videoId" element={<Singlevide />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/playlist" element={<Playlist />} />
      </Routes>
    </div>
  );
}

export default App;
