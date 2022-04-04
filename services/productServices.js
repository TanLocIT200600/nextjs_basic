
import axios from "axios";

export const ProductServices = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  const data = await response.data;
  return {
    data,
    paths: data.map((index) => {
      const productId = index.id;
      return {
        params: {
          productId
        }
      }
    }),
  }
};

export const ProductDetails = async (id) => {
  const res = await fetch('https://fakestoreapi.com/products/' + id);
  const data = await res.json();
  return {
    data
  }
}