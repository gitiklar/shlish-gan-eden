import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Table, Space, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import {  deleteEmployeeById } from '../redux/actions';
import spin from '../../styles/images/loading.gif';

const AntdTable = () => {
    const dispatch = useDispatch();
    const employeesData = useSelector(state => state.employeesDataReducer.employeesData);
    const [ showFilter , setShowFilter ] = useState(false);
    const filterEmployees =  employeesData && employeesData.filter(employee => employee.employee_age > 30 && employee.employee_salary > 200000);

    const showFilterHandler = () => setShowFilter(true)
    const clearFilterHandler = () => setShowFilter(false);

    const columns = [
        { title: 'Id', dataIndex: 'id', key: 'id', },
        { title: 'Employee name', dataIndex: 'employee_name', key: 'employee_name', },
        { title: 'Employee salary', dataIndex: 'employee_salary', key: 'employee_salary', },
        { title: 'Employee age', dataIndex: 'employee_age', key: 'employee_age', },
        { title: 'Action', key: 'action',
            render: (_ , record) => (
              <Space size="middle">
                    <Button onClick={()=> dispatch(deleteEmployeeById(record.id))}>Delete Employee</Button>
              </Space>
            ),
          },
    ];

    return (
        <>
            <div className="filterButtonsContainer">
                <Button onClick={showFilterHandler}>Filter</Button>
                <Button onClick={clearFilterHandler}>Clear Filter</Button>   
            </div>
            { employeesData ?  
                    <Table columns={columns} dataSource={showFilter ? filterEmployees : employeesData}  pagination={{ pageSize: 5 }}/> 
                    : <img src = {spin}/> }
        </>
    );
}

export default AntdTable;