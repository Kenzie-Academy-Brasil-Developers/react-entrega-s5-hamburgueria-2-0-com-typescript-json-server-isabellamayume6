import { ReactNode } from "react";
import { AuthProvider } from "./AuthProvider";
import { ProductsProvider } from "./ProdutosProvider";
import { CartProvider } from "./CartProviders";

interface ProvidersProps {
  children: ReactNode;
}
const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <ProductsProvider>
        <CartProvider>{children}</CartProvider>
      </ProductsProvider>
    </AuthProvider>
  );
};
export default Providers;
