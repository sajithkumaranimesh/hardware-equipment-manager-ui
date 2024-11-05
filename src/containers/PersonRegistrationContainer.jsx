import InputFieldComponent from "../components/common/InputFieldComponent.jsx";
import LabelFieldComponent from "../components/common/LabelFieldComponent.jsx";
import ButtonComponent from "../components/common/ButtonComponent.jsx";

function PersonRegistrationContainer() {
    function handleSubmit(person) {
        console.log(person);
    }

    return(
        <>
            <form method={'POST'} onSubmit={handleSubmit}>
                <h1>Person Registration</h1>

                <LabelFieldComponent htmlFor={"first_name"} text={"First Name :"} />
                <InputFieldComponent id={"firstName"} type={"text"} placeholder={"First Name"} />

                <LabelFieldComponent htmlFor={"last_name"} text={"Last Name :"} />
                <InputFieldComponent id={"lastName"} type={"text"} placeholder={"Last Name"} />

                <LabelFieldComponent htmlFor={'email'} text={"Email Address:"} />
                <InputFieldComponent id={"email"} type={"email"} placeholder={"Email Address:"} />

                <LabelFieldComponent htmlFor={"phone"} text={"Phone Number:"} />
                <InputFieldComponent id={"phone"} type={"number"} placeholder={"Phone Number:"} />

                <LabelFieldComponent htmlFor={"address"} text={"Address:"} />
                <InputFieldComponent id={"address"} type={"text"} placeholder={"Address:"} />


                <ButtonComponent text={"Submit"}/>
            </form>
        </>
    );
}

export default PersonRegistrationContainer;