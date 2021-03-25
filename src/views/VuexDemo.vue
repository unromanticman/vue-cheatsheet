<template>
  <div class="page">
    <div class="col-12 bg-white py-3 mb-3">
      <div class="title mb-2">範例：{{ pageName }}</div>
      <div class="description">
        這是Vuex使用範例，作為全域變數狀態管理。<br />在此頁面將利用Vuex的state、action、dispatch記錄進到此頁面的<b>次數</b>。
        <br />可嘗試點擊其他連結再點回此頁，可以發現次數會增加。
      </div>
    </div>
    <div class="col-12 bg-white py-3">
      <div class="title mb-2">
        Demo展示
        <span class="goCode"
          ><a
            target="_blank"
            href="https://github.com/unromanticman/vue-cheatsheet/blob/master/src/views/VuexDemo.vue"
            >( 點我前往程式碼 <i class="fas fa-external-link-alt"></i> )</a
          ></span
        >
      </div>
      <div class="text-center">
        <div>
          <h4>目前瀏覽此頁面:{{ count }}次</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "VuexDemo",
  props: ["pageName"],
  computed: {
    count: function () {
      return this.$store.state.count;
    },
  },
  mounted: function () {
    this.$store.dispatch("increment", 1);
  },
};
</script>
