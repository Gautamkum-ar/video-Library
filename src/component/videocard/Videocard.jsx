import { useNavigate } from "react-router-dom";

import { MdOutlineWatchLater, MdWatchLater } from "react-icons/md";
import { useVideo } from "../../context/Context";

export const VideoCard = ({ video }) => {
  const { _id, title, thumbnail, views, creator } = video;
  const navigate = useNavigate();

  const { isPresentInWatchLater, dispatch, state } = useVideo();

  return (
    <div className="video__card" key={_id}>
      <span className="watch__later__icon">
        {isPresentInWatchLater(_id) ? (
          <MdWatchLater
            onClick={() => {
              dispatch({ type: "REMOVE_FROM_WATCHLATER", payload: _id });
              localStorage.setItem(
                "watchlater",
                JSON.stringify(state.watchLaterData)
              );
            }}
          />
        ) : (
          <MdOutlineWatchLater
            onClick={() => {
              dispatch({ type: "ADD_TO_WATCH_LATER", payload: video });
              localStorage.setItem(
                "watchlater",
                JSON.stringify(state.watchLaterData)
              );
            }}
          />
        )}
      </span>

      <img src={thumbnail} alt="" onClick={() => navigate(`/single/${_id}`)} />
      <section className="details">
        <div className="top">
          <img
            className="user__avatar"
            src="https://res.cloudinary.com/dbrpnkzsx/image/upload/v1688703091/goku_a5p2o2.jpg"
            alt=""
          />
          <h4 onClick={() => navigate(`/single/${_id}`)}>{title}</h4>
        </div>
        <p>
          {views}views | {creator}
        </p>
      </section>
    </div>
  );
};
