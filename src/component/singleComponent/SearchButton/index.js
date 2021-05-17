import React from "react";

const SearchButton = (props) => (
  <button
    className="bg-shoppyColor w-64 mt-2 h-10 bourder rounded font-medium  text-white hover:bg-blue-400"
    type="submit"
    onClick={props.haih}
  >
    Хайх
  </button>
);

export default SearchButton;
