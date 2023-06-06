import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [show, setShow] = useState(null);

  useEffect(() => {
    async function fetchShow() {
      const res = await axios.get("https://api.tvmaze.com/search/shows?q=all");
      const { data } = res;
      setShow(data);
      console.log(data);
    }
    fetchShow();
  }, []);
  return (
    <MovieContext.Provider value={{ show, setShow }}>
      {children}
    </MovieContext.Provider>
  );
};
