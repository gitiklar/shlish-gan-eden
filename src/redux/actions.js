export const GET_EMPLOYEES_DATA = 'GET_EMPLOYEES_DATA';
export const DELETE_EMPLOYEE_BY_ID = 'DELETE_EMPLOYEE_BY_ID';

export const updateEmployeesDataInStore = listData => {
    return { type: GET_EMPLOYEES_DATA , payload: listData };
}

export const deleteEmployeeById = id => {
    return { type: DELETE_EMPLOYEE_BY_ID , payload: id };
}

export const getEmployeesData = () => {
    return async dispatch => {
        try {
            const response = await (await fetch('http://dummy.restapiexample.com/api/v1/employees')).json();
            const data = response.data.map(row=>({key : row.id  ,...row }));
            dispatch(updateEmployeesDataInStore(data));
        } catch(err) {
            console.log(err);
        }
    }
}