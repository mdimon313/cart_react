import React from "react";
import { useProductContext } from "../Context/Product";
import ConfirmBox from "./ConfirmBox";

function CartList() {
  const { productInfo, incriment, dicrement, checkout, confirm, remove } =
    useProductContext();
  const price = productInfo?.map((price) => price);
  const totalPrice = price.reduce(
    (total, unit) => total + unit.quantity * unit.unit,
    0
  );

  return (
    <>
      <div className=" relative h-[500px] p-3 bg-gary-50 ml-1 overflow-y-scroll">
        <table className="w-full">
          <thead className="border-b-2 border-slate-400">
            <tr>
              <th>SL.</th>
              <th>Item</th>
              <th>qty.</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>
            {productInfo?.map((item, index) => (
              <tr key={index} className="text-left py-2">
                <td className="text-center">{index + 1}</td>
                <td>{item.name}</td>
                <td className="text-center flex items-center justify-center">
                  <button
                    className="bg-gray-300 px-2 rounded-md"
                    onClick={() => dicrement(item.id)}
                  >
                    {"-"}
                  </button>
                  <input
                    type="text"
                    value={item.quantity}
                    disabled
                    className="w-8 text-center bg-gray-300 rounded-sm mx-2"
                  />
                  <button
                    className="bg-gray-300 px-2 rounded-md"
                    onClick={() => incriment(item.id)}
                  >
                    {"+"}
                  </button>
                </td>
                <td className="text-center">{item.quantity * item.unit}</td>
                <td
                  onClick={() => remove(item.id)}
                  className="cursor-pointer select-none"
                >
                  x
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="">
            <tr>
              <td colSpan={3} className="text-right capitalize">
                total:
              </td>
              <td className="text-center">{totalPrice}</td>
            </tr>
          </tfoot>
        </table>
        <button
          type="button"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-gray-300 px-5 py-1 block mx-auto rounded-md"
          onClick={() => checkout(productInfo)}
        >
          Confirm
        </button>
      </div>
      {confirm && <ConfirmBox totalPrice={totalPrice} />}
    </>
  );
}
export default React.memo(CartList);
