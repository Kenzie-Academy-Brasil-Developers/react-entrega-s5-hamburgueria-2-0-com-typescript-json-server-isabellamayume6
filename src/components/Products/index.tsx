import { useProducts } from "../../Providers/ProdutosProvider";

export const Products = () => {
  const { products } = useProducts();

  return (
    <div>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <strong>{item.price.toFixed(2)}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};
