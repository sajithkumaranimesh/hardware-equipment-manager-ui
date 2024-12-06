import {Button, Form, Input, InputNumber, Space} from "antd"
import {UserService} from "../service/UserService.js";

export const UserRegisrationPage = () => {
    const [form] = Form.useForm();

    const service = new UserService();

    const onFinish = async (values) => {
        console.log(values);
        const submitted = await service.persist(values);
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
                <Form
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout="vertical">
                    <Form.Item
                        label="First Name"
                        name="firstName"
                        rules={[
                            {required: true, message: 'Please enter first name'},
                        ]}
                    >
                        <Input placeholder="First Name" />
                    </Form.Item>
                    <Form.Item
                        label="Last Name"
                        name="lastName"
                    >
                        <Input placeholder="Last Name" />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {type: "email", message: "Please enter a valid email" },
                            {required: true, message: 'Please enter your email.'}
                        ]}
                    >
                        <Input placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        label="Phone No"
                        name="phone"
                        rules={[
                            {type: "number", min: 1, message: "Please enter a valid phone number" },
                            {required: true, message: 'Please enter your phone no.'}
                        ]}
                    >
                        <InputNumber placeholder="Phone No" style={{ width: "100%" }} />
                    </Form.Item>
                    <Form.Item
                        label="Address"
                        name="address"
                    >
                        <Input placeholder="Address" />
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