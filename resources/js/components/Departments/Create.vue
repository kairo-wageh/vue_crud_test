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
    <form @submit.prevent="storeDepartment(department)">
        <label for="name">Name</label>
        <input v-model="department.name" type="text" id="name" class="text-input " />
        <div class="error" v-for="message in validationMessages.name">
            {{message}}
        </div>
        <button>Save</button>
    </form>
</template>

<script>
import {reactive} from "vue";
import useDepartments from "../../composables/departments";
export default {
    setup(){
        const department = reactive({
            name: ''
        })
        const {storeDepartment, validationMessages} = useDepartments()
        return {department, storeDepartment, validationMessages}
    }

}
</script>
