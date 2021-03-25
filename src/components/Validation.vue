<template>
  <span v-bind:class="{ 'validation-error': msg }">
    <slot />
    <div v-if="msg" class="validation-text">
      {{ msg }}
    </div>
  </span>
</template>

<script>
/**
 * 元件名稱：驗證錯誤元件
 * 描述：在輸入框下可以快速顯示錯誤訊息、變更錯誤樣式
 */
export default {
  name: "Validation",
  props: {
    msg: [Number, String],
  },
};
</script>

<style>
.validation-error > .validation-text {
  color: red !important;
  margin-top: 5px;
}
.validation-error > input {
  border: 1px solid red !important;
}
.validation-error > input:focus,
textarea:focus {
  outline: none !important;
}
</style>
