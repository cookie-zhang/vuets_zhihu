/*
 * @Author: your name
 * @Date: 2020-11-10 17:26:35
 * @LastEditTime: 2020-11-30 13:07:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuets_zhihu/project/zheye/src/main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'  
axios('http://api.vikingship.xyz/columns?icode=C6A6C4086133360B').then(res=>{
    console.log(res)
})
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')