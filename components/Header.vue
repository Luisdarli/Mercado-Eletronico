<template>
  <header>
    <div class="me-header-purchase">
      <div class="me-header-purchase-data">
        <h3 class="me-header-purchase-title">Purchase Order</h3>
        <h2 class="me-header-purchase-title-data">
          {{ this.getData.header.number }}
        </h2>
        <h5 class="me-header-purchase-subtitle">
          SerialME {{ this.getData.header.serial }}
        </h5>
      </div>

      <span class="me-header-purchase-image">
        <img src="../assets/logo.png" />
      </span>
    </div>

    <div class="me-header-buyer">
      <h1 class="me-header-buyer-title">{{ this.getData.header.buyer }}</h1>

      <div class="me-header-buyer-icon-group">
        <span class="me-header-buyer-icon-group-wrapper">
            <font-awesome-icon
            class="me-header-buyer-icon"
            :icon="['fas', 'users']"
            />
            <span class="me-header-buyer-icon-group-user">
                {{this.getData.header.contact.name}}
            </span>
            
            <font-awesome-icon
            class="me-header-buyer-icon"
            style="color: #65b7df"
            :icon="['fas', 'exclamation-circle']"
            />
        </span>
      </div>

      <div class="me-header-buyer-icon-group">
        <span class="me-header-buyer-icon-group-wrapper">
            <font-awesome-icon
            class="me-header-buyer-icon"
            :icon="['fas', 'envelope']"
            />
            <span class="me-header-buyer-icon-group-user">
                {{this.getData.header.contact.email}}
            </span>
        </span>

        <span class="me-header-buyer-icon-group-wrapper">
            <font-awesome-icon
            class="me-header-buyer-icon phone"
            :icon="['fas', 'phone']"
            />
            <span class="me-header-buyer-icon-group-user">
                {{this.getData.header.contact.phone}}
            </span>
        </span>

        <span class="me-header-buyer-icon-group-wrapper">
            <font-awesome-icon
            class="me-header-buyer-icon phone"
            :icon="['fas', 'fax']"
            />
            <span class="me-header-buyer-icon-group-user fax">
                {{this.getData.header.contact.fax}}
            </span>
        </span>
      </div>
    </div>

    <div class="me-header-currency">
      <h1 class="me-header-currency-title">
        {{ this.getData.header.currency }} {{ this.formatedNumber }}
      </h1>
      <h5 class="me-header-currency-status">
        {{ this.getData.header.status }}
      </h5>
      <p class="me-header-currency-createdat">Created on {{ this.getDate }}</p>
    </div>
  </header>
</template>

<script>
import getData from '../utils/utils.js'
export default {
  data() {
    return {

    };
  },

  computed: {
    getData() {
      return this.$store.getters["main/getData"];
    },
    formatedNumber() {
      return this.getData.header.price.toLocaleString(undefined, {
        minimumFractionDigits: 2,
      });
    },
    getDate(){
        return getData.formatedDate(this.getData.header.createdAt);
    }

  },

  methods: {

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
.me-header-purchase-title {
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

.me-header-buyer {
  margin-left: 60px;
}
.me-header-buyer-title {
  font-weight: 500;
}

.me-header-buyer-icon-group {
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
}

.me-header-buyer-icon-group-wrapper{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
}

.me-header-buyer-icon {
  width: 25px;
  margin-right: 8px;
  font-size: 18px;
  color: #1f5383;
}
.phone {
  margin-left: 12px;
}

.me-header-buyer-icon-group-user {
  color: black;
}
.me-header-currency{
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    margin-left: auto;
    padding-right: 20px;
}

.me-header-currency-title {
    font-weight: 500;
}
.me-header-currency-status {
    font-size: 22px;
  color: #f5a623;
}

.me-header-currency-createdat {
    font-weight: 400;
}

@media only screen and (max-width: 1320px) {

    .me-header-currency{
        padding: 25px;
        margin-top: 25px;
        margin-left: unset;
        align-items: flex-start;
    }

}

@media only screen and (max-width: 994px) {
    header{
        flex-direction: column;
    }
    .me-header-buyer{
        margin-left: unset;
        padding: 25px;
        margin-top: 25px;
    }
}

@media only screen and (max-width: 500px){
    .phone{
        margin-left: unset;
    }
}

@media only screen and (max-width: 385px) {
    .me-header-purchase{
        width: 250px;
    }
    .me-header-purchase-image{
        margin-left: 190px;
    }
}
</style>