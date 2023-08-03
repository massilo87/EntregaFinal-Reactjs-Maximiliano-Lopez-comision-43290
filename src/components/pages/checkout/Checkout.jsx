import { Button, TextField } from "@mui/material"
import { Link, Navigate } from "react-router-dom"
import Swal from "sweetalert2"


const Checkout = ({ clearCart, orderId, handleSubmit, handleChange, userData }) => {
    return (
        <div style={{ marginBottom: "13rem" }}>
            <h1 style={{ marginBottom: "5rem" }}>Completa tus datos para finalizar la compra</h1>

            {!orderId ? (<form onSubmit={handleSubmit}>
                {/*   <input type="text" placeholder="ingrese su nombre" name="name" onChange={handleChange} />
                <input type="text" placeholder="ingrese su telefono" name="phone" onChange={handleChange} />
                <input type="text" placeholder="ingrese su email" name="email" value={userData.email} onChange={handleChange} />
                <input type="text" placeholder="confirme su email" name="confirmEmail" value={userData.confirmEmail} onChange={handleChange} /> */}
                <TextField
                    type="text"
                    label="Nombre"
                    name="name"
                    onChange={handleChange}
                    variant="outlined"
                    margin="normal"
                    required
                />
                <TextField
                    type="text"
                    label="Teléfono"
                    name="phone"
                    onChange={handleChange}
                    variant="outlined"
                    margin="normal"
                    required
                />
                <TextField
                    type="email"
                    label="Email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    variant="outlined"
                    margin="normal"
                    required
                />
                <TextField
                    type="email"
                    label="Confirmar Email"
                    name="confirmEmail"
                    value={userData.confirmEmail}
                    onChange={handleChange}
                    variant="outlined"
                    margin="normal"
                    required
                />
                <Button variant="contained" type="submit" size="small">Comprar</Button>
                <Link to="/cart"><Button variant="contained" type="button" size="small">Volver al carrito</Button></Link>
            </form>) : (Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Su orden de compra es:' + orderId,
            }), clearCart(), <Navigate to="/" />)}

        </div>
    )
}

export default Checkout