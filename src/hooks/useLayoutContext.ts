import { useEffect, useState } from "react";

export type CartType = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

function useLayoutContext() {
  const [cart, setCart] = useState<CartType[]>([]);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      setCart(JSON.parse(cart));
    }
  }, []);

  const addToCart = (item: CartType) => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      const cartItems = JSON.parse(cart);
      const index = cartItems.findIndex((cartItem: CartType) => {
        return cartItem.id === item.id;
      });
      if (index === -1) {
        cartItems.push(item);
      } else {
        cartItems[index].quantity += item.quantity;
      }
      localStorage.setItem("cart", JSON.stringify(cartItems));
      setCart(cartItems);
    } else {
      localStorage.setItem("cart", JSON.stringify([item]));
      setCart([item]);
    }
  };

  const removeFromCart = (id: number) => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      const cartItems = JSON.parse(cart);
      const index = cartItems.findIndex((cartItem: CartType) => {
        return cartItem.id === id;
      });
      cartItems.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      setCart(cartItems);
    }
  };

  const updateCart = (id: number, quantity: number) => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      const cartItems = JSON.parse(cart);
      const index = cartItems.findIndex((cartItem: CartType) => {
        return cartItem.id === id;
      });
      cartItems[index].quantity = quantity;
      localStorage.setItem("cart", JSON.stringify(cartItems));
      setCart(cartItems);
    }
  };

    return { cart, addToCart, removeFromCart, updateCart };
}

export default useLayoutContext;
