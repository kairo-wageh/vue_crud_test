import {ref, inject} from 'vue'
import {useRouter} from "vue-router";

export default function useDepartments() {

    const departments = ref([])
    const department = ref({})
    const router = useRouter()
    const validationMessages = ref({})
    const swal = inject('$swal')

    const Toast = swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', swal.stopTimer)
            toast.addEventListener('mouseleave', swal.resumeTimer)
        }
    })

    const getDepartments = async()=>{
        axios.get('api/departments')
            .then(response => {
                departments.value = response.data.data
            })
    }

    const storeDepartment = async(department) => {
        axios.post('/api/departments', department)
            .then(response => {
                router.push({name:'departments.index'})
                swal({
                    icon: 'success',
                    title: 'added successfully'
                })
            })
            .catch(error => {
                if(error.response.data){
                    validationMessages.value = error.response.data.errors
                }
            })
    }

    const getDepartment = async (id) => {
        axios.get('/api/departments/' + id)
            .then(response => {
                department.value = response.data.data
            })
    }

    const updateDepartment = async(department) => {

        axios.put('/api/departments/'+department.id, department)
            .then(response => {
                router.push({name: 'departments.index'})
                swal({
                    icon: 'success',
                    title: 'updated successfully'
                })
                // Toast.fire({
                //     icon: 'success',
                //     title: 'Signed in successfully'
                // })
            })
            .catch(error => {
                validationMessages.value = error.response.data.errors
            })

    }

    const destroyDepartment = async(id) => {
        swal({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this action!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            confirmButtonColor: '#ef4444',
            timer: 20000,
            timerProgressBar: true,
            reverseButtons: true
        })
            .then(result => {
                if(result.isConfirmed){
                    axios.delete('/api/departments/'+ id)
                        .then(response => {
                            getDepartments()
                            router.push({name: 'departments.index'})
                            swal({
                                icon: 'success',
                                title: 'deleted successfully'
                            })
                        })
                        .catch(error => {
                            swal({
                                icon: 'error',
                                title: 'Something went wrong'
                            })
                        })
                }
            })

    }

    return {departments, department, getDepartment, getDepartments, storeDepartment, updateDepartment, destroyDepartment,validationMessages}
}
