
import React from 'react'
import { ProductDetails, ProductServices } from '../services/productServices';

export const getStaticPaths = async () => {
  const res = await ProductServices();
  const data = await res.data;

  const paths = data.map((data) => {
    return {
      params: { id: data.id.toString(), }
    }
  })

  return {
    paths,
    fallback: false,
  }
}
export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await ProductDetails(id);
  return {
    props: { products: res.data }
  }
}

const Details = (props) => {

  console.log("Products", props);

  return (
    <div>
      <img src={props.products.image} alt={props.id} />
      <h3>{props.products.title}</h3>
      <p>{props.products.description}</p>
      <span>{props.products.rating?.rate}/5.0</span>
    </div>
  )
}

export default Details;