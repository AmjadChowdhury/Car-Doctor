import prod1 from "../../assets/images/products/1.png"
import prod2 from "../../assets/images/products/2.png"
import prod3 from "../../assets/images/products/3.png"
import prod4 from "../../assets/images/products/4.png"
import prod5 from "../../assets/images/products/5.png"
import prod6 from "../../assets/images/products/6.png"

const Products = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl lg:text-5xl font-extrabold text-orange-500">Popular Products</h1>
        <p className="text-2xl lg:text-4xl font-bold mt-4">Browse Our Products</p>
        <p className="mt-2 mb-6 w-full lg:w-1/2 m-auto">
        Explore our popular products designed to enhance your car has performance and style. From premium accessories to essential maintenance tools, we’ve got everything your vehicle needs!
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card bg-base-100 border-2 border-b-4 border-b-[#000080] border-base-200">
          <figure className="px-10 pt-10 h-full">
            <img src={prod1} alt="" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-md font-extrabold uppercase">
            Cools Led Light
            </h2>
          </div>
        </div>
        <div className="card bg-base-100 border-2 border-b-4 border-b-[#000080] border-base-200">
          <figure className="px-10 pt-10 h-full">
            <img src={prod2} alt="" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-md font-extrabold uppercase">
            Cools Led Light
            </h2>
          </div>
        </div>
        <div className="card bg-base-100 border-2 border-b-4 border-b-[#000080] border-base-200">
          <figure className="px-10 pt-10 h-full">
            <img src={prod3} alt="" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-md font-extrabold uppercase">
              Car Engine Filter
            </h2>
          </div>
        </div>
        <div className="card bg-base-100 border-2 border-b-4 border-b-[#000080] border-base-200">
          <figure className="px-10 pt-10 h-full">
            <img src={prod4} alt="" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-md font-extrabold uppercase">
              Car Engine Plug
            </h2>
          </div>
        </div>
        <div className="card bg-base-100 border-2 border-b-4 border-b-[#000080] border-base-200">
          <figure className="px-10 pt-10 h-full">
            <img src={prod5} alt="" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-md font-extrabold uppercase">
              Car Engine Plug
            </h2>
          </div>
        </div>
        <div className="card bg-base-100 border-2 border-b-4 border-b-[#000080] border-base-200">
          <figure className="px-10 pt-10 h-full">
            <img src={prod6} alt="" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-md font-extrabold uppercase">
              Car Engine Plug
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
