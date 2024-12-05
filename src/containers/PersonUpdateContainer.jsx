import LabelFieldComponent from "../components/common/LabelFieldComponent.jsx";
import InputFieldComponent from "../components/common/InputFieldComponent.jsx";
import ButtonComponent from "../components/common/ButtonComponent.jsx";
import {json, useLoaderData} from "react-router-dom";
import PersonForm from "./PersonForm.jsx";

function PersonUpdateContainer() {
    const response = useLoaderData();
    const person = response.data;


    return (
        <PersonForm method={"PUT"} person={person}/>
    );
}

export default PersonUpdateContainer;


export async function loader({request, params}) {
    const id = params.personId;
    const response = await fetch(`http://localhost:8080/person/${id}`, { method: 'GET' });

    if (!response.ok) {
        throw json({message: 'Could not fetch details for selected person.'}, {status: 500});
    }

    return await response.json();
}
