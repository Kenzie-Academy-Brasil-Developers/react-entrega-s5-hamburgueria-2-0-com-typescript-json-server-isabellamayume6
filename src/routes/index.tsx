import { Switch, Route } from "react-router-dom";
import { LoginPage } from "../pages/Login";
import { CadastroPage } from "../pages/Cadastro";
import { Dashboard } from "../pages/Dashboard";
import { Cart } from "../components/Cart";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LoginPage />
      </Route>
      <Route path="/cadastro">
        <CadastroPage />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/carrinho">
        <Cart />
      </Route>
    </Switch>
  );
};
export default Routes;
