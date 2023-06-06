import React, { useState, useContext } from "react";
import { MovieContext } from "../Context";
import { useParams } from "react-router-dom";

const UserDetailsForm = () => {
  const { show } = useContext(MovieContext);
  const { id } = useParams();
  const data = show?.find((pd) => pd.show.id === parseInt(id));

  const [name, setName] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Store user details in local storage
    localStorage.setItem("name", name);
    localStorage.setItem("selectedOption", selectedOption);
    // Reset form fields
    setName("");
    setSelectedOption("");
  };

  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Get Tickets
      </button>

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <button
              type="button"
              class="btn-close p-3"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div class="modal-body mx-auto">
              <img src={data.show.image.medium} alt="" />
              <h2 className="text-center">{data.show.name}</h2>
              <p className="text-center">No. of Tickets: {selectedOption}</p>
            </div>
            <div class="modal-footer mx-auto">
              <form onSubmit={handleFormSubmit}>
                <label class="form-label">
                  Name:
                  <input
                    className="form-control"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <br />
                <label class="form-label">
                  Select Tickets:
                  <select
                    class="form-select"
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </label>
                <div>
                  <button
                    type="submit"
                    data-bs-dismiss="modal"
                    class="btn btn-primary mt-2"
                  >
                    Buy Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetailsForm;
