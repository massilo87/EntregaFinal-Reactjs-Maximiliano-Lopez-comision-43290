
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, serverTimestamp, updateDoc, doc } from "firebase/firestore";
import Swal from "sweetalert2";
import Checkout from "./Checkout";

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

  return <Checkout clearCart={clearCart} orderId={orderId} handleSubmit={handleSubmit} handleChange={handleChange} userData={userData} />

}

export default CheckoutContainer;