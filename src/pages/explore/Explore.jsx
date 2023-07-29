import { ExploreVideo } from "../../component/explore/Explorevideo";
import { Layout } from "../../component/layout/Layout";

export const Explore = () => {
  return (
    <div className="explore">
      <Layout children={<ExploreVideo />} />
    </div>
  );
};
