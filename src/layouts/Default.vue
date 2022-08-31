<template>
  <div>
    <header class="header">
      <g-image src="~/logo.webp" alt="logo" />
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
  height: 50px;
  background-color: black;
  color: white;
  text-align: center;
  justify-content: center;
}

.header img {
  height: 25px;
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
