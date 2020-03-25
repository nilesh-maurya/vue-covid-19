<template>
  <div class="box">
    <h2 class="count">{{ numberWithCommas(count) }}</h2>
    <p class="box__text">
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: [Number, String]
    }
  },
  methods: {
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
};
</script>

<style scoped>
.box {
  min-width: 10rem;
  background-color: #fefefe;
  margin: 1rem;
  padding: 1rem 0;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.box__text {
  font-weight: 700;
  padding: 0.5rem;
  color: #271b52;
}
</style>
