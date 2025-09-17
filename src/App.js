import FetchApi from "./components/FetchApi";
import Crud from "./components/Crud";
import ProductList from "./components/ProductList";
import Wordle from "./components/Wordle";

function App() {
  return (
    <div className="App">
      <FetchApi />
      <Crud />
      <ProductList />
      <Wordle />
    </div>
  );
}

export default App;
