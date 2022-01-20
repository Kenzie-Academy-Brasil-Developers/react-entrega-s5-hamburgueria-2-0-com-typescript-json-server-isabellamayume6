import { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

interface SignInProps {
  children: ReactNode;
}

interface Person {
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
  signIn: (auth: Person) => void;
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
  const signIn = (userData: Person) => {
    axios
      .post("https://localhost:3001/login", userData)
      .then((response) => {
        localStorage.setItem("@teste:token", response.data.token);
        localStorage.setItem("@teste:userId", response.data.user.id);

        setAuthToken(response.data.token);
        setUserId(response.data.user.id);
        history.push("/dashboard");
      })
      .catch((err) => {
        console.log("deu errado", err);
      });
  };
  //para cadastrar
  const signUp = (userData: RegisterProps) => {
    axios
      .post("https://localhost:3001/users", userData)
      .then((_) => {
        history.push("/login");
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
