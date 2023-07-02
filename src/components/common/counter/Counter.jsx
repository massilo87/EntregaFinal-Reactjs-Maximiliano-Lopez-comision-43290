import { Button } from "@mui/material"


const Counter = ({ counter, setCounter }) => {
    return (
        <div>

            <div style={{ display: "flex" }}>
                <Button disabled={counter <= 1} variant="contained" onClick={() => setCounter(counter - 1)}>-</Button>
                <h3>{counter}</h3>
                <Button variant="contained" onClick={() => setCounter(counter + 1)}>+</Button>
            </div>

            <Button variant="contained" color="secondary">Agregar al carrito</Button>

        </div>
    )
}

export default Counter