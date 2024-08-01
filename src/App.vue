<template>
  <header>
    <Navbar />
  </header>

  <RouterView />
  <footer>
    <Footer />
  </footer>
</template>
<script>
import { RouterLink, RouterView } from "vue-router";

import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style></style>
