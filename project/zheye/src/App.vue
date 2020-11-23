<!--
 * @Author: your name
 * @Date: 2020-11-10 17:26:35
 * @LastEditTime: 2020-11-23 11:00:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuets_zhihu/project/zheye/src/App.vue
-->
<template>
  <div class="contanier">
    <GlobalHeader :user="currentUser"></GlobalHeader>
    <ColumList :list="list" v-if="false"></ColumList>
    <form>
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <validate-input :rules="emailRules" v-model="emailVal"></validate-input>
        {{emailVal}}
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.min.css";
import { defineComponent, reactive, ref } from "vue";
import ColumList, { ColumnProps } from "./components/ClolumnList.vue";
import ValidateInput, {RulesProp} from './components/validateInput.vue';
import GlobalHeader, { UserProps } from "./components/GlobalHeader.vue";
const currentUser: UserProps = {
  isLogin: true,
  name: "dog",
};
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
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
export default defineComponent({
  name: "App",
  components: {
    ColumList,
    GlobalHeader,
    ValidateInput
  },
  setup() {
    const emailVal = ref('viking')
    const emailRef = reactive({
      val: "",
      error: false,
      message: "",
    });
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱地址不能为空' },
      { type: 'email', message: '请输入正确的电子邮箱格式' }
    ]
    const validateEmail = () => {
        if(emailRef.val.trim() === ''){
            emailRef.error = true
            emailRef.message = 'can not empty'
        } else if(!emailReg.test(emailRef.val)){
            emailRef.error = true
            emailRef.message = 'should be valid email'
        }
    };
    return {
      list: testData,
      currentUser,
      emailRef,
      validateEmail,
      emailRules,
      emailVal
    };
  },
});
</script>