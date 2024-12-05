import {defer, Form, json, useLoaderData} from "react-router-dom";
import LabelFieldComponent from "../components/common/LabelFieldComponent.jsx";
import InputFieldComponent from "../components/common/InputFieldComponent.jsx";
import ButtonComponent from "../components/common/ButtonComponent.jsx";

function CategoryUpdateContainer() {
    const respone = useLoaderData();
    const categoty = respone.data
    console.log("categoty", categoty.data);

    const handleSubmit = () => {
        
    }

    return(
        <>
            <Form method={"PUT"}>
                <h1>Category Update</h1>

                <LabelFieldComponent htmlFor={"category_name"} text={"Category Name"}/>
                <InputFieldComponent type={'text'} id={'category_name'} placeholder={'Category Name'} name={"category_name"} defaultValue={categoty.name} />

                <LabelFieldComponent htmlFor={"category_description"} text={"Category Description"}/>
                <InputFieldComponent type={'text'} id={'category_description'} placeholder={'Category Description'} name={"category_description"} defaultValue={categoty.description} />

                <LabelFieldComponent htmlFor={"register_date"} text={"Register Date"}/>
                <InputFieldComponent type={'date'} id={'register_date'} placeholder={'Register Date'} name={"register_date"} defaultValue={categoty.registerdDate}/>

                <ButtonComponent type="submit" text="submit"/>
            </Form>
        </>
    );
}

export default CategoryUpdateContainer;

export async function loader({request, params}){
    const id = params.categoryId;

    const response = await fetch(`http://localhost:8080/category/${id}`, {
        method: 'GET'
    });
    if (!response.ok) {
        throw json({message: 'Could not fetch details for selected category.'}, {status: 500});
    }
    return await response.json();
    // const data = await response.json();
    // return defer({data});

}