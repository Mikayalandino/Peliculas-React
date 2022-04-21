 import "../Styles/Carousel.scss";
import { urlImgOriginal } from "../Variables Auxiliares/auxiliares";

import useFetch from "../Hooks/useFetch";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Carousel = () => {

  const carouselMovies = useFetch("movie", "now_playing");

  return (
    <div className="slider">
      <Slider  
        arrows={true}
        dots={true}
        slidesToShow={1}
        autoplay={true}
        autoplaySpeed={3000}>
        {carouselMovies.map( carousel => (
          <div key={carousel.id}>
            <img
              className="img-carousel"
              src={`${urlImgOriginal}${carousel.backdrop_path}`}
              alt={carousel.id}
            ></img>
            <div className="movies-card">
              <div className="info-movies-card">
                <h2 className="title-movie">{carousel.title}</h2>
                <p className="movie-txt">{carousel.overview}</p>
                <Link to={`/movie/${carousel.id}/info`}>
                  <button className="button">Ver más...</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
