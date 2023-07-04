import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import NavBar from "./components/layout/navbar/NavBar";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer />
      {/* <ItemDetailContainer /> */}
    </div>
  );
}

export default App;
