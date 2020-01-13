<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    if (process.env.NODE_ENV !== "production") {
      window.$app = this;
    }
  }
};
</script>
