import React, { useContext } from "react";
import { MovieContext } from "../Context";
import { useParams } from "react-router-dom";
import FormComponent from "./FormComponent";

const DetailsComponent = () => {
  const { show } = useContext(MovieContext);
  const { id } = useParams();
  const movieDetails = show?.find((pd) => pd.show.id === parseInt(id));
  console.log(movieDetails);

  return (
    <div style={{ backgroundColor: "#edebed", minHeight: "100vh" }}>
      <div className="container-fluid  p-5 mb-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10 col-sm-4">
            <div className="card bg-light">
              <div className="row">
                <div className="col-md-5">
                  <div className="images p-3">
                    <div className="text-center p-4">
                      <img
                        id="main-image"
                        src={movieDetails.show.image.original}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-10 my-auto">
                  <div className="product p-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <i className="fa fa-shopping-cart text-muted"></i>
                    </div>
                    <div className="mt-4 mb-3 h6">
                      <span className="text-uppercase px-2 py-1 text-white brand bg-secondary ">
                        {movieDetails.show.network.name}
                      </span>
                      <h1 className="text-uppercase mt-2">
                        {movieDetails.show.name}
                      </h1>
                      <div className="price d-flex flex-row align-items-center">
                        <span className="act-price">
                          {movieDetails.show.genres} |
                        </span>
                        <div className="ml-2">
                          <span className="m-2 dis-price">
                            Ratings: {movieDetails.show.rating.average} IMDB
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="about">{movieDetails.show.summary}</p>
                    <div className="cart mt-4 align-items-center">
                      <div className="my-4 dis-price h6">
                        Runtime: {movieDetails.show.runtime}min
                      </div>
                      <button className="btn btn-danger text-uppercase mr-2 px-4">
                        Watch Now
                      </button>
                      <div className="mt-2">
                        <FormComponent />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsComponent;
