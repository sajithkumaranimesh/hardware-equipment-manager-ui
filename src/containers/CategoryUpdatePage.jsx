import {Button, Form, Input, Space} from "antd";
import {CategoryService} from "../service/CategoryService.js";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export const CategoryUpdatePage = () => {
    const [data, setData] = useState()
    const [form] = Form.useForm();
    const service = new CategoryService();
    const {id} = useParams();

    useEffect(() => {
        const retrieveData = async () => {
            try {
                const promise = await service.retrieveById(id);
                setData(promise.data);
            } catch (error) {
            }
        }
        retrieveData();
    }, [id])

    const onFinish = async (values) => {
        console.log(values);
        const submitted = await service.updateById(id, values);
        if (submitted.status === "SUCCESS") {
            form.resetFields();
        }
    }

    const onFinishFailed = (error) => {
        console.log(error);
    }

    return (
        <div className="container-fluid">
            <div className="row col-lg-6 col-md-12">
                {data ? (<Form
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout="vertical"
                    initialValues={data}
                >
                    <Form.Item
                        label="ID"
                        name="id"
                    >
                        <Input placeholder="ID" disabled/>
                    </Form.Item>
                    <Form.Item
                        label="Category Name"
                        name="name"
                        rules={[
                            {required: true, message: 'Please enter category name'},
                        ]}
                    >
                        <Input placeholder="Category Name"/>
                    </Form.Item>
                    <Form.Item
                        label="Registerd Date"
                        name="registerdDate"
                    >
                        <Input placeholder="Registerd Date"/>
                    </Form.Item>
                    <Form.Item>
                        <Space>
                            <Button type="primary" htmlType="reset" danger>Clear</Button>
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </Space>
                    </Form.Item>
                </Form>) : (<p>Loading...</p>)}
            </div>
        </div>
    );
}