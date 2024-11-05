import InputFieldComponent from "../components/common/InputFieldComponent.jsx";
import LabelFieldComponent from "../components/common/LabelFieldComponent.jsx";
import TextareaFieldComponent from "../components/common/TextareaFieldComponent.jsx";

function NotificationRegistrationContainer() {
    return(
        <form>
            <h1>Notification Registration</h1>

            <LabelFieldComponent htmlFor={"headline"} text={"Headline :"}/>
            <InputFieldComponent type={'text'} id={'headline'} placeholder={'Enter Headline'}/>

            <LabelFieldComponent htmlFor={"message"} text={"Message :"}/>
            <TextareaFieldComponent id={'message'} placeholder={'Enter Message'}/>

            <LabelFieldComponent htmlFor={"created_at"} text={'Created At :'}/>
            <InputFieldComponent type={'datetime-local'} id={'created_at'} placeholder={'Created At'}/>
        </form>
    );
}

export default NotificationRegistrationContainer;