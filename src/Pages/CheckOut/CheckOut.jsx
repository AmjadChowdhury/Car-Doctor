import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const CheckOut = () => {

  const {user} = useContext(AuthContext)
  const loadedData = useLoaderData()
  console.log(loadedData)
  const handleCheckOut = (e) => {
    e.preventDefault();
    const form = e.target
    const name = form.name.value
    const title = loadedData.title
    const img = loadedData.img
    const price = loadedData.price
    const date = form.date.value
    const message = form.message.value
    const email = user?.email

    const order = {name,title,date,email,img,price,message}

    fetch("http://localhost:5000/bookings",{
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your order has been saved in cart",
          showConfirmButton: false,
          timer: 1500
        });
    })

  };
  return (
    <div className="mb-4">
      <div className="card bg-base-100 w-full  shrink-0 border-2 border-orange-200">
        <form className="card-body" onSubmit={handleCheckOut}>
          <div className="flex flex-col lg:flex-row gap-2">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-xl font-bold">Name</span>
              </label>
              <input
                name="name"
                type="text"
                defaultValue={user.displayName}
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-xl font-bold">Title</span>
              </label>
              <input
                name="title"
                type="text"
                placeholder=""
                defaultValue={loadedData.title}
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-2">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-xl font-bold">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                defaultValue={user.email}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-xl font-bold">Date</span>
              </label>
              <input
                name="date"
                type="date"
                placeholder=""
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="flex">
            <input
              name="message"
              type="text"
              placeholder="Enter Your Message"
              className="input input-bordered flex-1 h-28"
              required
            />
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Order Confirm"
              className="btn bg-orange-500 text-white text-lg font-extrabold"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
