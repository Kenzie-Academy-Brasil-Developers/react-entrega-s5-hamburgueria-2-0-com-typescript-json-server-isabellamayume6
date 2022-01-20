import { Switch, Route } from "react-router-dom";
import { LoginPage } from "../pages/Login";
import { CadastroPage } from "../pages/Cadastro";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LoginPage />
      </Route>
      <Route path="/cadastro">
        <CadastroPage />
      </Route>
    </Switch>
  );
};
export default Routes;
