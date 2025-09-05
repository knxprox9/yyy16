import React from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import CardShowcase from "./components/CardShowcase";
import StandaloneDemo from "./components/StandaloneDemo";

function App() {
  // Show different views based on URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const view = urlParams.get('view');
  
  if (view === 'showcase') {
    return <CardShowcase />;
  }
  
  if (view === 'standalone') {
    return <StandaloneDemo />;
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