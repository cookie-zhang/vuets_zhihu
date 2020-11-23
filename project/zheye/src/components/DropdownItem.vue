<!--
 * @Author: your name
 * @Date: 2020-11-18 10:36:41
 * @LastEditTime: 2020-11-18 10:37:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuets_zhihu/project/zheye/src/components/DropdownItem.vue
-->
<template>
    <li
    class="dropdown-option"
    :class="{'is-disabled': disabled}"
  >
    <slot></slot>
  </li>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
})
</script>
<style>
.dropdown-option.is-disabled * {
  color: #6c757d;
  pointer-events: none;
  background-color: transparent;
}
</style>