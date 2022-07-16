require('./bootstrap');

import { createApp } from "vue";
import router from './routes/routes'
import App from './layouts/App'
import VueSweetalert2 from 'vue-sweetalert2';




const app = createApp(App)
app.use(router)
app.use(VueSweetalert2);

app.mount('#my-app')
