import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import components from './components/UI/'

import DataStorage from "./DataStorage"

const app = createApp(App)
app.config.globalProperties = DataStorage

components.forEach(component => {
        app.component(component.name, component)
    });

app.mount('#app');
        


        