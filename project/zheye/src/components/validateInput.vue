<!--
 * @Author: your name
 * @Date: 2020-11-19 15:27:25
 * @LastEditTime: 2020-11-23 13:15:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuets_zhihu/project/zheye/src/components/validateInput.vue
-->
<template>
  <div class="validate-input-contanier pb-3">
    <input
      type="text"
      class="form-control"
      :class="{'is-invalid': inputRef.error}"
      :value="inputRef.val"
      @blur="validateInput"
      @input="updateValue"
    />
    <span v-if="inputRef.error" class="invalid-feedback">
    {{inputRef.message}}
    </span>
  </div>
</template>
<script lang='ts'>
import { defineComponent, PropType, reactive } from "vue";
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
interface RuleProp {
  type: "required" | "email";
  message: string;
}
// PropType  vue对定义type的prop执行运行时验证。要将这些类型提供给ts，我们需要用PropType强制转换构造函数
export type RulesProp = RuleProp[];
export default defineComponent({
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String
  },
  setup(props,context) {
    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      message: "",
    });
    const updateValue = (e: KeyboardEvent)=>{
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.val = targetValue
      context.emit('update:modeValue', targetValue)
    }
    const validateInput = () => {
        if(props.rules){
            const allPassed = props.rules.every(rule => {
                let passed = true
                inputRef.message = rule.message
                switch(rule.type){
                    case 'required':
                    passed = (inputRef.val.trim() !== '')
                    break;
                    case 'email': 
                    passed = emailReg.test(inputRef.val)
                    default:
                    break;
                }
                return passed
            })
            inputRef.error = !allPassed;
        }
    };
    return {
      inputRef,
      validateInput,
      updateValue
    };
  }
});
</script>