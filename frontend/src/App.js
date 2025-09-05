import React from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import CardShowcase from "./components/CardShowcase";

function App() {
  // Show showcase if URL contains 'showcase', otherwise show main app
  const showShowcase = window.location.search.includes('showcase');
  
  if (showShowcase) {
    return <CardShowcase />;
  }

  return (
    <div className="App">
      <div className="app-container">
        <h1 className="app-title">متجر المنتجات</h1>
        <div className="card-container">
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default App;