import PropTypes from "prop-types";
import { ImCross } from "react-icons/im";
import Swal from "sweetalert2";

const SmallCart = ({ cart,cartItems, setCartItems }) => {
  const { _id,title, date, img, message, price } = cart;

  const handleDelete = () =>{

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://car-doctor-server-three-topaz.vercel.app/bookings/${_id}`,{
          method: 'DELETE'
      })
      .then(()=>{
          const reaminingItem = cartItems.filter(cart => cart._id !==_id)
          setCartItems(reaminingItem)
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
      })
      .catch(error => {
          // console.log(error)
      })
      }
    });


  }
  return (
    <tr>
      <th onClick={handleDelete}>
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
    </tr>
  );
};

SmallCart.propTypes = {
    cart: PropTypes.object,
    cartItems: PropTypes.object,
    setCartItems: PropTypes.func
}

export default SmallCart;
