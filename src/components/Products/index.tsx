import { useProducts } from "../../Providers/ProdutosProvider";
import Header from "../Header";
import { BoxProducts, CardPro, InfoCard, CardButton } from "./styled";
import { useCart } from "../../Providers/CartProviders";

export const Produtos = () => {
  const { products } = useProducts();

  const { addProduct } = useCart();

  return (
    <div>
      <Header />
      <BoxProducts>
        {products.map((produto, i) => (
          <CardPro key={i}>
            <img src={produto.img} alt={produto.name} />
            <InfoCard>
              <p>{produto.name}</p>
              <p>{produto.category}</p>
              <strong>{produto.price.toFixed(2)}</strong>
              <CardButton onClick={() => addProduct(produto)}>
                adicionar
              </CardButton>
            </InfoCard>
          </CardPro>
        ))}
      </BoxProducts>
    </div>
  );
};
