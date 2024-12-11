import {Button, Form, Input, InputNumber, Space} from "antd";
import {useEffect, useState} from "react";
import {UserService} from "../service/UserService.js";
import {useParams} from "react-router-dom";

export const UserUpdatePage = ({}) => {
    const [data, setData] = useState(null)
    const [form] = Form.useForm();
    const {id} = useParams()

    const service = new UserService();

    useEffect(() => {
        const retrieveData = async () => {
            try{
                const promise = await service.retrieveById(id);
                setData(promise.data)
            }catch(error){}
        }
        retrieveData();
    }, [id]);


    const onFinish = async (values) => {
        const submitted = await service.updateById(id,values);
        if(submitted.status === "SUCCESS"){
            form.resetFields();
        }
    }

    const onFinishFailed = (error) => {
        console.log(error);
    }

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                {data ? (
                    <Form
                        labelCol={{
                            span: 6,
                        }}
                        wrapperCol={{
                            span: 18,
                        }}
                        form={form}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        layout="vertical"
                        initialValues={data}
                    >
                        <div className="row">
                            {/* Left Column */}
                            <div className="col-md-6">
                                <Form.Item label="ID" name="id">
                                    <Input placeholder="ID" disabled />
                                </Form.Item>
                                <Form.Item
                                    label="First Name"
                                    name="firstName"
                                    rules={[
                                        { required: true, message: "Please enter first name" },
                                    ]}
                                >
                                    <Input placeholder="First Name" />
                                </Form.Item>
                                <Form.Item label="Last Name" name="lastName">
                                    <Input placeholder="Last Name" />
                                </Form.Item>
                            </div>

                            {/* Right Column */}
                            <div className="col-md-6">
                                <Form.Item
                                    label="Email"
                                    name="email"
                                    rules={[
                                        { type: "email", message: "Please enter a valid email" },
                                        { required: true, message: "Please enter your email." },
                                    ]}
                                >
                                    <Input placeholder="Email" />
                                </Form.Item>
                                <Form.Item
                                    label="Phone No"
                                    name="phone"
                                    rules={[
                                        { type: "number", min: 1, message: "Please enter a valid phone number" },
                                        { required: true, message: "Please enter your phone no." },
                                    ]}
                                >
                                    <InputNumber placeholder="Phone No" style={{ width: "100%" }} />
                                </Form.Item>
                                <Form.Item label="Address" name="address">
                                    <Input placeholder="Address" />
                                </Form.Item>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="row">
                            <div className="col-12 text-end">
                                <Form.Item>
                                    <Space>
                                        <Button type="primary" htmlType="reset" danger>
                                            Clear
                                        </Button>
                                        <Button type="primary" htmlType="submit">
                                            Submit
                                        </Button>
                                    </Space>
                                </Form.Item>
                            </div>
                        </div>
                    </Form>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );

}
