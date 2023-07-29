import { useVideo } from "../../context/Context";
import { VideoCard } from "../videocard/Videocard";

import "../watch/WatchLater.css";

export const WatchLater = () => {
  const { state } = useVideo();
  return (
    <div className="watch__later__container">
      <h1>Watch Later</h1>
      <div className="watch__later__main">
        {state?.watchLaterData?.map((video) => (
          <VideoCard video={video} />
        ))}
      </div>
    </div>
  );
};
