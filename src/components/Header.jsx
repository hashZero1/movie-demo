import React from "react";

export const Header = () => {
  return (
    <>
      <nav className="px-4 navbar navbar-light bg-light justify-content-between">
        <a className="navbar-brand">Navbar</a>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </nav>
    </>
  );
};
