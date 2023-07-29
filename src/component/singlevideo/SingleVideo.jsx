import { useNavigate, useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";

import "../singlevideo/SingleVideo.css";
import { useVideo } from "../../context/Context";
import { MdOutlineEditNote, MdPlaylistAdd, MdWatchLater } from "react-icons/md";

export const SingleVideo = () => {
  const { videoId } = useParams();
  const navigate = useNavigate();

  const { videoData } = useVideo();

  const findVideo = videoData.find(
    (video) => video._id.toString() === videoId.toString()
  );

  const fitlerMoreVideo = videoData.filter(
    (video) => video.category === findVideo.category
  );
  return (
    <div className="single__main">
      <div className="video">
        <ReactPlayer url={findVideo?.src} />
        <div className="des">
          <img
            className="user__avatar"
            src="https://res.cloudinary.com/dbrpnkzsx/image/upload/v1688703091/goku_a5p2o2.jpg"
            alt=""
          />
          <h4>{findVideo?.title}</h4>
          <div className="action__btn">
            <MdWatchLater /> <MdPlaylistAdd /> <MdOutlineEditNote />
          </div>
        </div>
      </div>
      <div className="suggetion">
        <h1>More Videos</h1>
        {fitlerMoreVideo.map((video) => {
          const { _id, thumbnail, title, creator } = video;
          return (
            <div
              className="suggest__video"
              onClick={() => navigate(`/single/${_id}`)}
            >
              <img src={thumbnail} alt={title} />
              <div className="name">
                <h4>{title}</h4>
                <p>{creator}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
