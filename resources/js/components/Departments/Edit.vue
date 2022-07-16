<style>
.text-input{
    border: 1px solid #6b7280;
    margin-left: 2px;
}
.error{
    color: red;
}
</style>
<template>
    <form @submit.prevent="updateDepartment(department)">
        <label for="name">Name</label>
        <input v-model="department.name" type="text" id="name" class="text-input " />
        <div class="error" v-for="message in validationMessages.name">
            {{message}}
        </div>
        <button>Edit</button>
    </form>
</template>

<script>
import {onMounted, reactive} from "vue";
import useDepartments from "../../composables/departments";
import {useRoute} from 'vue-router'
export default {
    setup(){

        const route = useRoute()
        const {department, getDepartment, updateDepartment, validationMessages} = useDepartments()

        onMounted(() => {
            getDepartment(route.params.id)
        })
        return {department, updateDepartment, validationMessages}
    }

}
</script>
