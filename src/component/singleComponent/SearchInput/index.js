import React from "react";

const SearchInput = (props) => (
  <input
    className=" border border-gray-400 rounded  w-64 h-10 mt-4 mb-2"
    type="text"
    onChange={props.changedText}
    value={props.utga}
    placeholder={!props.placehold ? "0000УБА" : props.placehold}
  />
);
export default SearchInput;
