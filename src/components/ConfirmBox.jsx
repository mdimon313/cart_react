import React from "react";
import { useProductContext } from "../Context/Product";

function ConfirmBox({ totalPrice }) {
  const { productInfo, confirms, cancel } = useProductContext();
  return (
    <div className="h-screen w-full bg-[#33333380] absolute top-0 left-0 flex items-center juctify-center">
      <div className="w-[80%] md:w-[500px] bg-gray-100 text-gray-800 p-4 mx-auto rounded-md opacity-100 z-40">
        <h1 className="text-center mb-2 font-bold text-xl">Are you sure</h1>
        <p className="text-center mb-4 text-gray-400 text-sm">
          Items below will be confirmed
        </p>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Item</th>
              <th>Qty</th>
            </tr>
          </thead>
          <tbody>
            {productInfo.map((qtyItem, key) => (
              <tr key={key} className="text-center">
                <td className="text-left">{qtyItem.name}</td>
                <td>{qtyItem.quantity}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="border-t-[1px] border-gray-200">
            <tr>
              <td colSpan={3} className="text-center">
                total- {totalPrice}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className="text-center">
                <button
                  className="mr-2 border border-gray-400 px-5 py-1 rounded-md select-none"
                  onClick={cancel}
                >
                  Cancel
                </button>
                <button
                  className="ml-2 border border-gray-400 px-5 py-1 rounded-md select-none"
                  onClick={confirms}
                >
                  Confirm
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default React.memo(ConfirmBox);
