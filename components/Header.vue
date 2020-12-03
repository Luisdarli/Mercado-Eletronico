<template>
  <header>
    <div class="me-header-purchase">
      <div class="me-header-purchase-data">
        <h3 class="me-header-purchase-title">Purchase Order</h3>
        <h2 class="me-header-purchase-title-data">{{this.getData.header.number}}</h2>
        <h5 class="me-header-purchase-subtitle">SerialME {{ this.getData.header.serial }}</h5>
      </div>

      <span class="me-header-purchase-image">
        <img src="../assets/logo.png" />
      </span>
    </div>

    <div class="me-header-buyer">
        <h1 class="me-header-buyer-title">{{this.getData.header.buyer }}</h1>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  computed: {
      getData(){
        return this.$store.getters['main/getData'] 
      }
  },
};
</script>

<style scoped>
header {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.me-header-purchase {
  background-color: #0a8ccc;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 290px;
  padding: 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.me-header-purchase-data {
  color: #ffffff;
}
.me-header-purchase-title{
    font-weight: 400;
}

.me-header-purchase-title-data {
    font-weight: 700;
}

.me-header-purchase-subtitle {
    font-style: italic;
}

.me-header-purchase-image {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  position: absolute;
  margin-top: 18px;
  margin-left: 230px;
  background-color: #ffffff;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  border: 2px solid black;
}
.me-header-purchase-image img {
  width: 50px;
  height: auto;
}
</style>