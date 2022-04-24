import {
  urlApi,
  apiKey,
  lenguageEs,
  urlImg300,
} from "../Variables Auxiliares/auxiliares";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Videos = ({ id }) => {
  const params = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      `${urlApi}/${params.tipo}/${params.id}/videos?${apiKey}&${lenguageEs}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      });
  }, []);

  return (
    <div className="videos">
      {!!data &&
      data.map((videos) => (
        <iframe
          src={`https://www.youtube.com/embed/${videos.key}`}
          key={videos.id}
        />
      ))
    }
    </div>
  );
};

export default Videos;