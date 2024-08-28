import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  CreditCardIcon,
  UserIcon ,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/Admin/dashboard";
import View from "./pages/Admin/customer/view";

import ViewSalesman from './pages/Admin/salesman/ViewSalesman';
import Payment from "./pages/Admin/payment/payment";
import Collection from "./pages/Salesman/collection";
import HomeSalesman from "./pages/Salesman/Dashboard/home";


const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "admin",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserIcon  {...icon} />,
        name: "Customer",
        path: "/customer",
        element: <View />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Salesman",
        path: "/salesman",
        element: <ViewSalesman />,
      },
      {
        icon: <CreditCardIcon {...icon} />,
        name: "Payment",
        path: "/payment",
        element: <Payment />,
      },
      
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "tables",
        path: "/tables",
        element: <Tables />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "notifications",
        path: "/notifications",
        element: <Notifications />,
      },
    ],
  },
];
export const routesSalesman = [
{
  layout: "salesman",
  pages: [
    {
      icon: <HomeIcon {...icon} />,
      name: "dashboard",
      path: "/home",
      element: <HomeSalesman />,
    },
    {
      icon: <UserIcon  {...icon} />,
      name: "Salesman",
      path: "/form",
      element: <Collection/>,
    },
  ],
}]
