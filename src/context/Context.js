import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { categories } from "../database/Categoriesdb";
import { videos } from "../database/Videodb";

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [category, setCategory] = useState(categories);
  const [videoData, setVideoData] = useState(videos);
  const [playlistData, setPlaylistData] = useState([]);

  const handleSearch = (e) => {
    if (e.target.value !== "") {
      setVideoData(
        videos.filter((video) =>
          video.title
            .toLocaleLowerCase()
            .includes(e.target.value.toLocaleLowerCase())
        )
      );
    } else {
      setVideoData(videos);
    }
  };
  return (
    <VideoContext.Provider value={{ category, videoData, handleSearch }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = () => useContext(VideoContext);
