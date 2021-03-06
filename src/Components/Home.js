import "../Styles/Home.scss";
import Carousel from "../Components/Carousel";
import HomeTendencias from "./HomeTendencias";

const Home = () => {
  return (
    <div>
      <Carousel />
      <section>
        <div>
          <HomeTendencias title="Películas que son tendencia" types="movie" />
        </div>
        <div>
          <HomeTendencias title="Series que son tendencia" types="tv" />
        </div>
      </section>
    </div>
  );
};

export default Home;
