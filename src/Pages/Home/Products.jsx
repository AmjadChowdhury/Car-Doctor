import prod1 from "../../assets/images/products/1.png"
import prod2 from "../../assets/images/products/2.png"
import prod3 from "../../assets/images/products/3.png"
import prod4 from "../../assets/images/products/4.png"
import prod5 from "../../assets/images/products/5.png"
import prod6 from "../../assets/images/products/6.png"
import { FaDollarSign } from "react-icons/fa";

const Products = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl font-bold text-yellow-500">Popular Products</h1>
        <p className="text-4xl font-bold mt-4">Browse Our Products</p>
        <p className="mt-2 mb-6 w-1/2 m-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="card bg-base-100 border-2 border-base-200">
          <figure className="px-10 pt-10 h-full">
            <img src={prod1} alt="" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl font-extrabold uppercase">
            Cools Led Light
            </h2>
            <div className="flex justify-between items-center text-xl font-bold uppercase text-yellow-500">
              <p className="flex items-center mr-10">
                Price : <FaDollarSign></FaDollarSign> {200}
              </p>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 border-2 border-base-200">
          <figure className="px-10 pt-10 h-full">
            <img src={prod2} alt="" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl font-extrabold uppercase">
            Cools Led Light
            </h2>
            <div className="flex justify-between items-center text-xl font-bold uppercase text-yellow-500">
              <p className="flex items-center mr-10">
                Price : <FaDollarSign></FaDollarSign> {300}
              </p>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 border-2 border-base-200">
          <figure className="px-10 pt-10 h-full">
            <img src={prod3} alt="" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl font-extrabold uppercase">
              Car Engine Filter
            </h2>
            <div className="flex justify-between items-center text-xl font-bold uppercase text-yellow-500">
              <p className="flex items-center mr-10">
                Price : <FaDollarSign></FaDollarSign> {500}
              </p>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 border-2 border-base-200">
          <figure className="px-10 pt-10 h-full">
            <img src={prod4} alt="" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl font-extrabold uppercase">
              Car Engine Plug
            </h2>
            <div className="flex justify-between items-center text-xl font-bold uppercase text-yellow-500">
              <p className="flex items-center mr-10">
                Price : <FaDollarSign></FaDollarSign> {200}
              </p>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 border-2 border-base-200">
          <figure className="px-10 pt-10 h-full">
            <img src={prod5} alt="" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl font-extrabold uppercase">
              Car Engine Plug
            </h2>
            <div className="flex justify-between items-center text-xl font-bold uppercase text-yellow-500">
              <p className="flex items-center mr-10">
                Price : <FaDollarSign></FaDollarSign> {200}
              </p>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 border-2 border-base-200">
          <figure className="px-10 pt-10 h-full">
            <img src={prod6} alt="" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl font-extrabold uppercase">
              Car Engine Plug
            </h2>
            <div className="flex justify-between items-center text-xl font-bold uppercase text-yellow-500">
              <p className="flex items-center mr-10">
                Price : <FaDollarSign></FaDollarSign> {200}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
