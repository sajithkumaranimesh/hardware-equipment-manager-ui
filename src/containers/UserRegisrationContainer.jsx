import {Button, Form, Input, Space} from "antd"

export const UserRegisrationContainer = () => {

    const onFinish = (values) => {
        console.log(values);
    }

    const onFinishFailed = (error) => {
        console.log(error);
    }

    return (
        <div className="container-fluid">
            <div className="row col-lg-6 col-md-12">
                <Form
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout="vertical">
                    <Form.Item
                        label="First Name"
                        name="firstName"
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
                    >
                        <Input placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        label="Phone No"
                        name="phoneNo"
                    >
                        <Input placeholder="Phone No" />
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