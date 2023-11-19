import "./App.css";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div className="bg-gradient-to-bottom-primary-warning">
      <header>
        <h1>Detalle del producto</h1>
      </header>
      <main>
        <ProductDetail />
      </main>
    </div>
  );
}

export default App;
