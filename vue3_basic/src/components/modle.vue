<!--
 * @Author: your name
 * @Date: 2020-11-10 14:41:17
 * @LastEditTime: 2020-11-10 15:13:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuets_zhihu/vue3_basic/src/components/modle.vue
-->
<template>
<teleport to="#modle">
    <div v-if="isopen">
        <h2>
            <slot>this is modle</slot>
        </h2>
        <button @click="buttonClick">Close</button>
    </div>
</teleport>
</template>

<script lang="ts">
import {
    defineComponent
} from "vue";
export default defineComponent({
    props: {
        isopen: Boolean,
    },
    emits: {
        "close-modle": null,
    },
    setup(props, context) {
        const buttonClick = () => {
            context.emit('close-modle')
        }
        return {
            buttonClick
        }
    },
});
</script>
