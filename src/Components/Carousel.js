/* import "../Styles/Carousel.scss";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import useFetch from "../Hooks/useFetch";

const Carousel = () => {

  const data = useFetch("movie", "popular", 1);
  console.log(data)

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        { !!SwiperSlide && data.map( (curr) => {
          <SwiperSlide key={curr.id}>
            <img src={`https://image.tmdb.org/t/p/original${curr.backdrop_path}`} />
          </SwiperSlide>
          }
          )
        }

      </Swiper>
    </>
  );
}

export default Carousel; */