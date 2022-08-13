import React from "react";

function Filteritems({ filterValue, fnClick }) {
  return (
    <span className="ml-2 border border-gray-300 px-2 py-1 rounded-md">
      {filterValue}
      <button type="button" className="ml-2" onClick={fnClick}>
        x
      </button>
    </span>
  );
}

export default Filteritems;
