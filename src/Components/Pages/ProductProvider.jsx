import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/users/"
        );
        setPosts(response.data); // Save API data to state
        console.log("Fetched Products:", response.data); // Log fetched products
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        console.error("Error fetching products:", err.message);
      }
    };
    fetchPosts();
  }, []);

  const addProduct = async (newProduct) => {
    const arraydata = [...posts, newProduct]; // Update the local state with the new product
    setPosts(arraydata);
    setError(null);

    try {
      // Send a POST request to the API with the new product data
      await axios.post("https://api.escuelajs.co/api/v1/products", newProduct, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      // Handle errors
      setError(error.message);
    }
  };
  console.log("Current Products:", posts); // Log all products, including newly added ones

  return (
    <ProductContext.Provider
      value={{
        posts,
        loading,
        error,
        msg,
        addProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext };
