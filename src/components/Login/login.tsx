import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BoxForm, Form, FormInputs, FormButton, ButtonCad } from "./styled";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../Providers/AuthProvider";

import ArtLogin from "../ArtLogin";

interface UserData {
  email: string;
  password: string;
}

const Login = () => {
  const { signIn } = useAuth();

  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().required("email obrigatório").email("email inválido"),
    password: yup.string().required("senha obrigatŕia"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: UserData) => {
    signIn(data);
    history.push("/dashboard");
    console.log("logay", data);
  };
  return (
    <>
      <ArtLogin />

      <BoxForm>
        <h2>Login</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormInputs placeholder="E-mail" {...register("email")} />
          <span>{errors.email?.message}</span>
          <FormInputs
            placeholder="Senha"
            type="password"
            {...register("password")}
          />
          <span>{errors.password?.message}</span>
          <FormButton type="submit">Entrar</FormButton>
        </Form>
        <footer>
          <p>Ainda não tem uma conta?</p>
          <ButtonCad
            onClick={() => {
              history.push("/cadastro");
            }}
          >
            Cadastrar
          </ButtonCad>
        </footer>
      </BoxForm>
    </>
  );
};
export default Login;
