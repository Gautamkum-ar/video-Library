import { Layout } from "../../component/layout/Layout";
import { PlaylistVideo } from "../../component/playlist/Playlistvideo";

export const Playlist = () => {
  return (
    <div className="playlist__container">
      <Layout children={<PlaylistVideo />} />
    </div>
  );
};
