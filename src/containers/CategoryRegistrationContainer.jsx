import InputFieldComponent from "../components/common/InputFieldComponent.jsx";
import LabelFieldComponent from "../components/common/LabelFieldComponent.jsx";
import {Form, json, redirect} from "react-router-dom";
import ButtonComponent from "../components/common/ButtonComponent.jsx";

function CategoryRegistrationContainer() {
    return (
        <Form method={"POST"}>
            <h1>Category Registration</h1>

            <LabelFieldComponent htmlFor={"category_name"} text={"Category Name"}/>
            <InputFieldComponent type={'text'} id={'category_name'} placeholder={'Category Name'} name={"category_name"}/>

            <LabelFieldComponent htmlFor={"category_description"} text={"Category Description"}/>
            <InputFieldComponent type={'text'} id={'category_description'} placeholder={'Category Description'} name={"category_description"}/>

            <LabelFieldComponent htmlFor={"register_date"} text={"Register Date"}/>
            <InputFieldComponent type={'date'} id={'register_date'} placeholder={'Register Date'} name={"register_date"}/>

            <ButtonComponent type="submit" text="submit"/>
        </Form>
    )
}

export default CategoryRegistrationContainer;

export async function action({request}){
    const data = await request.formData();

    const categoryData = {
        name: data.get('category_name'),
        description: data.get("category_description"),
        registerdDate: data.get("register_date"),
    }

    const response = await fetch('http://localhost:8080/category', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(categoryData)
    })
    if (!response.ok) {
        throw json({message: 'Could not save category.'}, {status: 500});
    }
    return redirect('..');
}