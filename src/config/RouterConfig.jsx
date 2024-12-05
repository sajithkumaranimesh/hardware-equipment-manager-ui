import {createBrowserRouter} from "react-router-dom";

import DashboardPage from "../pages/DashboardPage.jsx";
import PersonRecordsPage from "../pages/PersonRecordsPage.jsx";
import {loader as personRecordsLoader} from '../containers/PersonRecordsContainer.jsx';

import PersonRegistrationPage from "../pages/PersonRegistrationPage.jsx";
import {action as manipulatePersonAction} from "../containers/PersonForm.jsx";

import PersonUpdatePage from "../pages/PersonUpdatePage.jsx";
import {loader as personUpdateLoader} from "../containers/PersonUpdateContainer.jsx";

import CategoryRegistrationPage from "../pages/CategoryRegistrationPage.jsx";
import {action as categoryRegisterAction} from "../containers/CategoryRegistrationContainer.jsx";

import CategoryRecordsPage from "../pages/CategoryRecordsPage.jsx";
import {loader as categoryRecordsLoader} from "../containers/CategoryRecordsContainer.jsx";

import CategoryUpdatePage from "../pages/CategoryUpdatePage.jsx";
import {loader as categoryUpdateLoader} from "../containers/CategoryUpdateContainer.jsx";
import {DashboardLayout} from "../components/layout/DashboardLayout.jsx";

export const router = createBrowserRouter([
    {
        // path: "/", element: <DashboardPage/>,
        path: "/",
        element: <DashboardLayout/>,
        children: [
            {
                path: "person", children: [
                    {
                        index: true,
                        element: <PersonRecordsPage/>,
                        loader: personRecordsLoader
                    },
                    {
                        path: "registration",
                        element: <PersonRegistrationPage/>,
                        action: manipulatePersonAction,
                    },
                    {
                        path: ":personId",
                        element: <PersonUpdatePage/>,
                        loader: personUpdateLoader,
                        action: manipulatePersonAction,
                    },
                ]
            },
            {
                path: "category",
                children: [
                    {
                        index: true,
                        element: <CategoryRecordsPage/>,
                        loader: categoryRecordsLoader
                    },
                    {
                        path: 'registration',
                        element: <CategoryRegistrationPage/>,
                        action: categoryRegisterAction
                    },
                    {
                        path: ":categoryId/update",
                        element: <CategoryUpdatePage/>,
                        loader: categoryUpdateLoader
                    }
                ]
            }
        ]
    },

]);