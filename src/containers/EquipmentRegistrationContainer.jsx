import InputFieldComponent from "../components/common/InputFieldComponent.jsx";
import LabelFieldComponent from "../components/common/LabelFieldComponent.jsx";
import SelectFieldComponent from "../components/common/SelectFieldComponent.jsx";
import ButtonComponent from "../components/common/ButtonComponent.jsx";

function EquipmentRegistrationContainer() {
    const options = ["available", "not available"]

    function handleSubmit(equipment) {
        console.log(equipment);
    }

    return(
        <>
            <form method={'POST'} onSubmit={handleSubmit}>
                <h1>Equipment Registration</h1>

                <LabelFieldComponent htmlFor={'name'} text={"Name :"}/>
                <InputFieldComponent id={'name'} type={'text'} placeholder={'Equipment Name'}/>

                <LabelFieldComponent htmlFor={"description"} text={"Description :"}/>
                <InputFieldComponent id={'description'} type={'text'} placeholder={'Equipment Description'}/>

                <LabelFieldComponent htmlFor={"rental_price"} text={"Rental Price :"}/>
                <InputFieldComponent id={'rental_price'} type={'number'} placeholder={'Rental Price'}/>

                <LabelFieldComponent htmlFor={"availability_status"} text={"Availability Status :"}/>
                <SelectFieldComponent id={'availability_status'} options={options}/>

                <LabelFieldComponent htmlFor={"register_date"} text={"Register Date:"}/>
                <InputFieldComponent id={'register_date'} type={'datetime-local'} placeholder={'Register Date'}/>

                <ButtonComponent text={"Submit"}/>
            </form>
        </>
    );
}
export default EquipmentRegistrationContainer;