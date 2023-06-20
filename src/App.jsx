
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import NavBar from "./components/layout/navbar/NavBar";



function App() {

  return (
    
      <div>
        <NavBar />
        <ItemListContainer greeting={ 'Tienda de impresiones 3d de filamento' } />
      </div>
   
  )
};

export default App;
