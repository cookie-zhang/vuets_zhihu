<!--
 * @Author: your name
 * @Date: 2020-11-04 16:27:35
 * @LastEditTime: 2020-11-10 15:41:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuets_zhihu/vue3_basic/src/App.vue
-->
<template>
<div id="#app">
    {{ data.count }}--{{ data.double }}
    <button @click="data.increase">按钮</button>
    <h1>{{greetings}}</h1>
    <h1>x:{{x}}----y:{{y}}</h1>
    <Modle :isopen='isopen' @close-modle="onModalClose">my modle!!!</Modle>
    <button @click="openmodle">open modle</button>
    <h1 v-if="loading">loading!......</h1>
    <img v-if="loaded" :src="result[0].url" /><br />
    <button @click="updategreetings">Update Title</button>
    <Suspense>
        <template #default>
            <asnyc-show />
        </template>
        <template #fallback>
            <h1>asyncshow loading!!!!11</h1>
        </template>
    </Suspense>
</div>
</template>

<script lang="ts">
import {
    reactive,
    ref,
    watch,
} from "vue";
import useMousePosition from './hooks/useMousePosition'
import useURLLoader from './hooks/useURLLoader'
import Modle from './components/modle.vue'
import AsnycShow from './components/AsnycShow.vue'
interface DataProps {
    count: number;
    increase: () => number;
}
interface DogResult {
    messgae: string;
    status: string;
}
interface CatResult {
    id: string;
    url: string;
    width: number;
    height: number;
}
export default {
    name: "App",
    components: {
        Modle,
        AsnycShow
    },
    // 旧写法
    // data() {
    //     return {
    //         count: 0
    //     }
    // },
    // methods: {
    //     increase() {
    //         this.count++
    //     }
    // }
    // 新写法 ref 是个函数  接受参数，返回响应式对象
    setup() {
        // ref computed 都是接收原始类型
        // const count = ref(0)
        // const double = computed(() => {
        //     return count.value * 2
        // })
        // const increase = () => {
        //     count.value++
        // }

        // ractive是接收对象类型
        const data = reactive({
            count: 0,
            increase: () => {
                data.count++;
            }
        })
        const greetings = ref('Hello')
        const updategreetings = () => {
            greetings.value = 'Hello!'
        }
        watch([greetings, () => data.count], (newvalue, oldvalue) => {
            console.log('new-' + newvalue)
            console.log('old-' + oldvalue)
            document.title = 'update' + greetings.value
        })
        const {
            x,
            y
        } = useMousePosition()
        const {
            result,
            loading,
            loaded
        } = useURLLoader < CatResult[] > ('https://api.thecatapi.com/v1/images/search?limit=1')
        watch(result, () => {
            if (result.value) {
                console.log(result.value[0].url)
            }
        })
        const isopen = ref(false)
        const openmodle = () => {
            isopen.value = true
        }
        const onModalClose = () => {
            isopen.value = false
        }
        return {
            data,
            greetings,
            updategreetings,
            x,
            y,
            result,
            loading,
            loaded,
            isopen,
            openmodle,
            onModalClose
        };
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

img {
    width: 30%;
    height: 30%;
}
</style>
