import "../Styles/Error404.scss";
import error404 from "../Images/Error404Movie.jpg";

const Error404 = () => {
  return (
    <div className="error-404">
      <img src={error404} alt="Error 404" />
    </div>
  );
};

export default Error404;
