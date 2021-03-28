<template>
  <div id="app">
    <div class="bg-watermark"></div>
    <div class="container">
      <div class="col-12 bg-white mb-3 p-3 header">
        <div class="title mb-3 text-center">VUE CHEATSHEET</div>
        <div class="text-center">
          在這裡紀錄了以應用為主的Vue功能，協助寫程式上方便參考<br />
          畢竟你知道的，能夠直覺得明白是最好的。
        </div>
      </div>

      <div class="col-12 bg-white p-3 mb-3">
        <div id="nav" class="text-left">
          <router-link to="/">首頁</router-link> |
          <router-link to="/vuexDemo">Vuex Demo</router-link> |
          <router-link to="/lifeCycle">LifeCycle Demo</router-link> |
          <router-link to="/componentDemo">Component Demo</router-link> |
          <router-link to="/apiDemo">API Demo</router-link> |
          <router-link to="/validactionDemo">Validaction Demo</router-link> |
          <router-link to="/tableDemo">Table Demo</router-link> |
          <router-link
            to="/routerDemo/subPage1"
            :class="{ 'router-link-exact-active ': subIsActive('/routerDemo') }"
            >Router Demo</router-link
          >
        </div>
      </div>
      <vue-page-transition name="fade-in-up">
        <router-view />
      </vue-page-transition>
      <footer class="col-12 p-3">
        <div class="text-center">
          Copyright © 2021 unromanticman. All rights reserved.
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    $route: {
      handler: function (to) {
        console.log(to.path);
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    // nested active solution:https://forum.vuejs.org/t/router-active-class-on-submenu-parent/7027
    subIsActive(input) {
      const paths = Array.isArray(input) ? input : [input];
      return paths.some((path) => {
        return this.$route.path.indexOf(path) === 0; // current path starts with this path string
      });
    },
  },
};
</script>
