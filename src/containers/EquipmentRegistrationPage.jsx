import {Button, Form, Input, InputNumber, Select, Space} from "antd"
import {EquipmentService} from "../service/EquipmentService.js";
import {useEffect, useState} from "react";
import {CategoryService} from "../service/CategoryService.js";

export const EquipmentRegistrationPage = () => {
    const [form] = Form.useForm();
    const [categories, setCategories] = useState([]);

    const service = new EquipmentService();
    const categoryService= new CategoryService();

    useEffect(() => {
        const retrieveCategorys = async () => {
            try {
                const promise = await categoryService.retrieveAll();
                const categoryOptions = promise.data.map((item) => ({
                    value: item.name,
                    label: item.name
                }))
                setCategories(categoryOptions);
            }catch(error){}
        }
        retrieveCategorys();
    },[])


    const onFinish = async (values) => {
        console.log(values);
        const submitted = service.persist(values);
        if (submitted.status === "SUCCESS") {
            form.resetFields();
        }

    }

    const onFinishFailed = (error) => {
        console.log(error)
    }

    return (
        <div className="container-fluid">
            <div className="row col-lg-6 col-md-12">
                <Form
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout="vertical"
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            { required: true, message: "Please enter equipment name" },
                        ]}
                    >
                        <Input placeholder="Name"/>
                    </Form.Item>
                    <Form.Item
                        label="Description"
                        name="description"
                    >
                        <Input placeholder="Description"/>
                    </Form.Item>
                    <Form.Item
                        label="Rental Price"
                        name="rentalPrice"
                    >
                        <InputNumber placeholder="Rental Price" style={{ width: "100%" }}/>
                    </Form.Item>
                    <Form.Item
                        label="Availability Status"
                        name="availabilityStatus"
                        rules={[
                            { required: true, message: "Please select availability status." },
                        ]}
                    >
                        <Select
                            placeholder="select availability status"
                            options={[
                                {value: true, label: "Availabil"},
                                {value: false, label: "Not Availabil"},
                            ]}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Category Name"
                        name="categoryName"
                        rules={[
                            { required: true, message: "Please select category name." },
                        ]}
                    >
                        <Select
                            placeholder="select category name."
                            options={
                                categories
                            }
                        />
                    </Form.Item>
                    <Form.Item>
                        <Space>
                            <Button type="primary" htmlType="reset" danger>Clear</Button>
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </Space>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}