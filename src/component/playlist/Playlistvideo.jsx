import { FaPlus } from "react-icons/fa";
import { useVideo } from "../../context/Context";

import "../playlist/Playlistvideo.css";
import { useState } from "react";
import { VideoCard } from "../videocard/Videocard";

export const PlaylistVideo = () => {
  const [toggleCreatPlaylist, setTogglePlayList] = useState(false);
  const [showPlaylist, setShowplayList] = useState(false);

  const [userInput, setUserInput] = useState({ name: "", discription: "" });
  const { state, dispatch } = useVideo();

  return (
    <div className="play__list">
      <h1>Your Playlist</h1>

      <div className="play__list__main">
        {state.playlistData?.map((play) => (
          <div
            className="playlist__card"
            onClick={() => {
              setShowplayList(!showPlaylist);
              dispatch({ type: "SINGLE_PLAY_LIST", payload: play });
            }}
          >
            <img src="https://picsum.photos/312/174" alt="playlist" />
            <h4>{play.name}</h4>
            <p>{play.discription}</p>
          </div>
        ))}
        <button
          className="create__new__playlist"
          onClick={() => setTogglePlayList(!toggleCreatPlaylist)}
        >
          <FaPlus />
        </button>

        {toggleCreatPlaylist && (
          <div className="modal__container">
            <h3> Create New Playlist</h3>
            <input
              type="text"
              placeholder="Playlist Name"
              onChange={(e) =>
                setUserInput({ ...userInput, name: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Playlist discription"
              onChange={(e) =>
                setUserInput({ ...userInput, discription: e.target.value })
              }
            />
            <button
              onClick={() => {
                if (userInput.name !== "" || userInput.discription !== "") {
                  setTogglePlayList(false);
                  dispatch({ type: "ADD_NEW_PLAYLIST", payload: userInput });
                }
              }}
            >
              Create
            </button>
          </div>
        )}
      </div>
      {showPlaylist && (
        <div className="show__playlist">
          {state?.singlePlaylist?.data?.map((elms) => (
            <VideoCard video={elms} />
          ))}
        </div>
      )}
    </div>
  );
};
