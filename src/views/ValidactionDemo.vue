<template>
  <div class="validactionDemo">
    <h1>{{ pageName }}</h1>
    <h4>A Custom validactionDemo Component.</h4>
    <p>If you enter more than 3 words, it will prompt an error.</p>

    <Validation v-bind:msg="errorMsg">
      <input type="text" v-model="text" />
    </Validation>
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
  computed:{
    errorMsg:function(){
      if(this.text.length > 3 ){
        return 'Please be less than 3 digits.'
      }else{
        return null
      }
    }
  },
  props: ["pageName"],
};
</script>
