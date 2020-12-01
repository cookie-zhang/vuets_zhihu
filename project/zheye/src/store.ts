/*
 * @Author: your name
 * @Date: 2020-11-24 16:32:24
 * @LastEditTime: 2020-11-27 16:20:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuets_zhihu/project/zheye/src/store.ts
 */

import { createStore } from 'vuex';
interface UserProps {
    isLogin: boolean;
    name?: string;
    id?: number;
};
export interface GloalDataProps {
    user: UserProps;
};
const store = createStore<GloalDataProps>({
    state: {
        user: {
            isLogin: false
        }
    },
    mutations: {
        login(state) {
            state.user = { ...state.user, isLogin: true, name: 'feifei' };
        }
    }
});
export default store;