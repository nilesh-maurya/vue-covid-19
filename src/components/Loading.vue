<template>
  <div class="box">
    <h2 class="count"></h2>
    <p class="box__text">
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {};
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

h2 {
  margin: 0 40px;
  height: 25px;
  border-radius: 6px;
  background-color: #d6dfdf;
  text-align: center;
  position: relative;
  overflow: hidden;
}

h2::after {
  content: "";
  background: linear-gradient(to right, #d7d7d3, #f7f1f1);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transform: translateX(-100%);
  animation: shimmer ease 0.5s forwards infinite;
}

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}

.box__text {
  font-weight: 700;
  padding: 0.5rem;
  color: #271b52;
}
</style>
