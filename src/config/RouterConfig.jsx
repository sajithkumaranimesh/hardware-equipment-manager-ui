import {createBrowserRouter} from "react-router-dom";

import {DashboardLayout} from "../components/layout/DashboardLayout.jsx";
import {UserRegisrationPage} from "../containers/UserRegisrationPage.jsx";
import {UserRecordsPage} from "../containers/UserRecordsPage.jsx";
import {UserUpdatePage} from "../containers/UserUpdatePage.jsx";
import {CategoryRecordsPage} from "../containers/CategoryRecordsPage.jsx";
import {CategoryRegistrationPage} from "../containers/CategoryRegistrationPage.jsx";
import {CategoryUpdatePage} from "../containers/CategoryUpdatePage.jsx";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardLayout/>,
        // element: <UserRecordsPage/>,
        children: [
            {
                path: "user", children: [
                    {
                        index: true,
                        element: <UserRecordsPage/>,
                    },
                    {
                        path: "register",
                        element: <UserRegisrationPage/>,
                    },
                    {
                        path: ":id",
                        element: <UserUpdatePage/>,
                    },
                ]
            },
            {
                path: "category", children: [
                    {
                        index: true,
                        element: <CategoryRecordsPage/>
                    },
                    {
                        path: "register",
                        element: <CategoryRegistrationPage/>
                    },
                    {
                        path: ":id",
                        element: <CategoryUpdatePage/>
                    }
                ]
            }
        ]
    },

]);