import { useCart } from "../../Providers/CartProviders";
import { DivInfo, CartInfo, Card, Button, Header } from "./styled";
import { FiHome, FiLogOut } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../Providers/AuthProvider";

export const Cart = () => {
  const { removeProduct, cart } = useCart();
  const history = useHistory();
  const { logout } = useAuth();

  const backToHome = () => {
    history.push("/dashboard");
  };
  return (
    <div>
      <Header>
        <FiHome onClick={() => backToHome()} size={"25"} />
        <h2>Carrinho de compras</h2>
        <FiLogOut onClick={() => logout()} size={"25"} />
      </Header>
      {cart.length > 0 ? (
        <Card>
          {cart.map((produto, i) => (
            <CartInfo key={i}>
              <img src={produto.img} alt={produto.name} />
              <DivInfo>
                <p>{produto.name}</p>
                <strong>{produto.price.toFixed(2)}</strong>
                <Button onClick={() => removeProduct(produto)}>Remover</Button>
              </DivInfo>
            </CartInfo>
          ))}
        </Card>
      ) : (
        <div>
          <h2>Você ainda não adicionou produtos!</h2>
        </div>
      )}
    </div>
  );
};
