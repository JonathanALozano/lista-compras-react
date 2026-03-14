import React, { useState } from "react";

function App() {
  const [product, setProduct] = useState("");
  const [items, setItems] = useState([]);

  const addItem = (e) => {
    e.preventDefault();

    if (product.trim() === "") return;

    const newItem = {
      id: Date.now(),
      name: product,
      bought: false,
    };

    setItems([...items, newItem]);
    setProduct("");
  };

  const toggleBought = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, bought: !item.bought } : item
      )
    );
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <h1>Lista de Compras</h1>
      <p>Agrega productos y márcalos como comprados.</p>

      <form onSubmit={addItem}>
        <input
          type="text"
          placeholder="Escribe un producto"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>

      <ul>
        {items.length === 0 ? (
          <li>No hay productos todavía.</li>
        ) : (
          items.map((item) => (
            <li key={item.id}>
              <span
                style={{
                  textDecoration: item.bought ? "line-through" : "none",
                  marginRight: "10px",
                }}
              >
                {item.name}
              </span>
              <button onClick={() => toggleBought(item.id)}>
                {item.bought ? "Desmarcar" : "Comprado"}
              </button>
              <button onClick={() => deleteItem(item.id)}>Eliminar</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;