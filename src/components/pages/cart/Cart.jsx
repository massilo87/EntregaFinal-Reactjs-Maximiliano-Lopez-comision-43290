import { Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';


const Cart = ({ cart, deleteById, vaciar, total }) => {

    return (
        <div>
            <h1>Estos son los articulos que cargaste en el carrito</h1>
            {cart.map((elemento) => {

                return (
                    <div className="cartView" key={elemento.id}>
                        <div><img src={elemento.img} alt="elemento_img" /></div>
                        <div><small>Artículo</small>
                            <h3>{elemento.title}</h3></div>
                        <div><small>Precio</small>
                            <h3>${elemento.price}</h3></div>
                        <div><small>Cantidad</small>
                            <h3>{elemento.quantity}</h3></div>
                        <IconButton onClick={() => deleteById(elemento.id)} aria-label="delete" size="large" color="error">
                            <DeleteIcon />
                        </IconButton>
                    </div>
                );
            })
            }

            {cart.length > 0 && (
                <div className="btnCart">
                    <Button onClick={vaciar} variant="contained" color="secondary" size="small" >Vaciar carrito</Button>
                    <h3>El total de tu compra es: ${total}</h3>
                </div>
            )}

            <div className="btnTerminar">
                {
                    cart.length > 0 ? <Link to="/checkout"><Button variant="contained" color="success">Terminar compra</Button></Link> : <div><h3>El carrito está vacío</h3><img src="https://res.cloudinary.com/dwiiarrki/image/upload/v1690947612/sad-rounded-square-emoticon_obkntg.png" alt="sad" height="150px" /></div>
                }
            </div>
        </div >
    )
}

export default Cart