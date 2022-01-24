import { useHistory } from "react-router-dom";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { H2, Search, Alert } from "./styled";
//import { Cart } from "../Cart";
import { useCart } from "../../Providers/CartProviders";

const Header = () => {
  const history = useHistory();
  const { cart } = useCart();
  return (
    <div className="header">
      <H2>
        Burger <small>Kenzie</small>
        <button
          onClick={() => {
            history.push("/carrinho");
          }}
        >
          {
            //{cart.length > 0 ? <Alert>{cart.length}</Alert> : <></>}
          }
          <FiShoppingCart />
        </button>
      </H2>
      <Search>
        <input type="text" placeholder="pesquisar"></input>
        <button>
          <FiSearch />
        </button>
      </Search>
    </div>
  );
};
export default Header;
