import Pagination from '@mui/material/Pagination';

import { useState, useEffect } from "react";

const Paginacion = () => {

  const [page, setPage] = useState(1);

  const handleChange = (e, value) => {
    setPage(e.target.value);
  };

  return (
    <div>
      <div spacing={2}>
        <Pagination
          className="paginado"
       /*    page={page} */
          count={5}
          showFirstButton
          showLastButton
          onChange={handleChange}
          color="info"
          /* defaultPage={page} */
        />
      </div>
    </div>
  );
};

export default Paginacion;
