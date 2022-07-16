<style>
body {
    margin: auto;
}

.btn {
    background-color: burlywood;
    color: #e2e8f0;
}

ul li {
    display: inline-block;
    margin: 2px;
}

.center {
    margin: auto;
}

table {
    margin: 0 auto;
}
</style>
<template>
    <router-link :to="{name: 'departments.create'}" class="btn">Add</router-link>
    <div class="center">
        <table>
            <thead style="background-color: darkgrey; color: #e2e8f0">
            <tr>
                <th>Name</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="department in departments">
                <td>{{ department.name }}</td>
                <router-link :to="{name: 'departments.edit', params: {id: department.id}}">Edit</router-link>
                <a href="#" @click.prevent="destroyDepartment(department.id)">Delete</a>
            </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
import useDepartments from "../../composables/departments";
import {onMounted, ref} from "vue";
import App from "../../layouts/App";

export default {
    components: {App},
    setup() {
        const {departments, getDepartments, destroyDepartment} = useDepartments()

        onMounted(() => {
            getDepartments()
        })
        return {getDepartments, destroyDepartment, departments,}
    }
}
</script>
