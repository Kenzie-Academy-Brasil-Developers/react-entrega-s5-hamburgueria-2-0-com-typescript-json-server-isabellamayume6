import { FiShoppingBag } from "react-icons/fi";
import { CardArt, BoxLogin, BoxBag } from "./styled";
const ArtLogin = () => {
  return (
    <CardArt>
      <h2>
        Burguer<small>Kenzie</small>
      </h2>
      <BoxLogin>
        <BoxBag>
          <FiShoppingBag
            size={25}
            color="#219653
"
          />
        </BoxBag>
        <p>
          A vida é como um sanduíche, é preciso recheá-la com os melhores
          ingredientes.
        </p>
      </BoxLogin>
    </CardArt>
  );
};
export default ArtLogin;
