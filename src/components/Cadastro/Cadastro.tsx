import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
//import { useAuth } from "../../Providers/AuthProvider";

interface UserData {
  email: string;
  name: string;
  age: number;
  password: string;
}

const Cadastro = () => {
  //const { signUp } = useAuth();
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("e-mail inválido!")
      .required("Campo obrigatório!"),
    name: yup.string().required("Campo obrigatório!"),
    idade: yup
      .string()
      .required("Senha obrigatória!")
      .min(6, "Minimo de 6 caracteres"),
    senha: yup
      .string()
      .oneOf([yup.ref("password"), null], "senhas diferentes")
      .required("campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    console.log("teste");
  };
  return (
    <div>
      <h1>Cadastre-se</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="email" {...register("email")} />
        <span>{errors.email?.message}</span>
        <input placeholder="nome" {...register("name")} />
        <span>{errors.name?.message}</span>
        <input placeholder="idade" {...register("age")} />
        <span>{errors.age?.message}</span>
        <input placeholder="senha" type="password" {...register("password")} />
        <span>{errors.password?.message}</span>
        <button type="submit">Cadastrar</button>
      </form>
      <p>Já possui conta?</p>
      <button onClick={() => history.push("/")}>Login</button>
    </div>
  );
};
export default Cadastro;
