import React from "react";
import { useProductContext } from "../Context/Product";

function Cart({ id, title, desc }) {
  const { getProductInfo } = useProductContext();

  return (
    <div className="border border-slate-300 flex flex-shrink-0 md:h-fit">
      <img
        src=""
        alt="150 * 150"
        className="w-[150px] h-full md:h-[150px] lg:h-[150px] xl:h-[150px] border border-gray-300"
      />
      <div className="ml-2 py-2 px-1 w-[70%]">
        <h2 className="text-xl font-bold capitalize">{title}</h2>
        <p className="text-justify">{desc}</p>
        <div className="pt-5">
          <button
            type="button"
            className="px-3 py-1 rounded-md bg-gray-400 text-white text-md sm:text-sm"
            onClick={() => getProductInfo(id)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default React.memo(Cart);
