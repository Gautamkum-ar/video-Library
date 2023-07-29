import { Layout } from "../../component/layout/Layout";
import { VideoList } from "../../component/videolist/VideoList";
import "../videolisting/Videos.css";

export const Videos = () => {
  return (
    <div className="video__container">
      <Layout children={<VideoList />} />
    </div>
  );
};
