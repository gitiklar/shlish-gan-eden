import produce from 'immer';
import { DELETE_EMPLOYEE_BY_ID, GET_EMPLOYEES_DATA } from '../actions';

const initialState = {
    employeesData: null,
};

export default produce((state , action) => {
    switch(action.type) {
        case GET_EMPLOYEES_DATA:
            state.employeesData = action.payload;
            break;
        case DELETE_EMPLOYEE_BY_ID: 
            state.employeesData = state.employeesData.filter(employee=>employee.id !== action.payload);
            break;
    }
} , initialState);