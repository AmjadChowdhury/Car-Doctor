import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SmallCart from "./SmallCart";

const CartDetails = () => {
  const { user } = useContext(AuthContext);

  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    fetch(`https://car-doctor-server-wd9n.vercel.app/bookings?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCartItems(data);
      });
  }, [user]);
  return (
    <div className="overflow-x-auto">
        <h1 className="text-2xl font-extrabold text-center">Cart info of <span className="text-orange-500">{user?.displayName}</span></h1>
      <table className="table">
        <tbody>
          {/* row 1 */}
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
