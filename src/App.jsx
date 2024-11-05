import "bootstrap/dist/css/bootstrap.min.css";
import PersonRegistrationPage from "./pages/PersonRegistrationPage.jsx";
import EquipmentRegistrationPage from "./pages/EquipmentRegistrationPage.jsx";
import CategoryRegistrationPage from "./pages/CategoryRegistrationPage.jsx";
import NotificationRegistrationPage from "./pages/NotificationRegistrationPage.jsx";

export default function App() {
  return (
    <div className="container-fluid d-flex">
        <PersonRegistrationPage/>
        <EquipmentRegistrationPage/>
        <CategoryRegistrationPage/>
        <NotificationRegistrationPage/>
    </div>
  );
}
