import "../Styles/Home.scss";
import HomeTendencias from "./HomeTendencias";
import CardsTendencias from "./CardsTendencias.js"

const Home = () => {
  return (
    <section>
      <div>
        <HomeTendencias 
            title="Películas que son tendencia" 
            type="movie"
         />
      </div>
      <div>
        <HomeTendencias 
            title="Series que son tendencia"
            type="tv" 
        />
      </div>
    </section>
  );
};

export default Home;
