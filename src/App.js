import FetchApi from "./components/FetchApi";
import Crud from "./components/Crud";
import ProductList from "./components/ProductList";
import Wordle from "./components/Wordle";
import ThemePage from "./pages/ThemePage";

function App() {
  return (
    <div className="App">
      <ThemePage />
      <FetchApi />
      <Crud />
      <ProductList />
      <Wordle />
    </div>
  );
}

export default App;
