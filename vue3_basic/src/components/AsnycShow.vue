<!--
 * @Author: your name
 * @Date: 2020-11-10 15:32:16
 * @LastEditTime: 2020-11-10 15:35:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuets_zhihu/vue3_basic/src/components/AsnycShow.vue
-->
<template>
<h2>{{result}}</h2>
</template>

<script lang="ts">
import {
    defineComponent,
    ref
} from 'vue'
export default defineComponent({
    setup() {
        return new Promise((resolve) => {
            setTimeout(() => {
                return resolve({
                    result: 525
                })
            }, 5000)
        })
    }
})
</script>
