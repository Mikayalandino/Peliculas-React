import "../Styles/Home.scss";
import HomeTendencias from "./HomeTendencias";

const Home = () => {
  return (
    <section>
      <div>
        <HomeTendencias 
          title="Películas que son tendencia" 
          types="movie"
         />
      </div>
      <div>
        <HomeTendencias 
          title="Series que son tendencia"
          types="tv" 
        />
      </div>
    </section>
  );
};

export default Home;
