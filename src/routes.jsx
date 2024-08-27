import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  CreditCardIcon,
  UserIcon ,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import View from "./pages/customer/view";

import ViewSalesman from './pages/salesman/ViewSalesman';
import Payment from "./pages/payment/payment";


const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
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

export default routes;
