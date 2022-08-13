import React, { useState } from "react";
import { useProductContext } from "../Context/Product";
import Filteritems from "./FilterItems";

export default function Header() {
  const [tag, setTag] = useState("");
  const [catagory, setCategory] = useState("");
  const { categorys } = useProductContext();

  return (
    <div>
      <h1 className="mb-2 text-xl font-bold">Dashboard &gt; Suppy Room </h1>
      <input
        type="text"
        placeholder="serch item"
        className="focus:outline outline-gray-400 border border-gray-200 px-2 py-1 rounded-md text-gray-800"
      />
      <select
        name="tag"
        className="focus:outline-none border border-gray-400 rounded-xl mx-2 w-5"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
      >
        {categorys.map((category, index) => (
          <option value={`${category}`} key={index}>
            {category}
          </option>
        ))}
      </select>
      <select
        name="category"
        className="focus:outline-none border border-gray-400 rounded-xl mx-2 w-5"
        value={catagory}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categorys.map((category, index) => (
          <option value={`${category}`} key={index}>
            {category}
          </option>
        ))}
      </select>

      {/* view select items */}
      {tag ? <Filteritems filterValue={tag} fnClick={() => setTag("")} /> : ""}
      {/* view select items */}
      {catagory ? (
        <Filteritems filterValue={catagory} fnClick={() => setCategory("")} />
      ) : (
        ""
      )}
    </div>
  );
}
