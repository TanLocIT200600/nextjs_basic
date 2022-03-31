import React, { Component } from 'react';
import axios from "axios";

export const ProductServices = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  const data = await response.data;
  return {
    data
  }
}