import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, serverTimestamp, updateDoc, doc } from "firebase/firestore";
import Swal from "sweetalert2";

const CheckoutContainer = () => {

  const { cart, getTotalPrice, clearCart } = useContext(CartContext)

  const [orderId, setOrderId] = useState("")

  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
    confirmEmail: "",
  })

  const total = getTotalPrice()

  const handleSubmit = (evento) => {
    evento.preventDefault();

    if (userData.email !== userData.confirmEmail) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Las direcciones de correo electrónico no coinciden.',
      });
      return;
    }


    let order = {
      buyer: userData,
      items: cart,
      total,
      date: serverTimestamp()
    }
    //CREAR ORDEN DE COMPRA
    let ordersCollections = collection(db, "orders")
    addDoc(ordersCollections, order).then(resp => setOrderId(resp.id))

    //MODIFICAR STOCK DE PRODUCTOS EN DB
    cart.forEach((elemento) => {
      updateDoc(doc(db, "products", elemento.id), { stock: elemento.stock - elemento.quantity })
    });

  };

  const handleChange = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value })

  }

  return (
    <div>
      <h3>Checkout</h3>

      {!orderId ? (<form onSubmit={handleSubmit}>
        <input type="text" placeholder="ingrese su nombre" name="name" onChange={handleChange} />
        <input type="text" placeholder="ingrese su telefono" name="phone" onChange={handleChange} />
        <input type="text" placeholder="ingrese su email" name="email" value={userData.email} onChange={handleChange} />
        <input type="text" placeholder="confirme su email" name="confirmEmail" value={userData.confirmEmail} onChange={handleChange} />
        <Button variant="contained" type="submit">Comprar</Button>
        <Link to="/cart"><Button variant="contained" type="button">Volver al carrito</Button></Link>
      </form>) : (Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Su orden de compra es:' + orderId,
      }), clearCart(), <Navigate to="/" />)}

    </div>
  )
}

export default CheckoutContainer;