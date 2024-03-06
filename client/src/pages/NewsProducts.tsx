import React, { useEffect } from "react";
import { Products } from "../components/Products/Products";

type productList = ProductInterface[]

interface Props {
  title: string,
  products: productList
}


export const NewsProducts: React.FC<Props> = ({ title, products }) => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-11/12 m-auto">
      <header className="py-2">
        <h1 className="font-semibold text-xl md:font-bold md:text-3xl"> {title} <span className="-text--color-grey text-sm md:text-lg"> * </span> </h1>
      </header>
      <Products clothes={products} />
    </section>
  )
}