import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SmallCart from "./SmallCart";
import axios from "axios";

const CartDetails = () => {
  const { user } = useContext(AuthContext);

  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    axios.get(`https://car-doctor-server-three-topaz.vercel.app/bookings?email=${user.email}`,{withCredentials: true})
      // .then((res) => res.json())
      // .then((data) => {
      //   setCartItems(data);
      // });
      .then(res => {
        setCartItems(res.data)
      })
  }, [user]);
  return (
    <div className="overflow-x-auto">
        <h1 className="text-2xl font-extrabold text-center"><span className="text-[#123458]">{user?.displayName}</span> Added total <span className="text-[#123458]">{cartItems.length} </span>service</h1>
      <table className="table">
        <tbody>
          <tr className="border-b-2 border-dashed border-b-[#123458]">
             <th></th>
             <th className="lg:text-xl font-extrabold">Serial</th>
             <th className="lg:text-xl font-extrabold">Problem</th>
             <th className="lg:text-xl font-extrabold">Delivery</th>
          </tr>
        </tbody>
        <tbody>
          {
            cartItems.map(cart => <SmallCart
                 key={cart._id}
                 cart={cart}
                 cartItems={cartItems}
                 setCartItems={setCartItems}></SmallCart>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default CartDetails;
