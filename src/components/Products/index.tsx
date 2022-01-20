import { useProducts } from "../../Providers/ProdutosProvider";

export const Produtos = () => {
  const { products } = useProducts();

  return (
    <div>
      <ul>
        {products.map((produto) => (
          <li key={produto.id}>
            <img src={produto.img} alt={produto.name} />
            <p>{produto.name}</p>
            <p>{produto.category}</p>
            <strong>{produto.price.toFixed(2)}</strong>
            <button>adc</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
