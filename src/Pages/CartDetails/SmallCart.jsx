import PropTypes from "prop-types";
import { ImCross } from "react-icons/im";

const SmallCart = ({ cart,cartItems, setCartItems }) => {
  const { _id,title, date, img, message, price } = cart;

  const handleDelete = () =>{
    fetch(`http://localhost:5000/bookings/${_id}`,{
        method: 'DELETE'
    })
    .then(()=>{
        alert('delte success')
        const reaminingItem = cartItems.filter(cart => cart._id !==_id)
        setCartItems(reaminingItem)
    })
    .catch(error => {
        console.log(error)
    })
  }
  return (
    <tr>
      <th onClick={handleDelete}>
        {/* <label>
          <input type="checkbox" className="checkbox" />
        </label> */}
        <ImCross className="text-2xl text-red-500"></ImCross>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50">$ {price}</div>
          </div>
        </div>
      </td>
      <td>{message}</td>
      <td>{date}</td>
      <th>
        <button className="btn btn-ghost bg-orange-500 text-white p-2 font-extrabold">
          Pending
        </button>
      </th>
    </tr>
  );
};

SmallCart.propTypes = {
    cart: PropTypes.object,
    cartItems: PropTypes.object,
    setCartItems: PropTypes.func
}

export default SmallCart;
