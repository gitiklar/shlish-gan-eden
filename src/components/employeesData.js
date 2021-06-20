import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button  } from 'antd';
import 'antd/dist/antd.css';

import { getEmployeesData } from '../redux/actions';
import AntdTable from './antdTable';

const EmployeesDataContainer = () => {
    const dispatch = useDispatch();
    const [ loadEmployeesData , setLoadEmployeesData ] = useState(false);
    const employeesData = useSelector(state => state.employeesDataReducer.employeesData);
    const getEmployeesDataHandler = () => {
        setLoadEmployeesData(true);
        dispatch(getEmployeesData());
    }

    return (
        <div className="innerContainer">
            <div className="listContainer">
                <div className="topContainer">
                    {!employeesData && <Button onClick ={getEmployeesDataHandler}>Load Employees List</Button>}
                </div>
                <div className="mainContainer">
                    {(loadEmployeesData || employeesData) && <AntdTable/>}
                </div>
            </div>
        </div>
    );
};

export default EmployeesDataContainer;