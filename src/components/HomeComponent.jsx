import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { MovieContext } from "../Context";

const HomeComponent = () => {
  const { show } = useContext(MovieContext);
  return (
    <div style={{ backgroundColor: "#edebed" }}>
      <div className="container">
        <div className="row">
          {show?.map((dt) => (
            <div key={dt.show.id} className="col g-4">
              <div
                className="card mx-auto p-2 shadow-sm"
                style={{ width: "20rem" }}
              >
                <img
                  className="card-img-top"
                  style={{ height: "25rem" }}
                  src={dt.show.image.original}
                  alt={dt.show.name}
                />
                <div className="card-body">
                  <Link
                    className="text-decoration-none text-dark"
                    key={dt.show.id}
                    to={`/details/${dt.show.id}`}
                  >
                    <h4>{dt.show.name}</h4>
                    <p className="card-text">{dt.show.language}</p>
                    <p className="card-text">
                      Release Date: {dt.show.premiered}
                    </p>
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
