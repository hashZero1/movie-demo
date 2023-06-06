import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { MovieContext } from "../Context";

const HomeComponent = () => {
  const { show } = useContext(MovieContext);
  return (
    <div style={{ backgroundColor: "#edebed" }}>
      <div class="container">
        <div class="row">
          {show?.map((dt) => (
            <div className="col g-4 ">
              <div class="card p-2 shadow-sm" style={{ width: "20rem" }}>
                <img
                  class="card-img-top"
                  style={{ height: "25rem" }}
                  src={dt.show.image.original}
                  alt={dt.show.name}
                />
                <div class="card-body">
                  <Link
                    class="text-decoration-none text-dark"
                    key={dt.show.id}
                    to={`/details/${dt.show.id}`}
                  >
                    <h4>{dt.show.name}</h4>
                    <p class="card-text">{dt.show.language}</p>
                    <p class="card-text">Release Date: {dt.show.premiered}</p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
