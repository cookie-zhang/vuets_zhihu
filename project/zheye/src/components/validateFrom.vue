<!--
 * @Author: your name
 * @Date: 2020-11-23 14:45:36
 * @LastEditTime: 2020-11-24 10:06:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuets_zhihu/project/zheye/src/components/validateFrom.vue
-->
<template>
    <form class="validate-form-container">  
        <slot name="default"></slot>
        <div class="submit-area" @click.prevent="submit">
            <slot name="submit">
                <button type="submit" class="btn btn-primary">提交</button>
            </slot>
        </div>
    </form>
</template>
<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'
export const emitter = mitt()
type ValidateFunc = () => boolean
export default defineComponent({
    emits: ['form-submit'],
    setup(props,context){
        let funcArr: ValidateFunc[] = []
        const submit = () => {
            const result = funcArr.map(func => func()).every(result => result)
            context.emit('form-submit', result)
        }
        const callback = (func?: ValidateFunc)=>{
            if (func) {
                funcArr.push(func)
            }
        }
        emitter.on('form-item-created', callback);
        onUnmounted(() => {
            emitter.off('form-item-created', callback);
            funcArr = []
        })
        return {
            submit
        }
    } 
})
</script>