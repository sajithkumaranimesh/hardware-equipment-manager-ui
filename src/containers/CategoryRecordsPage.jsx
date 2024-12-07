import {Button, Space, Table} from "antd";
import {CategoryService} from "../service/CategoryService.js";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export const CategoryRecordsPage = () => {
    const [rows, serRows] = useState([]);

    const service = new CategoryService();

    useEffect(() => {
        const retrieveData = async () => {
            try{
                const promise = await service.retrieveAll();
                serRows(promise.data)
            }catch(error){}
        }
        retrieveData();
    }, []);
    console.log(rows);

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Register Date',
            dataIndex: 'registerdDate',
            key: 'registerdDate',
        },
        {
            title: "Action",
            key: 'action',
            render: (text, record) => (
                <Space direction="horizontal" size={'middle'}>
                    <Link to={`${record.id}`}><Button color="primary" variant="solid" size="small">Edit</Button></Link>
                    <Link to={`${record.id}`}><Button color="danger" variant="solid" size="small">Delete</Button></Link>
                </Space>
            ),
        }
        ]

    return (<>
        <div className="row text-end">
            <Link to="register"><Button variant='solid' color="primary">Register</Button></Link>
        </div>
    <Table columns={columns} dataSource={rows} size='small' scroll={{x: 'max-content'}}/>
        </>
)
}