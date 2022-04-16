import "../Styles/Home.scss";
import Carousel from '../Components/Carousel';
import HomeTendencias from "./HomeTendencias";

const Home = () => {
  return (
    <div>
      <Carousel />
      <section>
        <div>
          <HomeTendencias
            title="Películas que son tendencia"
            types="movie"
            linkRuta="trending"
          />
        </div>
        <div>
          <HomeTendencias
            title="Series que son tendencia"
            types="tv"
            linkRuta="trending"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
