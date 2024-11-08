import InputFieldComponent from "../components/common/InputFieldComponent.jsx";
import LabelFieldComponent from "../components/common/LabelFieldComponent.jsx";
import ButtonComponent from "../components/common/ButtonComponent.jsx";

function PersonRegistrationContainer() {


    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Person Registration</h1>

                <LabelFieldComponent htmlFor={"first_name"} text={"First Name :"}/>
                <InputFieldComponent id={"firstName"} type={"text"} placeholder={"First Name"} name={"firstName"}
                                     required={true} minLength={"3"} maxLength={"20"}/>

                <LabelFieldComponent htmlFor={"last_name"} text={"Last Name :"}/>
                <InputFieldComponent id={"lastName"} type={"text"} placeholder={"Last Name"} name={"lastName"}
                                     required={true}/>

                <LabelFieldComponent htmlFor={'email'} text={"Email Address:"}/>
                <InputFieldComponent id={"email"} type={"email"} placeholder={"Email Address:"} name={"email"}
                                     required={true}/>

                <LabelFieldComponent htmlFor={"phone"} text={"Phone Number:"}/>
                <InputFieldComponent id={"phone"} type={"number"} placeholder={"Phone Number:"} name={"phone"}
                                     required={true}/>

                <LabelFieldComponent htmlFor={"address"} text={"Address:"}/>
                <InputFieldComponent id={"address"} type={"text"} placeholder={"Address:"} name={"address"}
                                     required={true}/>

                <ButtonComponent type='reset' text="Reset"/>
                <ButtonComponent type="submit" text="Submit"/>
            </form>
        </>
    );
}

export default PersonRegistrationContainer;