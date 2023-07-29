import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { categories } from "../database/Categoriesdb";
import { videos } from "../database/Videodb";
import { useReducer } from "react";
import { reducerFunction } from "../reducer/Reducer";
import { useEffect } from "react";

const VideoContext = createContext();

const intialState = {
  playlistData: [
    { name: "New PlayList", discription: "I love this videos", data: [] },
  ],
  watchLaterData: [],
  singlePlaylist: {},
};

export const VideoProvider = ({ children }) => {
  const [category, setCategory] = useState(categories);
  const [videoData, setVideoData] = useState(videos);

  const [state, dispatch] = useReducer(reducerFunction, intialState);

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

  const isPresentInWatchLater = (id) => {
    const findVideo = state?.watchLaterData?.find((video) => video._id === id);

    return findVideo ? true : false;
  };

  useEffect(() => {
    const watchlater = JSON.parse(localStorage.getItem("watchlater"));
    const playlist = JSON.parse(localStorage.getItem("playlist"));
    dispatch({
      type: "RELOAD",
      payload: { watchlater },
    });
  }, []);

  console.log(state.singlePlaylist);
  return (
    <VideoContext.Provider
      value={{
        category,
        videoData,
        handleSearch,
        dispatch,
        state,
        isPresentInWatchLater,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = () => useContext(VideoContext);
