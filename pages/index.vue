<template>
  <div id="me-app">
    <div class="me-app-wrapper">

      <!-- BOOTSTRAP SPINNER REGISTER ON PLUGINS AND NUXT.CONFIG -->
      <!-- WHILE API IS NOT READY -->
      <div class="me-app-spinner d-flex justify-content-center" v-if="this.getReady === false"> 
        <b-button variant="light">
          <b-spinner style="width: 5rem; height: 5rem;" label="Large Spinner"></b-spinner>
          <span class="sr-only">Loading...</span>
        </b-button>
      </div>

      <!-- ALL COMPONENTS  -->
      <div v-else class="me-app-components">
        <main-header />
        <main-section />
        <main-addresses />
      </div>

    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import MainSection from "../components/Supplier"
import Address from "../components/Addresses"
import { BSpinner } from "bootstrap-vue";
export default {
  components: {
    "main-header": Header,
    "main-section": MainSection,
    "main-addresses": Address,
    "b-spinner": BSpinner,
  },
  computed: {
    getReady() {
      return this.$store.getters["main/getDataReady"];
    },
    getData() {
      return this.$store.getters["main/getData"];
    },
  },
  methods: {},
  mounted() {
    this.$store.dispatch("main/fetchData");
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap");

#me-app {
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: "Open Sans", sans-serif;
  background-color: grey;
}
.me-app-spinner{
  height: 100%;
  width: 100%;
  margin: auto;
}
.me-app-wrapper {
  width: 90%;
  height: auto;
  border-radius: 20px;
  background-color: #ffffff;
  margin: 0 auto;
}
</style>


<style>
/* NO SCOPED STYLE FOR BOOTSTRAP */
.btn-light{
  background-color: #fff;
  border-color: #fff;
}

</style>
