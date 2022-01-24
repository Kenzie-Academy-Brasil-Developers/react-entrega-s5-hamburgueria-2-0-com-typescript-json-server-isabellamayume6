import { createContext, ReactNode, useContext, useState } from "react";

interface CartProps {
  children: ReactNode;
}

interface Product {
  name: string;
  price: number;
  category: string;
  img: string;
  id: number;
}
interface CartProviderData {
  cart: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
}
const CartContext = createContext<CartProviderData>({} as CartProviderData);
export const CartProvider = ({ children }: CartProps) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setCart([...cart, product]);
  };
  const removeProduct = (product: Product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
