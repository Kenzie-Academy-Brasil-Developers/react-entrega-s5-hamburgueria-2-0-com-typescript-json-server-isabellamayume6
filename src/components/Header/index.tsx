import { useHistory } from "react-router-dom";
import { FiSearch, FiShoppingCart } from "react-icons/fi";

const Header = () => {
  const history = useHistory();
  return (
    <div className="header">
      <h2>
        Burger <small>Kenzie</small>{" "}
      </h2>
      <div className="Pesquisa">
        <input type="text" placeholder="pesquisar"></input>
        <button>
          <FiSearch />
        </button>
        <button
          onClick={() => {
            history.push("/carrinho");
          }}
        >
          <FiShoppingCart />
        </button>
      </div>
    </div>
  );
};
export default Header;
