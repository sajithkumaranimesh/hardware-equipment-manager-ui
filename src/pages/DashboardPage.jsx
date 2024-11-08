import HeaderComponent from "../components/layout/HeaderComponent.jsx";
import {Outlet} from "react-router-dom";

function DashboardPage() {
    return (
        <>
            <HeaderComponent/>
            <Outlet></Outlet>
        </>
    );
}

export default DashboardPage;