<template>
    <ul>
        <li>
            <router-link :to="{name: 'departments.index'}">Departments</router-link>
        </li>
        <li>
            <router-link :to="{name: 'employees.index'}">Employees</router-link>
        </li>
    </ul>
    <router-view></router-view>
</template>

<script>
    export default {

    }
</script>
