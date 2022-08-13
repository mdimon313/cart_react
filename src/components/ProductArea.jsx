import React from "react";
import { useProductContext } from "../Context/Product";
import Cart from "./Cart";

function ProductArea() {
  const { productData } = useProductContext();

  return (
    <div className="grid gap-y-3 grid-cols-2 col-span-2 md:gap-3 overflow-y-scroll h-[500px]">
      {productData?.map((cartDetail, key) => {
        const { name, description, id } = cartDetail;
        return <Cart title={name} id={id} desc={description} key={key} />;
      })}
    </div>
  );
}

export default React.memo(ProductArea);
