<!--
 * @Author: your name
 * @Date: 2020-11-24 10:33:33
 * @LastEditTime: 2020-11-26 17:44:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuets_zhihu/project/zheye/src/views/home.vue
-->
<template>
  <div class="home-page">
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <img src="../assets/callout.svg" alt="callout" class="w-50"/>
          <h2 class="font-weight-light">随心写作，自由表达</h2>
          <p>
            <a href="#" class="btn btn-primary my-2">开始写文章</a>
          </p>
        </div>
      </div>
    </section>
    <h4 class="font-weight-bold text-center">发现精彩</h4>
    <ClolumnList :list="list"></ClolumnList>
    <button
      class="btn btn-outline-primary mt-2 mb-5 mx-auto btn-block w-25"
    >
      加载更多
    </button>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { useStore } from 'vuex';
// import { GloalDataProps } from '../store'
import ClolumnList, { ColumnProps } from "../components/ClolumnList.vue";
const testData: ColumnProps[] = [
  {
    id: 1,
    title: "test1的专栏",
    description: "这是一句话",
    avatar: "https://cdn2.thecatapi.com/images/MTcwNzY0NQ.gif",
  },
  {
    id: 2,
    title: "test2的专栏",
    description: "这是一句话",
    avatar: "https://cdn2.thecatapi.com/images/MTcwNzY0NQ.gif",
  },
  {
    id: 3,
    title: "test2的专栏",
    description: "这是一句话",
  },
  {
    id: 4,
    title: "test2的专栏",
    description: "这是一句话",
    avatar: "https://cdn2.thecatapi.com/images/MTcwNzY0NQ.gif",
  },
  {
    id: 5,
    title: "test2的专栏",
    description: "这是一句话",
    avatar: "https://cdn2.thecatapi.com/images/MTcwNzY0NQ.gif",
  },
];
export default defineComponent({
  name: 'Home', 
  components: {
    ClolumnList
  },
  setup() {
    // const store = useStore<GloalDataProps>();
      return {
        list: testData,
      }
  }
})
</script>
