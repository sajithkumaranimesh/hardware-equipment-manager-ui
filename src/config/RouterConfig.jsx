import {createBrowserRouter} from "react-router-dom";
import PersonRegistrationPage from "../pages/PersonRegistrationPage.jsx";
import CategoryRegistrationPage from "../pages/CategoryRegistrationPage.jsx";
import EquipmentRegistrationPage from "../pages/EquipmentRegistrationPage.jsx";
import NotificationRegistrationPage from "../pages/NotificationRegistrationPage.jsx";
import DashboardPage from "../pages/DashboardPage.jsx";

export const router = createBrowserRouter([
    {path: "/", element: <DashboardPage/>,
        children: [
            {path: "person", element: <PersonRegistrationPage/>},
            {path: "category", element: <CategoryRegistrationPage/>},
            {path: "equipment", element: <EquipmentRegistrationPage/>},
            {path: "notifications", element: <NotificationRegistrationPage/>},
        ]
    },

]);