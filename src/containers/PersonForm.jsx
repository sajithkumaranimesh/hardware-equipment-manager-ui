import InputFieldComponent from "../components/common/InputFieldComponent.jsx";
import LabelFieldComponent from "../components/common/LabelFieldComponent.jsx";
import ButtonComponent from "../components/common/ButtonComponent.jsx";
import {Form, json, redirect} from "react-router-dom";


function PersonForm({method, person}) {;

    return (
        <>
            <Form method={method}>
                <h1>Person Registration</h1>

                <LabelFieldComponent htmlFor={"first_name"} text={"First Name:"} />
                <InputFieldComponent id={"firstName"} type={"text"} placeholder={"First Name"} name={"firstName"}
                                     required={true} minLength={"3"} maxLength={"20"} defaultValue={person.firstName || ''} required={true} />

                <LabelFieldComponent htmlFor={"last_name"} text={"Last Name:"} />
                <InputFieldComponent id={"lastName"} type={"text"} placeholder={"Last Name"} name={"lastName"}
                                     required={true} defaultValue={person.lastName || ''} required={true}/>

                <LabelFieldComponent htmlFor={'email'} text={"Email Address:"} />
                <InputFieldComponent id={"email"} type={"email"} placeholder={"Email Address:"} name={"email"}
                                     required={true} defaultValue={person.email || ''} required={true}/>

                <LabelFieldComponent htmlFor={"phone"} text={"Phone Number:"} />
                <InputFieldComponent id={"phone"} type={"number"} placeholder={"Phone Number:"} name={"phone"}
                                     required={true} defaultValue={person.phone || ''} required={true} />

                <LabelFieldComponent htmlFor={"address"} text={"Address:"} />
                <InputFieldComponent id={"address"} type={"text"} placeholder={"Address:"} name={"address"}
                                     required={true} defaultValue={person.address || ''} required={true} />

                <ButtonComponent type='reset' text="Reset" />
                <ButtonComponent type="submit" text="Submit" />
            </Form>
        </>
    );
}

export default PersonForm;

export async function action({request,params}) {
    const method = request.method;
    const data = await request.formData();

    const personData = {
        firstName: data.get('firstName'),
        lastName: data.get('lastName'),
        email: data.get('email'),
        phone: data.get('phone'),
        address: data.get('address'),
    }
    console.log(personData);

    let url = 'http://localhost:8080/person';

    if (method === 'Put') {
        const personId = params.personId;
        url = `http://localhost:8080/person/${personId}`;
    }

    const response = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(personData)
    })
    if (!response.ok) {
        throw json({message: 'Could not save person.'}, {status: 500});
    }
    return redirect('..');
}


