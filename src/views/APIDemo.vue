<template>
  <div class="page">
    <div class="col-12 bg-white py-3 mb-3">
      <div class="title mb-2">範例：{{ pageName }}</div>
      <div class="description">
        這是一個呼叫API的範例，在頁面載入created時呼叫 https://randomuser.me/api/
        產生隨機的亂數用戶。<br />
        使用fetch呼叫後再設定到資料上。<br />
        也可以點擊重新撈取。
      </div>
    </div>
    <div class="col-12 bg-white py-3">
      <div class="title mb-2">
        Demo展示
        <span class="goCode"
          ><a
            target="_blank"
            href="https://github.com/unromanticman/vue-cheatsheet/blob/master/src/views/APIDemo.vue"
            >( 點我前往程式碼 <i class="fas fa-external-link-alt"></i> )</a
          ></span
        >
      </div>
      <div class="text-center mt-3">
        <h4>Result</h4>
        <div v-if="randomUser">
          Name:{{ randomUser.name.title }} {{ randomUser.name.first }}
          {{ randomUser.name.last }}
          <br />
          gender:{{ randomUser.gender }}
        </div>
        <button v-on:click="fetchUser" class="btn-sm btn btn-primary my-3">
          <i class="fas fa-sync-alt mr-1"></i>重新抓取
        </button>
      </div>
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
    this.fetchUser();
  },
  methods: {
    fetchUser: function () {
      fetch("https://randomuser.me/api/")
        .then((res) => res.json())
        .then((res) => {
          if (res.results.length > 0) {
            this.randomUser = res.results[0];
          }
        });
    },
  },
  mounted: function () {
    // dom 初始完成如果要操作dom可以在這裡
  },
};
</script>
