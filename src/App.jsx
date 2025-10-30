import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Featured from "./components/Featured/Featured";
import Products from "./components/Products/Products";
import Newsletter from "./components/Newsletter/Newsletter";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Featured />
        <Products />
        <Newsletter />
      </main>
    </div>
  );
}

export default App;
