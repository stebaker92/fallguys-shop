<template>
  <div>
    <header class="header">
      <div>Fall Guys Item Shop</div>
      <!-- <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong> -->
      <!-- <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav> -->
    </header>
    <div class="layout">
      <slot />
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  background: #55a9f5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-bottom: 20px; */
  height: 50px;
  background-color: black;
  color: white;
  text-align: center;
  justify-content: center;
}

.nav__link {
  margin-left: 20px;
}

h1 {
  margin-top: 0;
  padding-top: 0.5rem;
  text-transform: uppercase;
  font-family: Roboto, sans-serif;
  color: white;
  border-bottom: 1px solid white;
  margin-right: 2rem;
}
</style>
