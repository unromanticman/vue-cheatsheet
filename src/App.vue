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
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> |
          <router-link to="/vuexDemo">VuexDemo</router-link> |
          <router-link to="/lifeCycle">LifeCycle</router-link> |
          <router-link to="/componentDemo">ComponentDemo</router-link> |
          <router-link to="/apiDemo">API Demo</router-link> |
          <router-link to="/validactionDemo">ValidactionDemo</router-link> |
          <router-link to="/tableDemo">TableDemo</router-link>
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
