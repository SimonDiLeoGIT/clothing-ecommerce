import { Link } from "react-router-dom"
import { useOrder } from "../../hook/useOrder"
import open from "../../assets/icons/open.svg"
import delete_icon from "../../assets/icons/nav icons/trash-slash-alt-svgrepo-com.svg"

export const Orders = () => {


  const { orders } = useOrder()

  return (
    <section className="-text--color-black">
      {orders.length === 0 &&
        <article className="min-h-96 grid place-content-center -bg--color-very-light-grey bg-opacity-30 rounded-3xl my-8 gap-8">
          <h1 className="text-3xl font-bold">There's no Orders :(</h1>
          <p>Find a product you like, add it to your cart, and proceed to purchase.</p>
          <Link to="/new" className="text-center -bg--color-black -text--color-light-grey-violet font-bold p-4 rounded-full w-11/12 max-w-lg m-auto mb-4 duration-150 hover:opacity-85">Shop Products</Link>
        </article>
      }
      <ul className="min-w-64">
        {orders.map(order => {
          return (
            <li className="-bg--color-very-light-grey bg-opacity-30 p-4 rounded-3xl my-4 md:p-6 md:my-8 w-full">
              <p className="font-bold">{order.date.toLocaleDateString('en-US', { day: 'numeric', month: 'long' })}</p>
              <ul className="lg:grid grid-cols-2 gap-4">
                {order.order.map(currOrder => {
                  return (
                    <li className="p-2 my-2 -bg--color-white rounded-xl flex md:p-4 items-center">
                      <img src={currOrder.product.images[0]} className="h-20 md:h-32" />
                      <div className="text-sm font-semibold px-2 md:text-base  md:px-6">
                        <p className="font-bold">{currOrder.product.name}</p>
                        <p>Price:${currOrder.product.price}</p>
                        <p>Quantity: {currOrder.quantity}</p>
                        <p>Subtotal: ${currOrder.quantity * currOrder.product.price}</p>
                      </div>
                      <div className="m-auto mr-2">
                        <Link
                          to={`/product/${currOrder.product.id}/${currOrder.product.colorId}`}
                          className="m-auto block duration-150 hover:bg-opacity-50 hover:-bg--color-very-light-grey hover:shadow-md hover:-shadow--color-very-light-grey rounded-full"
                        >
                          <img src={open} className="w-10 min-w-10 p-2" />
                        </Link>
                        <button /*onClick={() => clearFromCart(item.product)}*/ className="duration-150 hover:bg-opacity-50 hover:-bg--color-very-light-grey hover:shadow-md hover:-shadow--color-very-light-grey rounded-full">
                          <img src={delete_icon} className="w-10 min-w-10 p-2" />
                        </button>
                      </div>
                    </li>
                  )
                })}
              </ul>
              <p className=""><strong>Total:</strong> ${order.total}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}