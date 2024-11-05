import InputFieldComponent from "../components/common/InputFieldComponent.jsx";
import LabelFieldComponent from "../components/common/LabelFieldComponent.jsx";

function CategoryRegistrationContainer() {
    return (
        <form>
            <h1>Category Registration</h1>

            <LabelFieldComponent htmlFor={"category_name"} text={"Category Name"}/>
            <InputFieldComponent type={'text'} id={'category_name'} placeholder={'Category Name'} />

            <LabelFieldComponent htmlFor={"category_description"} text={"Category Description"}/>
            <InputFieldComponent type={'text'} id={'category_description'} placeholder={'Category Description'}/>

            <LabelFieldComponent htmlFor={"register_date"} text={"Register Date"}/>
            <InputFieldComponent type={'date'} id={'register_date'} placeholder={'Register Date'}/>
        </form>
    )
}

export default CategoryRegistrationContainer;