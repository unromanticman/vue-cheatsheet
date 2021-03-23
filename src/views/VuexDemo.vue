<template>
  <div>
    <h1>{{ pageName }}</h1>
    {{ count }}
    <h1>This is a vuex demo ,and the count is from store.</h1>
  </div>
</template>
<script>
export default {
  name: "VuexDemo",
  props: ["pageName"],
  computed: {
    count: function () {
      return this.$store.state.count;
    },
  },
  mounted: function () {
    this.$store.dispatch("increment", 1);
  },
};
</script>
