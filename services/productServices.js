
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

export const fetchProductByLimit = async (number) => {
  const res = await axios.get(`https://fakestoreapi.com/products?limit=${number}`);
  const data = await res.data;
  return {
    data
  }
}

export const ProductDetails = async (id) => {
  const res = await axios.get('https://fakestoreapi.com/products/' + id);
  const data = await res.json();
  return {
    data
  }
};

export const FetCategory = async () => {
  const res = await fetch('https://fakestoreapi.com/products/categories');
  const data = res.data;
  return {
    data
  }
};

export const FetchProductByCategory = async (category) => {
  const res = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
  const data = res.data;
  return {
    data
  }
}