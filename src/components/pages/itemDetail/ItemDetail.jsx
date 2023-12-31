import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetail.css";

const ItemDetail = ({ product, agregarAlCarrito, cantidadEnCarrito }) => {
  return (
    <div className="detail">
      <img src={product.img} />
      <h2>{product.title}</h2>
      <h4>{product.description}</h4>
      <h3>${product.price}</h3>

      <CounterContainer
        cantidadEnCarrito={cantidadEnCarrito}
        stock={product.stock}
        agregarAlCarrito={agregarAlCarrito}
      />
    </div>
  );
};

export default ItemDetail;
