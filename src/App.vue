<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <!-- <router-link to="/country">Country</router-link> -->
    </div>
    <router-view />
    <footer>
      <p>
        Data sources from
        <a
          href="https://github.com/mathdroid/covid-19-api"
          target="_blank"
          rel="noopener noreferrer"
          >Muhammad Mustadi's</a
        >
        API
      </p>
    </footer>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,700&display=swap");

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}

:root {
  --primary: #42b983;
}

::-moz-selection {
  background-color: var(--primary);
  color: white;
}

::selection {
  background-color: var(--primary);
  color: white;
}

body {
  background-color: #eee;
}

#app {
  font-family: "Roboto Mono", Avenir, Helvetica, Arial, sans-serif;
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
  color: var(--primary);
  margin: 1rem;
}

footer {
  margin: 30px 0;
}
footer a {
  color: var(--primary);
}
</style>
