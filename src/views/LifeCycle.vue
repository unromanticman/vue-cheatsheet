<template>
  <div>
    <h1>{{ pageName }}</h1>
    {{ number }}
    <h1>When page onload,calling mounted function to change data.</h1>
    <h1>You can see 10.</h1>
  </div>
</template>
<script>
export default {
  name: "LifeCycle",
  props: ["pageName"],
  mounted: function () {// 用於頁面載入時使用
    this.number = 10;
  },
  data: function () {
    return {
      number: 0,
    };
  },
};
</script>
