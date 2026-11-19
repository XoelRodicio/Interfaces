import Tarxeta from "./Tarxeta.jsx";
import Aviso from "./Aviso.jsx";
import ProductCard from "./ProductCard.jsx";

export default function App() {
  return (
    <>
      <Tarxeta />
      <Aviso />
      <ProductCard nome="Teclado Mecánico" prezo={59.99} />
      <ProductCard nome="Rato Inalámbrico" prezo={24.50} />
    </>
  );
}
