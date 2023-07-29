import { Categories } from "../../component/category/Categories";
import { Layout } from "../../component/layout/Layout";
import "../home/Home.css";

export const Home = () => {
  return (
    <div className="home__container">
      <Layout children={<Categories />} />
    </div>
  );
};
