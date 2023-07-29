import { Layout } from "../../component/layout/Layout";
import { WatchLater } from "../../component/watch/WatchLater";

export const Watchlater = () => {
  return (
    <div className="watchlater__container">
      <Layout children={<WatchLater />} />
    </div>
  );
};
