<template>
  <div class="about">
    <h1>{{ pageName }}</h1>
    <h4>A Float Input Custom Component</h4>
    <p>This is an example for Component Props transfer.</p>
    <p>About Parent and Child Component data. Fixed decimal point 2 digits.</p>
    <div>
      $ <FloatInput
        v-bind:value=number
        v-bind:fixed-digit=2
        @update:value="number = $event"
      />
    </div>
    <h3>$ {{ number }}</h3>
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
