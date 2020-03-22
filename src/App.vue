<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <!-- <router-link to="/country">Country</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}

::-moz-selection {
  background-color: rebeccapurple;
  color: white;
}

::selection {
  background-color: rebeccapurple;
  color: white;
}

body {
  background-color: #eee;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}

#nav {
  margin-top: 1rem;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
  margin: 1rem;
}
</style>
