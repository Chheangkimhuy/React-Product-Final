import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  const fetchAPI = async () => {
    try {
      const res = await axios.get("https://product-server-json.onrender.com/products");
      if (res.data) {
        setProduct(res.data);
        console.log(res.data);
      }
    } catch (e) {
      console.error("Error fetching products:", e);
    } finally {
      console.log("Fetch completed");
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <ProductContext.Provider value={{ product }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
