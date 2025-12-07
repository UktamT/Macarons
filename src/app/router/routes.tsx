import { ReactNode } from "react";
import Home from "../../pages/Home/Home";
import Cart from "../../pages/Cart/Cart";
import ItemPages from "../../pages/ItemPage/ItemPages";
import Catalog from "../../pages/Catalog/Catalog";

export interface AppRoute {
  path: string;
  element: ReactNode;
}

export const routes: AppRoute[] = [
  { path: "/", element: <Home/> },
  { path: "/cart", element: <Cart/>},
  { path: "/itempage/:id", element: <ItemPages/>},
  { path: "catalog", element: <Catalog/>}
];
