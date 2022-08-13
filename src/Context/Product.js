import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const productContext = React.createContext();

// use contenxt
export function useProductContext() {
  return useContext(productContext);
}

// context provider
export function ProductProvider({ children }) {
  const [productData, setProductData] = useState(null);
  const [productInfo, setProductInfo] = useState([]);
  const [confirm, setConfirm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://fec-inventory-api.herokuapp.com/product-info"
      );
      setProductData(res.data);
    };

    fetchData();
  }, []);

  //   categorys
  const category = productData?.map((category) => category.category).sort();
  const categorys = [...new Set(category)];

  // product id
  const getProductInfo = async (id) => {
    const productId = await axios.get(
      `https://fec-inventory-api.herokuapp.com/product-info/${id}`
    );
    const pId = productId.data;

    const productDetails = await axios.get(
      `https://fec-inventory-api.herokuapp.com/inventory-info?product_id=${pId.id}`
    );
    const details = productDetails.data;

    details.map((detail) => {
      const singleData = { ...detail, ...pId, quantity: 1 };
      return setProductInfo([...productInfo, singleData]);
    });
  };

  // increment
  const incriment = (id) => {
    const exist = productInfo.map((id) => id).find((x) => x.id === id);

    if (exist) {
      setProductInfo(
        productInfo.map((x) =>
          x.id === id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );

      return;
    } else {
      setProductInfo({ ...exist, quantity: 1 });
      return;
    }
  };

  // dicrement
  const dicrement = (id) => {
    const exist = productInfo.map((id) => id).find((x) => x.id === id);

    // if (exist.quantity === 1) {
    //   setProductInfo(productInfo.map((id) => id).filter((x) => x.id !== id));
    // } else {
    setProductInfo(
      productInfo.map((x) =>
        x.id === id
          ? exist.quantity > 1
            ? { ...exist, quantity: exist.quantity - 1 }
            : x
          : x
      )
    );
    // }
  };
  // romove product from cart
  const remove = (id) => {
    // const exist = productInfo.map((id) => id).find((x) => x.id === id);
    setProductInfo(productInfo.map((id) => id).filter((x) => x.id !== id));
  };

  // checkout
  const checkout = (checkoutData) => {
    if (checkoutData.length > 0) {
      setConfirm(true);
      return;
    } else {
      setConfirm(false);
      alert("add min 1 product");
      return;
    }
  };
  const confirms = () => {
    setConfirm(false);
    alert("Order successfully confirmd!");
    setProductInfo([]);
  };
  const cancel = () => {
    setConfirm(false);
  };

  const value = {
    categorys,
    productData,
    productInfo,
    getProductInfo,
    incriment,
    dicrement,
    checkout,
    confirm,
    confirms,
    cancel,
    remove,
  };

  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
}
