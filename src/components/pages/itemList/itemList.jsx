import { Skeleton, Stack } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {

  let arr = [1, 2, 3, 4];

  return (
    <section
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        paddingTop: "3.125rem",
        gap: "3rem",
        marginBottom: "4rem",
      }}
    >

      {
        items.length > 0 ? items.map((item) => (
          <ProductCard key={item.id} item={item} />
        )) : arr.map((elemento) => (
          <Stack spacing={1} key={elemento}>
            <Skeleton variant="rectangular" width={210} height={110} />
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            <Skeleton variant="rounded" width={105} height={30} />
          </Stack>
        ))};

    </section>
  );
};

export default ItemList;
