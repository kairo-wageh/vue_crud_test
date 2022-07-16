import {createRouter, createWebHistory} from "vue-router";

import DepartmentsIndex from '../components/Departments/Index';
import DepartmentsCreate from '../components/Departments/Create';
import DepartmentsEdit from '../components/Departments/Edit';


import EmployeesIndex from '../components/Employees/Index';

const routes = [
    // departments routes
    {
        name: 'departments.index',
        path: '/',
        component: DepartmentsIndex
    },

    {
        name: 'departments.create',
        path: '/departments/create',
        component: DepartmentsCreate
    },


    {
        name: 'departments.edit',
        path: '/departments/edit/:id',
        component: DepartmentsEdit,
    },

    {
        name: 'employees.index',
        path: '/employees',
        component: EmployeesIndex
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
