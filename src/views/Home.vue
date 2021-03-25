<template>
  <div class="home page">
    <div class="col-12 bg-white py-3 mb-3">
      <div class="title mb-2">{{ pageName }}</div>
      <div class="description">
        Hi!我是YU HSIANG.<br />這是一份Vue的CheatSheet，以Vue
        CLI建立，主要記錄了常見的元件及操作方式。<br />
        可以點擊上方導航列做直接的範例演示。
        <br />
        <br />
        如果想要直接瀏覽專案程式碼可以點擊：<a
          href="https://github.com/unromanticman/vue-cheatsheet"
          >https://github.com/unromanticman/vue-cheatsheet</a
        >
        <br />
        <br />
        <h5>這份專案包含的內容：</h5>
        <ol>
          <li>多頁面路由vue router配置</li>
          <li>Vuex 狀態管理配置</li>
          <li>IE11 支援配置</li>
          <li>常見生命週期函式</li>
          <li>父元件子元件溝通範例</li>
          <li>API串接範例</li>
          <li>頁面特效</li>
          <li>驗證錯誤用提示元件</li>
          <li>BootstrapVue Table元件使用範例</li>
          <li>SCSS編譯&Bootstrap配置</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  props: ["pageName"],
};
</script>
