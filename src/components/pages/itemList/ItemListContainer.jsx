import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import { products } from "../../../productsMock";
import ItemList from "./itemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let productosFiltrados = products.filter(
      (elemento) => elemento.category === categoryName
    );

    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoryName ? productosFiltrados : products);
      }, 3000);
    });

    tarea.then((resp) => setItems(resp)).catch((err) => console.log(err));
  }, [categoryName]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
