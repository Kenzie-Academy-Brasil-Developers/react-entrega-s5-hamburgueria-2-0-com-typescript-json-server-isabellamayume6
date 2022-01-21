import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../Providers/AuthProvider";
import ArtLogin from "../ArtLogin";
import { BoxCad, FormCad, FormInputs, FormButton, ButtonLog } from "./styled";

interface UserData {
  email: string;
  name: string;
  age: number;
  password: string;
}

const Cadastro = () => {
  const { signUp } = useAuth();
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("e-mail inválido!")
      .required("Campo obrigatório!"),
    name: yup.string().required("Campo obrigatório!"),
    age: yup.string().required("Senha obrigatória!"),
    password: yup
      .string()
      .min(6, "Minimo de 6 caracteres")
      .required("campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: UserData) => {
    signUp(data);
    console.log("teste");
  };
  return (
    <>
      <ArtLogin />
      <BoxCad>
        <h2>Cadastro</h2>
        <FormCad onSubmit={handleSubmit(onSubmit)}>
          <FormInputs placeholder="email" {...register("email")} />
          <span>{errors.email?.message}</span>
          <FormInputs placeholder="nome" {...register("name")} />
          <span>{errors.name?.message}</span>
          <FormInputs placeholder="idade" {...register("age")} />
          <span>{errors.age?.message}</span>
          <FormInputs
            placeholder="senha"
            type="password"
            {...register("password")}
          />
          <span>{errors.password?.message}</span>
          <FormButton type="submit">Cadastrar</FormButton>
        </FormCad>
        <p>Já possui conta?</p>
        <ButtonLog onClick={() => history.push("/")}>Login</ButtonLog>
      </BoxCad>
    </>
  );
};
export default Cadastro;
