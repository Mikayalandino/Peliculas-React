import useFetch from "../Hooks/useFetch";
import {
  urlApi,
  apiKey,
  lenguageEs,
  urlImg300,
} from "../Variables Auxiliares/auxiliares";

import { useState, useEffect } from "react";

const Videos = ({ id }) => {
  const [info, setInfo] = useState([]);
  const arrayVideos = setInfo.results

 

  useEffect(() => {
    fetch(`${urlApi}/movie/${id}/videos?${apiKey}&${lenguageEs}`)
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
      });
  }, []);
  
  return (
    <div>
      {!!arrayVideos && arrayVideos !== [] ?
      info.map((videos) => (
        <iframe
          src={`https://www.youtube.com/embed/${videos.key}`}
          key={videos.id}
        />
      ))
      :
      <h2>Video no encontrado</h2>
    }
    </div>
  );
};

export default Videos;

/* watch?v= */