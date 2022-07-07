import "./App.scss";
import React from "react";
import Home from "./components/Home";
import { CartProvider } from "./context/CartContext";

const App = () => {
  /* Envolvemos la home con el provider del context */
  return (
    <CartProvider className="fondo">
       <div className="titulo">
         <p> Viajes / Tours</p>
     </div>
      <Home />
    </CartProvider>
  );
};

export default App;
