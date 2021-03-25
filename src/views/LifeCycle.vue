<template>
  <div class="page">
    <div class="col-12 bg-white py-3 mb-3">
      <div class="title mb-2">範例：{{ pageName }}</div>
      <div class="description">
        在這個範例裡使用vue的生命週期(lifecycle)函式created，當作第一次資料的初始。<br />
        原本count在data裡面的值是0，但因為頁面載入呼叫created後被初始為10。<br />
      </div>
    </div>
    <div class="col-12 bg-white py-3">
      <div class="title mb-2">
        Demo展示
        <span class="goCode"
          ><a
            target="_blank"
            href="https://github.com/unromanticman/vue-cheatsheet/blob/master/src/views/LifeCycle.vue"
            >( 點我前往程式碼 <i class="fas fa-external-link-alt"></i> )</a
          ></span
        >
      </div>
      <div class="text-center">
        <div>
          <h4>count:{{ number }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LifeCycle",
  props: ["pageName"],
  created: function () {
    // 用於頁面載入時使用
    this.number = 10;
  },
  data: function () {
    return {
      number: 0,
    };
  },
};
</script>
