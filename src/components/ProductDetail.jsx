const ProductDetail = () => {
  const product = {
    nombre: "Vaso",
    descripcion: "Este es un detalle del producto Vaso",
    precio: "$10",
    SKU: "sku98232",
    cantidad: "2",
  };

  return (
    <div>
      <p>
        Nombre: <strong>{product.nombre}</strong>
      </p>
      <p>
        Descripcion: <strong>{product.descripcion}</strong>{" "}
      </p>
      <p>
        Precio: <strong>{product.precio}</strong>{" "}
      </p>
      <p>
        SKU: <strong>{product.SKU}</strong>{" "}
      </p>
      <p>
        Cantidad: <strong>{product.cantidad}</strong>{" "}
      </p>
    </div>
  );
};

export default ProductDetail;
