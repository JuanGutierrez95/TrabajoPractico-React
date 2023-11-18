const ProductDetail = () => {
  
    const product = {
        nombre : "Vaso",
        descripcion : "Este es un detalle del producto Vaso",
        precio: "$10",
        SKU: "sku98232",
        Cantidad:"2"
    }
  
  return <div>
    <h2>Nombre: {product.nombre}</h2>
    
  </div>;
};

export default ProductDetail;
