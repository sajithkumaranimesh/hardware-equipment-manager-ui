import SidebarComponent from "../components/layout/SidebarComponent.jsx";
import { Outlet } from "react-router-dom";
import NavbarComponent from "../components/layout/NavBarComponent.jsx";

function DashboardPage() {
    return (
        <div className="container-fluid p-0">
            <div className="row g-0">
                <div className="col-md-3 col-sm-4 p-0">
                    <SidebarComponent />
                </div>
                <div className="col-md-8 col-sm-8 p-0">
                    <NavbarComponent />
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;
