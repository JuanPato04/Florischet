import React from 'react';

const products = [
  { name: "Tulipán tejido", price: 70 },
  { name: "Rosa tejida", price: 95 },
];

const App = () => {
  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
      <h1>Floraria 🌸</h1>
      <p>Flores tejidas de crochet hechas con amor</p>
      <h2>Catálogo</h2>
      <ul>
        {products.map((p, i) => (
          <li key={i}>
            {p.name} - ${p.price} MXN
          </li>
        ))}
      </ul>
      <h2>Ramos</h2>
      <p>
        Crea tu ramo personalizado (4 o más flores) y recibe 10% de descuento.
      </p>
      <h2>Pedidos especiales</h2>
      <p>
        Podemos cotizar diseños personalizados. Envíanos una imagen y te damos
        precio.
      </p>
      <p>Contáctanos por WhatsApp o correo electrónico.</p>
    </div>
  );
};

export default App;