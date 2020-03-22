<template>
  <div class="wrapper">
    <Box :count="report.confirmed.value">Confirmed</Box>
    <Box :count="report.recovered.value">Recovered</Box>
    <Box :count="report.deaths.value">Deaths</Box>
    <Box :count="active">Active</Box>
  </div>
</template>

<script>
import Box from "./Box";
export default {
  props: {
    report: {
      type: Object
    }
  },
  computed: {
    active() {
      return (
        this.report.confirmed.value -
        (this.report.recovered.value + this.report.deaths.value)
      );
    }
  },
  components: {
    Box
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
