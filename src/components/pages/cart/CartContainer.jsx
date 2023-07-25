import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from "sweetalert2";


const CartContainer = () => {

  const { cart, clearCart, deleteById, getTotalPrice } = useContext(CartContext);

  let vaciar = () => {
    Swal.fire({
      title: 'Seguro quieres vaciar el carrito?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'si, vaciar',
      denyButtonText: `No vaciar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart()
        Swal.fire('Se eliminaron todos los productos!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Productos conservados en el carrito', '', 'info')
      }
    })
  }

  let total = getTotalPrice()

  return (
    <div>
      <h1>Estos son los articulos que cargaste en el carrito</h1>

      {
        cart.map((elemento) => {

          return (
            <div key={elemento.id}>
              {/* <img src={elemento.img} alt="elemento_img" /> */}
              <h3>Articulo:{elemento.title}</h3>
              <h3>Precio:${elemento.price}</h3>
              <h3>Cantidad:{elemento.quantity}</h3>
              <Button onClick={() => deleteById(elemento.id)} variant="outlined" startIcon={<DeleteIcon />} color="error" size="small">Eliminar</Button>
            </div>
          );
        })
      }

      {
        cart.length > 0 && (
          <>
            <Button onClick={vaciar} variant="contained" color="secondary" size="small">Vaciar carrito</Button>
            <h3>El total de tu compra es: ${total}</h3>
          </>
        )}

      {
        cart.length > 0 ? <Button variant="contained" color="success">Terminar compra</Button> : <h3>El carrito esta vacio</h3>
      }
    </div>
  );
};

export default CartContainer;