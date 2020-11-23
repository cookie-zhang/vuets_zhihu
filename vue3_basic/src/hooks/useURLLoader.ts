/*
 * @Author: your name
 * @Date: 2020-11-10 11:13:12
 * @LastEditTime: 2020-11-10 14:12:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuets_zhihu/vue3_basic/src/hooks/userURLLoader.ts
 */
import { ref } from 'vue'
import axios from 'axios'

function useURLLoader<T>(url: string) {
    const result = ref<T | null>(null)
    const loading = ref(true)
    const loaded = ref(false)
    const error = ref(null)

    axios.get(url).then((res)=>{
        loading.value = false;
        loaded.value = true;
        result.value = res.data;
    }).catch(e=>{
        error.value = e
        loading.value = false
    })

    return {
        result,
        loading,
        loaded,
        error
    }
}

export default useURLLoader