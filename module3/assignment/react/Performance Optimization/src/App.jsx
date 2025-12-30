import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useState, useMemo, useCallback } from "react";
import ProductList from "./ProductList";

const productsData = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Headphones", price: 3000 }
];

export default function App() {
  const [counter, setCounter] = useState(0);
  const [products] = useState(productsData);

  
  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return products.reduce((sum, item) => sum + item.price, 0);
  }, [products]);

  
  const handleProductSelect = useCallback((product) => {
    console.log("Selected product:", product.name);
  }, []);

  return (
    <div>
      <h2>Total Price: Rs{totalPrice}</h2>

      <h3>Counter: {counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>
        Increment Counter
      </button>

      <ProductList
        products={products}
        onProductSelect={handleProductSelect}
      />
    </div>
  );
}