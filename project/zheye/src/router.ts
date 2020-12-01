/*
 * @Author: your name
 * @Date: 2020-11-24 16:32:35
 * @LastEditTime: 2020-11-27 16:26:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuets_zhihu/project/zheye/src/router.ts
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Column from './views/ColumnDetail.vue'
import store from './store';
const routerHistory = createWebHashHistory();
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/column/:id',
            name: 'column',
            component: Column
        }
    ] 
})
router.beforeEach((to,from,next)=>{
    if(to.name != 'login' && !store.state.user.isLogin){
        next({name: 'login'})
    } else {
        next()
    }
    // 并不是所有的页面不登陆不能看，所以还可以在路由里面加元信息
    // 例如：meta:{requireaa: true}
    // 通过to.的方式就可以难倒这个信息进行判断跳转对应的页面
})
export default  router