import { useEffect, useState } from "react";

export type CartType = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  thumbnail: string;
};

export type UserInfoType = {
  id: number;
  name: string;
  email: string;
  phone?: string;
  family: string;
  avatar?: string;
};

function useLayoutContext() {
  const user = localStorage.getItem("user") || "{}";
  const cartItems = localStorage.getItem("cart") || "[]";

  const [cart, setCart] = useState<CartType[]>(JSON.parse(cartItems));
  const [userInfo, setUserInfo] = useState<UserInfoType>(JSON.parse(user));

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

  const changeUserInfo = (userInfo: UserInfoType, token: string) => {
    localStorage.setItem("user", JSON.stringify(userInfo));
    localStorage.setItem("token", token);
    setUserInfo(userInfo);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUserInfo({} as UserInfoType);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    updateCart,
    logout,
    userInfo,
    changeUserInfo,
  };
}

export default useLayoutContext;
