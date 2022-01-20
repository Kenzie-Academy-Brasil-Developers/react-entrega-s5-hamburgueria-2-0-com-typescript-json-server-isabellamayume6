import { Switch, Route } from "react-router-dom";
import { LoginPage } from "../pages/Login";
import { CadastroPage } from "../pages/Cadastro";
import { Dashboard } from "../pages/Dashboard";

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
    </Switch>
  );
};
export default Routes;
