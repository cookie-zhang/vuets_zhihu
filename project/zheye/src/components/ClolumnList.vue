<!--
 * @Author: your name
 * @Date: 2020-11-13 09:53:42
 * @LastEditTime: 2020-11-18 10:43:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuets_zhihu/project/zheye/src/components/ClolumnList.vue
-->
<template>
  <div class="container">
    <div class="row">
      <div v-for="column in columnList" :key="column.id" class="col-4 mb-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body text-center">
            <img
              :src="column.avatar"
              :alt="column.title"
              class="rounded-circle border border-light my-3"
            />
            <h5 class="card-title">{{ column.title }}</h5>
            <p class="card-text text-left">{{ column.description }}</p>
            <router-link :to="`/column/${column.id}`" class="btn btn-outline-primary">进入专栏</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import component from "*.vue";
import { defineComponent, PropType, computed } from "vue";
export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}
export default defineComponent({
  name: "ColumnList",
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true,
    },
  },
  setup(props) {
    const columnList = computed(() => {
      return props.list.map((column) => {
        if (!column.avatar) {
          column.avatar = require("@/assets/logo.png");
        }
        return column;
      });
    });
    return {
      columnList,
    };
  },
});
</script>
<style scoped>
    .card-body img {
        width: 50px;
        height: 50px;
    }
</style>