import { useEffect } from "react";
import { Orders } from "../components/Orders/Orders"

export const Profile = () => {

  useEffect(() => {
    document.title = "Profile | CrystalGym";
  })

  return (
    <section className="p-2 -text--color-black max-w-md m-auto md:max-w-7xl lg:w-11/12 lg:m-auto xl:9/12">
      <article className="w-full">
        <h1 className="font-bold text-lg md:text-3xl my-4">
          Hello user!
        </h1>
      </article>
      <section className="w-full my-4">
        <h1 className="font-bold md:text-xl">
          Your Orders
        </h1>
        <Orders />
      </section>
    </section>
  )
}

export default Profile;