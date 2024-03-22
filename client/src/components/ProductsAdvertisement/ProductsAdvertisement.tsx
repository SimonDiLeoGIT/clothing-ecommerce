import { Link } from "react-router-dom"
import './ProductsAdvertisement.css'
import { ProductImg } from "../ProductImg/ProductImg"

type ProductList = ProductInterface[]

interface Props {
  products: ProductList
  title: string
  link: string
}

export const ProductsAdvertisement: React.FC<Props> = ({ products, title, link }) => {

  return (
    <section className="p-2 mb-4 lg:w-11/12 lg:m-auto">
      <h1 className="font-bold text-xl p-2">{title}</h1>
      <section className="flex overflow-x-auto whitespace-nowrap">
        {products.map(product => {
          return (
            <article className="min-w-72 mx-1">
              <ProductImg product={product} />
            </article>
          )
        })}
        <Link to={link}>
          <article className="w-12 h-full rounded-lg overflow-hidden  hover:opacity-60">
            <p className="-bg--color-light-grey-violet h-full -text--color-white text-4xl font-bold flex items-center justify-center">+</p>
          </article>
        </Link>
      </section>
    </section>
  )
}