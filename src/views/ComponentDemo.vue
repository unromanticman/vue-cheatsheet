<template>
  <div class="page">
    <div class="col-12 bg-white py-3 mb-3">
      <div class="title mb-2">範例：{{ pageName }}</div>
      <div class="description">
        這是一個Custom
        Component範例，客製化一個可重複使用的<b>「浮點數輸入框(FloatInput)」</b>。<br />
        在這Component中輸入的值會被轉存為有2位小數的浮點數。<br />
        此外，在這個範例中也能得知父層、子層的資料傳遞方式。<br />
      </div>
    </div>
    <div class="col-12 bg-white py-3">
      <div class="title mb-2">
        Demo展示
        <span class="goCode"
          ><a
            target="_blank"
            href="https://github.com/unromanticman/vue-cheatsheet/blob/master/src/views/ComponentDemo.vue"
            >( 點我前往程式碼 <i class="fas fa-external-link-alt"></i> )</a
          ></span
        >
      </div>
      <div class="text-left mt-3">
        <form>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">輸入的值</label>
            <div class="col-sm-10">
              <FloatInput
                v-bind:value="number"
                v-bind:fixed-digit="2"
                @update:value="number = $event"
              />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 ">轉存後的值</label>
            <div class="col-sm-10">{{ number }}</div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import FloatInput from "@/components/FloatInput.vue";

export default {
  name: "About",
  components: { FloatInput },
  data: function () {
    return {
      number: 50,
    };
  },
  props: ["pageName"],
};
</script>
