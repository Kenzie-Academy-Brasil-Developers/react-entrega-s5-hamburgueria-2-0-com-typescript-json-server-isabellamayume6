import { ReactNode } from "react";
import { AuthProvider } from "./AuthProvider";
import { ProductsProvider } from "./ProdutosProvider";

interface ProvidersProps {
  children: ReactNode;
}
const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </AuthProvider>
  );
};
export default Providers;
