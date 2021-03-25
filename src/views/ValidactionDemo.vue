<template>
  <div class="page">
    <div class="col-12 bg-white py-3 mb-3">
      <div class="title mb-2">範例：{{ pageName }}</div>
      <div class="description">
        這是一個客製化的驗證元件，可以嘗試再輸入框輸入3個以上的文字，會提示你輸入錯誤，必須小於3個字。<br/>
        常用在後端回傳回來要給使用者的訊息。<br/>
        它使用到了vue的slot用法，納入子元素。
      </div>
    </div>
    <div class="col-12 bg-white py-3">
      <div class="title mb-2">
        Demo展示
        <span class="goCode"
          ><a
            target="_blank"
            href="https://github.com/unromanticman/vue-cheatsheet/blob/master/src/views/ValidactionDemo.vue"
            >( 點我前往程式碼 <i class="fas fa-external-link-alt"></i> )</a
          ></span
        >
      </div>
      <div class="text-center mt-3">
        <div class="text-left mt-3">
          <form>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">輸入的值</label>
              <div class="col-sm-10">
                <Validation v-bind:msg="errorMsg">
                  <input class="form-control" type="text" v-model="text" />
                </Validation>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Validation from "@/components/Validation.vue";

export default {
  name: "About",
  components: { Validation },
  data: function () {
    return {
      text: "100",
    };
  },
  computed: {
    errorMsg: function () {
      if (this.text.length > 3) {
        return "必須小於三個字";
      } else {
        return null;
      }
    },
  },
  props: ["pageName"],
};
</script>
