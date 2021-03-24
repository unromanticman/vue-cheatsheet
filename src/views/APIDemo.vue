<template>
  <div>
    <h1>{{ pageName }}</h1>
    <h4>This is a simple call API example.</h4>
    <h4>Call API Example: https://randomuser.me/api/</h4>
    <h4>Result</h4>
    <div v-if="randomUser">
      Name:{{ randomUser.name.title }} {{ randomUser.name.first }}
      {{ randomUser.name.last }}
      <br />
      gender:{{ randomUser.gender }}
    </div>
  </div>
</template>
<script>
export default {
  name: "APIDemo",
  props: ["pageName"],
  data: function () {
    return {
      randomUser: null,
    };
  },
  created: function () {
    // 此時以可以處理data中資料
    // 用於頁面載入時使用
    // 呼叫API
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((res) => {
        if (res.results.length > 0) {
          this.randomUser = res.results[0];
        }
      });
  },
  mounted: function () {
    // dom 初始完成如果要操作dom可以在這裡

  }
};
</script>
