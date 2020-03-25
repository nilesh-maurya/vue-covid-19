<template>
  <div class="wrapper">
    <Loading v-if="loading">Confirmed</Loading>
    <Box v-else :count="report.confirmed.value">Confirmed</Box>
    <Loading v-if="loading">Recovered</Loading>
    <Box v-else :count="report.recovered.value">Recovered</Box>
    <Loading v-if="loading">Deaths</Loading>
    <Box v-else :count="report.deaths.value">Deaths</Box>
    <Loading v-if="loading">Active</Loading>
    <Box v-else :count="active">Active</Box>
  </div>
</template>

<script>
import Box from "./Box.vue";
import Loading from "./Loading.vue";

export default {
  props: {
    report: {
      type: Object
    },
    loading: {
      type: Boolean
    }
  },
  computed: {
    active() {
      return (
        this.report.confirmed.value -
        (this.report.recovered.value + this.report.deaths.value)
      );
    },
    currentComponent() {
      if (this.loading) {
        return "loading";
      }
      return "box";
    }
  },
  components: {
    Box,
    Loading
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.box:nth-child(1) {
  color: orangered;
}
.box:nth-child(2) {
  color: #42b983;
}
.box:nth-child(3) {
  color: red;
}
.box:nth-child(4) {
  color: Orange;
}

@media screen and (max-width: 375px) {
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
