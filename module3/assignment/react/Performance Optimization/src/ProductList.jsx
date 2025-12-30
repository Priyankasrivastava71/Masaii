export default function ProductList({ products, onProductSelect }) {
  console.log("ProductList rendered");

  return (
    <div>
      <h3>Products</h3>
      {products.map((product) => (
        <div key={product.id}>
          <p>
            {product.name} - Rs{product.price}
          </p>
          <button onClick={() => onProductSelect(product)}>
            Select
          </button>
        </div>
      ))}
    </div>
  );
}


