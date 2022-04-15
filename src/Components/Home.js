import "../Styles/Home.scss";
import HomeTendencias from "./HomeTendencias";

const Home = () => {
  return (
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
  );
};

export default Home;
