import { useNavigate, useParams } from "react-router-dom";
import "../videolist/VideoList.css";
import { useVideo } from "../../context/Context";
import { VideoCard } from "../videocard/Videocard";

export const VideoList = () => {
  const { categoryId } = useParams();

  const navigate = useNavigate();

  const { videoData, category } = useVideo();

  const findCategory = category?.find(
    (cat) => cat._id.toString() === categoryId.toString()
  );

  const filterCategory = videoData?.filter(
    (elms) => elms.category === findCategory?.category
  );

  return (
    <div className="video__list">
      <h1>{findCategory?.category}</h1>

      <div className="video__list__main">
        {filterCategory.map((video) => {
          return <VideoCard video={video} />;
        })}
      </div>
    </div>
  );
};
