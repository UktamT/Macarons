import type { ReactElement } from "react";
import Home from "../../pages/Home/Home";
import Cart from "../../pages/Cart/Cart";
import ItemPages from "../../pages/ItemPage/ItemPages";
import Catalog from "../../pages/Catalog/Catalog";
import Kits from "../../pages/Kits/Kits";
import Create from "../../pages/Create/Create";
import ChooseMacaron from "../../pages/ChooseTaste/ui/ChooseMacaron";
import News from "../../pages/News/News";
import Checkout from "../../pages/Checkout/Checkout";
import SignUp from "../../pages/SignUp/SignUp";
import SignIn from "../../pages/SignIn/SignIn";
import Profile from "../../pages/Profile/Profile";
import ProtectedRoute from "../../shared/ui/ProtectedRoute";

export interface AppRoute {
  path: string;
  element: ReactElement;
}

export const routes: AppRoute[] = [
  { path: "/", element: <Home/> },
  { path: "/cart", element: <Cart/>},
  { path: "/itempage/:id", element: <ItemPages/>},
  { path: "/catalog", element: <Catalog/>},
  { path: "/readyKits", element: <Kits/> },
  { path: "/createKit", element: <Create/> },
  { path: "/chooseMacaron", element: <ChooseMacaron/> },
  { path: "/newspage/:id", element: <News/> },
  { path: '/checkout', element: <Checkout/> },
  { path: '/signup', element: <SignUp/> },
  { path: '/signin', element: <SignIn/> },
  { path: '/profile', element: <ProtectedRoute><Profile/></ProtectedRoute>}
];
