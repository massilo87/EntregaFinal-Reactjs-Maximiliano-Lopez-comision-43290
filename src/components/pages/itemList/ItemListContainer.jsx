import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import { products } from "../../../productsMocks";
import ItemList from "./itemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(products);
    });

    tarea.then((resp) => setItems(resp)).catch((err) => console.log(err));
  }, []);

  return <ItemList items={items} />;
};

export default ItemListContainer;
