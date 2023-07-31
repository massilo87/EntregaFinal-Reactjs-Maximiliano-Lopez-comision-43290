import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  let { id } = useParams();

  const { addToCart, getQuantityById } = useContext(CartContext);

  let cantidadEnCarrito = getQuantityById(id);

  useEffect(() => {

    let refCollection = collection(db, "products")
    let refDoc = doc(refCollection, id)
    getDoc(refDoc).then(resp => setProduct({ ...resp.data(), id: resp.id }))

  }, [id]);

  const agregarAlCarrito = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };

    addToCart(data);

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Producto agregado',
      timer: 1500
    })

  };

  return <ItemDetail product={product} agregarAlCarrito={agregarAlCarrito} cantidadEnCarrito={cantidadEnCarrito} />;
};

export default ItemDetailContainer;
