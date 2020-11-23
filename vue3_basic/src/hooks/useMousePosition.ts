/*
 * @Author: your name
 * @Date: 2020-11-10 10:18:34
 * @LastEditTime: 2020-11-10 10:20:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuets_zhihu/vue3_basic/src/hooks/useMousePosition.ts
 */
import { ref, onMounted, onUnmounted } from 'vue'
// 功能抽离
function useMousePosition() {
    const x = ref(0)
    const y = ref(0)
    const updateMouse = (e: MouseEvent) => {
        x.value = e.pageX
        y.value = e.pageY
    }
    onMounted(() => {
        document.addEventListener('click', updateMouse)
    })
    onUnmounted(() => {
        document.removeEventListener('click', updateMouse)
    })
    return { x, y }
}
export default useMousePosition
