import { useNavigate } from "react-router-dom";
import { useVideo } from "../../context/Context";
import "../category/Categories.css";

export const Categories = () => {
  const { category } = useVideo();

  const navigate = useNavigate();
  return (
    <div className="categories__container">
      <h1>Category</h1>

      <div className="category__main">
        {category.map((item) => {
          const { thumbnail, _id, category } = item;
          return (
            <div
              className="category__card"
              key={_id}
              onClick={() => navigate(`/category/${_id}`)}
            >
              <img src={thumbnail} alt="" />
              <h3>{category}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};
