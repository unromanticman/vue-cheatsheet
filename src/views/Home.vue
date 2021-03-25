<template>
  <div class="home page">
    <div class="col-12 bg-white py-3 mb-3">
      <div class="title mb-2">{{ pageName }}</div>
      <div class="description">描述...</div>
    </div>
    <div class="col-12 bg-white py-3">
      <div class="title mb-2">
        Demo展示 <span class="goCode"><a href="#">( 點我前往程式碼 <i class="fas fa-external-link-alt"></i> )</a></span>
      </div>
      <div class="text-center">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  props: ["pageName"],
};
</script>
