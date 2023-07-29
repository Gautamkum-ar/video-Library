import { Layout } from "../../component/layout/Layout";
import { SingleVideo } from "../../component/singlevideo/SingleVideo";
import "../singlevideo/Singlevideo.css";

export const Singlevide = () => {
  return (
    <div className="singlevideo__container">
      <Layout children={<SingleVideo />} />
    </div>
  );
};
