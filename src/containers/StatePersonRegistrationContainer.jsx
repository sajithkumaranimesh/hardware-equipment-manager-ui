import InputFieldComponent from "../components/common/InputFieldComponent.jsx";
import LabelFieldComponent from "../components/common/LabelFieldComponent.jsx";
import ButtonComponent from "../components/common/ButtonComponent.jsx";
import {useState} from "react";

function PersonRegistrationContainer() {
    const [enteredValues, setEnteredValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
    })

    const [didEdit, setDidEdit] = useState({
        email: false,
    })

    const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');

    function handleSubmit(event) {
        event.preventDefault();
        console.log(enteredValues);
    }

    function handleInputChange(identifier, value) {
        setEnteredValues(prevValues => ({
            ...prevValues,
            [identifier]: value,
        }))
        setDidEdit((prevEdit) => ({
            ...prevEdit,
            [identifier]: false,
        }))
    }

    function handleInputBlur(identifier) {
        setDidEdit(prevEdit => ({
            ...prevEdit,
            [identifier]: true
        }))
    }

    return (
        <>
            <form>
                <h1>Person Registration</h1>

                <LabelFieldComponent htmlFor={"first_name"} text={"First Name :"}/>
                <InputFieldComponent id={"firstName"} type={"text"} placeholder={"First Name"}
                                     onChange={(event) => handleInputChange('firstName', event.target.value)}
                                     value={enteredValues.firstName}
                />

                <LabelFieldComponent htmlFor={"last_name"} text={"Last Name :"}/>
                <InputFieldComponent id={"lastName"} type={"text"} placeholder={"Last Name"}
                                     onChange={(event) => handleInputChange('lastName', event.target.value)}
                                     value={enteredValues.lastName}/>

                <LabelFieldComponent htmlFor={'email'} text={"Email Address:"}/>
                <InputFieldComponent id={"email"} type={"email"} placeholder={"Email Address:"}
                                     onBlur={(event) => handleInputBlur('email', event.target.value)}
                                     onChange={(event) => handleInputChange('email', event.target.value)}
                                     value={enteredValues.email}/>
                <div>{emailIsInvalid && <p>Please enter a valid email address.</p>}</div>
                <LabelFieldComponent htmlFor={"phone"} text={"Phone Number:"}/>
                <InputFieldComponent id={"phone"} type={"number"} placeholder={"Phone Number:"}
                                     onChange={(event) => handleInputChange('phone', event.target.value)}
                                     value={enteredValues.phone}/>

                <LabelFieldComponent htmlFor={"address"} text={"Address:"}/>
                <InputFieldComponent id={"address"} type={"text"} placeholder={"Address:"}
                                     onChange={(event) => handleInputChange('address', event.target.value)}
                                     value={enteredValues.address}/>


                <ButtonComponent onClick={handleSubmit} type="submit" text="Submit"/>
            </form>
        </>
    );
}

export default PersonRegistrationContainer;