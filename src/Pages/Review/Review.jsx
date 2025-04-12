import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Review = () => {
  const { user } = useContext(AuthContext);
  const handleCheckOut = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const profession = form.profession.value;
    const review = form.review.value;
    const userImg = user?.photoURL;
    const rating = form.rating.value;

    const servicesReview = { name, userImg, profession, review, rating };
    console.log(servicesReview);

    axios
      .post(
        "https://car-doctor-server-three-topaz.vercel.app/servicesReview",
        servicesReview
      )
      .then((res) => {
        if (res.data.insertedId) {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "success",
            title: `${user?.displayName} added review`,
          });
        }
      });
  };
  return (
    <div className="mb-4">
      <h1 className="text-2xl font-extrabold text-center my-2">
        Review of <span className="text-[#123458]">{user?.displayName}</span>
      </h1>
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
                defaultValue={user?.displayName}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-xl font-bold">Email</span>
              </label>
              <input
                name="email"
                type="email"
                defaultValue={user?.email}
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-2">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-xl font-bold">
                  User Profession
                </span>
              </label>
              <input
                name="profession"
                type="text"
                placeholder="Ex:Businessman"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-xl font-bold">Rating</span>
              </label>
              <input
                name="rating"
                type="text"
                placeholder="Out of 5"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          <div className="form-control flex">
            <label className="label">
              <span className="label-text text-xl font-bold">
                Service Review
              </span>
            </label>
            <input
              name="review"
              type="text"
              placeholder="Give a review of the service in minimum 5-6 lines"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Review Done"
              className="btn bg-[#123458] text-white text-lg font-extrabold"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Review;
