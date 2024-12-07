import {Button, Form, Input, InputNumber, Select, Space} from "antd"
import {EquipmentService} from "../service/EquipmentService.js";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export const EquipmentUpdatePage = () => {
    const [data, setData] = useState();
    const [form] = Form.useForm();
    const {id} = useParams();

    const service = new EquipmentService();

    useEffect(() => {
        const retrieveData = async () => {
            try {
                const promise = await service.retrieveById(id);
                setData(promise.data);
            }catch (error){}
        }
        retrieveData();
    },[id]);

    console.log(data);

    const onFinish = async (values) => {
        console.log(values);
        const submitted = service.updateById(id,values);
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
                {data? (<Form
                    labelCol={{
                        span: 5,
                    }}
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout="horizontal"
                    initialValues={data}
                >
                    <Form.Item
                        label="ID"
                        name="id"
                    >
                        <Input placeholder="Id" disabled/>
                    </Form.Item>
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
                        label="Registerd Date"
                        name="registerdDate"
                    >
                        <Input placeholder="Registerd Date" disabled/>
                    </Form.Item>
                    <Form.Item
                        label="Availability Status"
                        name="availabilityStatus"
                        rules={[
                            { required: true, message: "Please select availability status." },
                        ]}
                    >
                        <Select placeholder="select availability status"/>
                    </Form.Item>
                    <Form.Item
                        label="Category Name"
                        name="categoryName"
                        rules={[
                            { required: true, message: "Please select category name." },
                        ]}
                    >
                        <Select placeholder="select category name."/>
                    </Form.Item>
                    <Form.Item style={{textAlign: "end"}}>
                        <Space>
                            <Button type="primary" htmlType="reset" danger>Clear</Button>
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </Space>
                    </Form.Item>
                </Form>) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}