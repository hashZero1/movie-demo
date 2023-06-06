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
      <div class="container-fluid  p-5 mb-5">
        <div class="row d-flex justify-content-center">
          <div class="col-md-10 col-sm-4">
            <div class="card bg-light">
              <div class="row">
                <div class="col-md-5">
                  <div class="images p-3">
                    <div class="text-center p-4">
                      <img
                        id="main-image"
                        src={movieDetails.show.image.original}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-sm-10 my-auto">
                  <div class="product p-4">
                    <div class="d-flex justify-content-between align-items-center">
                      <i class="fa fa-shopping-cart text-muted"></i>
                    </div>
                    <div class="mt-4 mb-3 h6">
                      <span class="text-uppercase px-2 py-1 text-white brand bg-secondary ">
                        {movieDetails.show.network.name}
                      </span>
                      <h1 class="text-uppercase mt-2">
                        {movieDetails.show.name}
                      </h1>
                      <div class="price d-flex flex-row align-items-center">
                        <span class="act-price">
                          {movieDetails.show.genres} |
                        </span>
                        <div class="ml-2">
                          <span class="m-2 dis-price">
                            Ratings: {movieDetails.show.rating.average} IMDB
                          </span>
                        </div>
                      </div>
                    </div>
                    <p class="about">{movieDetails.show.summary}</p>
                    <div class="cart mt-4 align-items-center">
                      <div class="my-4 dis-price h6">
                        Runtime: {movieDetails.show.runtime}min
                      </div>
                      <button class="btn btn-danger text-uppercase mr-2 px-4">
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
