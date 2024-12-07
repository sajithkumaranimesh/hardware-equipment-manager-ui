import {Button, Space, Table} from "antd";
import {UserService} from "../service/UserService.js";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export const UserRecordsPage = () => {
    const [rows, setRows] = useState([]);

    const service = new UserService();

    useEffect( () => {
        const retrieveData = async () =>{
            try{
                const promise = await service.retrieveAll();
                setRows(promise.data)
            }catch(error){}
        }
        retrieveData();
    }, []);


    const columns = [
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
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


    return (
        <>
            {rows? (<>
                <div className="row text-end">
                    <Link to="register"><Button variant='solid' color="primary">Register</Button></Link>
                </div>
                <Table columns={columns} dataSource={rows} size='small' scroll={{x: 'max-content'}}/>
            </>) : (
                <p>Loading...</p>
            )}
        </>
    );
}