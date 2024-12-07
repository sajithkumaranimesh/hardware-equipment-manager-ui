import {Button, Form, Input, Space} from "antd";
import {CategoryService} from "../service/CategoryService.js";

export const CategoryRegistrationPage = () => {
    const [form] = Form.useForm();

    const service = new CategoryService();

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
                layout="vertical"
                >
                    <Form.Item
                    label="Category Name"
                    name="name"
                    rules={[
                        {required: true, message: 'Please enter category name'},
                    ]}
                    >
                      <Input placeholder="Category Name"/>
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