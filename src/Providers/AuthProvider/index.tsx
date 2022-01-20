import { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

interface SignInProps {
  children: ReactNode;
}

interface LoginProps {
  email: string;
  password: string;
}

interface RegisterProps {
  email: string;
  name: string;
  age: number;
  password: string;
}

interface AuthProviderData {
  signIn: (auth: LoginProps) => void;
  signUp: (auth: RegisterProps) => void;
  logout: () => void;
  userId: string;
  authToken: string;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: SignInProps) => {
  const history = useHistory();
  //pegando o token e o id do usuario

  const [authToken, setAuthToken] = useState<string>(
    () => localStorage.getItem("@teste:token") || ""
  );

  const [userId, setUserId] = useState<string>(
    () => localStorage.getItem("@teste:userId") || ""
  );
  //para logar
  const signIn = (userData: LoginProps) => {
    axios
      .post("https://apifakehamburgueria.herokuapp.com/login", userData)
      .then((response) => {
        localStorage.setItem("@burguer:token", response.data.token);
        localStorage.setItem("@burguer:userId", response.data.user.id);

        setAuthToken(response.data.token);
        setUserId(response.data.user.id);
        history.push("/dashboard");
        console.log(userData);
      })
      .catch((err) => {
        console.log("deu errado", err);
      });
  };
  //para cadastrar
  const signUp = (userData: RegisterProps) => {
    axios
      .post("https://apifakehamburgueria.herokuapp.com/register", userData)
      .then((response) => {
        history.push("/");
      })
      .catch((err) => console.log(err));
  };
  //para deslogar apaga o localstorage
  const logout = () => {
    localStorage.clear();
    setAuthToken("");
    history.push("/");
  };

  return (
    <AuthContext.Provider value={{ signIn, signUp, logout, authToken, userId }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
