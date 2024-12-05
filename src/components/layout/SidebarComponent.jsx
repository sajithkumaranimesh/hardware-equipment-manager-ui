import { NavLink} from "react-router-dom";

function SidebarComponent() {
    return (
        <div
            className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
            style={{ width: "280px", height: "100vh" }}
        >
            <a
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
                <svg className="bi pe-none me-2" width="40" height="32">
                    <use xlinkHref="#bootstrap" />
                </svg>
                <span className="fs-4">Sidebar</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <NavLink to={'person'} className={({isActive}) => isActive? "nav-link active" : "nav-link text-white"} end aria-current="page">
                        <svg className="bi pe-none me-2" width="16" height="16">
                            <use xlinkHref="#home" />
                        </svg>
                        Person
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'category'} className={({isActive}) => isActive? "nav-link active" : "nav-link text-white"} end>
                        <svg className="bi pe-none me-2" width="16" height="16">
                            <use xlinkHref="#speedometer2" />
                        </svg>
                        Category
                    </NavLink>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        <svg className="bi pe-none me-2" width="16" height="16">
                            <use xlinkHref="#table" />
                        </svg>
                        Orders
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        <svg className="bi pe-none me-2" width="16" height="16">
                            <use xlinkHref="#grid" />
                        </svg>
                        Products
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        <svg className="bi pe-none me-2" width="16" height="16">
                            <use xlinkHref="#people-circle" />
                        </svg>
                        Customers
                    </a>
                </li>
            </ul>
            <hr />
        </div>
    );
}

export default SidebarComponent;
