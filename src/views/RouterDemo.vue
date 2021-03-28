<template>
  <div class="page">
    <div class="col-12 bg-white py-3 mb-3">
      <div class="title mb-2">範例：{{ pageName }}</div>
      <div class="description">
        這是Vue Router的「巢狀Router」範例。<br />
        點擊「子頁面1」、「子頁面2」會刷新右方區塊，顯示出特定區塊內容。<br />
        可以注意網址的變換，仍在routerDemo路由下，但後綴的網址會因「子頁面1」、「子頁面2」而變換。<br />
        常用在一個版面下需呈現不同路由的內容。
      </div>
    </div>
    <div class="col-12 bg-white py-3">
      <div class="title mb-2">
        Demo展示
        <span class="goCode"
          ><a
            target="_blank"
            href="https://github.com/unromanticman/vue-cheatsheet/blob/master/src/views/RouterDemo.vue"
            >( 點我前往程式碼 <i class="fas fa-external-link-alt"></i> )</a
          ></span
        >
      </div>
      <div class="row">
        <div class="col-3">
          <ul>
            <li>
              <router-link to="/routerDemo/subPage1">子頁面1</router-link>
            </li>
            <li>
              <router-link to="/routerDemo/subPage2">子頁面2</router-link>
            </li>
          </ul>
        </div>
        <div class="col-9"><router-view></router-view></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RouterDemo",
  props: ["pageName"],
};
</script>
