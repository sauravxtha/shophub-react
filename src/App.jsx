import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Featured from "./components/Featured/Featured";
import Products from "./components/Products/Products";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Featured />
        <Products />
      </main>
    </div>
  );
}

export default App;
