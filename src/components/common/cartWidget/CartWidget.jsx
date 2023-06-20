import { Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
    return (
        <div>
            <Badge badgeContent={8} color="warning">
                <ShoppingCartIcon color="action" />
            </Badge>
        </div>
    )
};

export default CartWidget;