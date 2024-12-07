import {Button, Space, Table} from "antd";
import {EquipmentService} from "../service/EquipmentService.js";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export const EquipmentRecordsPage = () => {
    const [rows, setRows] = useState([]);

    const service = new EquipmentService();

    useEffect( () => {
        const retrieveData = async () =>{
            try{
                const promise = await service.retrieveAll();
                setRows(promise.data)
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
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Rental Price',
            dataIndex: 'rentalPrice',
            key: 'rentalPrice',
        },
        {
            title: 'Status',
            dataIndex: 'availabilityStatus',
            key: 'availabilityStatus',
            render: (status) => (status ? 'Available' : 'Unavailable'),
        },
        {
            title: 'Registerd Date',
            dataIndex: 'registerdDate',
            key: 'registerdDate',
        },
        {
            title: 'Category',
            dataIndex: 'categoryName',
            key: 'categoryName',
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