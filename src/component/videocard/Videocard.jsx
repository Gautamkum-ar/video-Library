import { useNavigate } from "react-router-dom";

export const VideoCard = ({ video }) => {
  const { _id, title, thumbnail, views, creator } = video;
  const navigate = useNavigate();

  return (
    <div
      className="video__card"
      key={_id}
      onClick={() => navigate(`/single/${_id}`)}
    >
      <img src={thumbnail} alt="" />
      <section className="details">
        <div className="top">
          <img
            className="user__avatar"
            src="https://res.cloudinary.com/dbrpnkzsx/image/upload/v1688703091/goku_a5p2o2.jpg"
            alt=""
          />
          <h4>{title}</h4>
        </div>
        <p>
          {views}views | {creator}
        </p>
      </section>
    </div>
  );
};
