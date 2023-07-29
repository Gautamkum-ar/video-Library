import { useVideo } from "../../context/Context";

import "../explore/Explorevideo.css";
import { VideoCard } from "../videocard/Videocard";

export const ExploreVideo = () => {
  const { videoData, handleSearch } = useVideo();
  return (
    <div className="explore__main">
      <h1>Explore</h1>

      <input
        className="search"
        type="text"
        placeholder="Search by Title"
        onChange={(e) => handleSearch(e)}
      />

      <div className="explore__videos">
        {videoData.map((video) => {
          return <VideoCard video={video} />;
        })}
      </div>
    </div>
  );
};
