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
  width: 12rem;
  background-color: #fefefe;
  margin-bottom: 1rem;
  padding: 1rem 0;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.box__text {
  font-weight: 600;
  padding: 0.5rem;
  color: #271b52;
}

@media screen and (max-width: 375px) {
}
</style>
