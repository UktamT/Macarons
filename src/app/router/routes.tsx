import { ReactNode } from "react";
import Home from "../../pages/Home/Home";
import ItemCard from "../../pages/ItemCard/ItemCard";
import Cart from "../../pages/Cart/Cart";
import ItemPages from "../../pages/ItemPage/ItemPages";

export interface AppRoute {
  path: string;
  element: ReactNode;
}

export const routes: AppRoute[] = [
  { path: "/", element: <Home/> },
  { path: "/item", element: <ItemCard/>},
  { path: "/cart", element: <Cart/>},
  { path: "/itempage/:id", element: <ItemPages/>}
];
