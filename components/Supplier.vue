<template>
  <section class="me-main-section">
    <p class="me-main-section-information">Supplier</p>

    <div class="me-main-section-title-group">
      <h5 class="me-main-section-title">{{ this.getData.supplier.name }}</h5>
      <span class="me-main-section-code"
        >Code #{{ this.getData.supplier.code }}</span
      >
    </div>

    <div class="me-main-section-wrapper">

        <div class="me-main-section-tile">
        <p class="me-main-section-document">
            {{ this.getData.supplier.document.value }}
        </p>
        <p class="me-main-section-document">
            {{ this.getData.supplier.address }}
        </p>
        </div>

        <div class="me-main-section-tile">
        <div class="me-main-section-icon-group">
            <font-awesome-icon
            class="me-main-section-icon"
            :icon="['fas', 'user']" />
            <span class="me-main-section-supplier"
            >{{ this.getData.supplier.contact.name }} -
            <span class="me-main-section-supplier-email">
                {{ this.getData.supplier.contact.email }}</span></span>
        </div>

        <div class="me-main-section-icon-group">
            <font-awesome-icon
            class="me-main-section-icon"
            :icon="['fas', 'phone']" />
            <span class="me-main-section-supplier">{{this.getData.supplier.contact.phone}} -
                <span>
                    <font-awesome-icon
                    class="me-main-section-icon"
                    :icon="['fas', 'fax']" />
                    {{this.getData.supplier.contact.fax}}
                </span>
            </span>
        </div>

        </div>

        <div class="me-main-section-tile">
            <div class="me-main-section-icon-group">
                <font-awesome-icon
                class="me-main-section-icon"
                :icon="['fas', 'eye']" />
                <span class="me-main-section-supplier">Read: {{this.getDataHourRead}}</span>
            </div>

            <div class="me-main-section-icon-group">
                <font-awesome-icon
                class="me-main-section-icon"
                :icon="['fas', 'reply']" />
                <span class="me-main-section-supplier">Last Reply: {{this.getDataHourReply}}</span>
            </div>
        </div>

    </div>
  </section>
</template>

<script>
import getData from '../utils/utils.js'
export default {
  computed: {
    getData() {
      return this.$store.getters["main/getData"];
    },
    getDataHourRead(){
        return getData.formatedDateHour(this.getData.supplier.readAt);
    },
    getDataHourReply(){
        return getData.formatedDateHour(this.getData.supplier.lastReplyAt);
    }
  },
};
</script>

<style scoped>
.me-main-section {
  margin: 50px auto;
  width: 95%;
  box-shadow: 0 0 8px .3px rgba(194, 193, 193, 0.5);
  border-radius: 8px;
  padding: 15px;
}
.me-main-section-information{
    color: #a0a0a0;
    font-weight: 400;
}

.me-main-section-title-group{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
}
.me-main-section-title{
    color: #0b8dcd;
    margin: 0;
}
.me-main-section-code{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    margin: 0;
    color: #8a8a8a;
    background-color: #e1f1f8;
    border-radius: 15px;
    margin-left: 10px;
    font-weight: 500;
}

.me-main-section-wrapper{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}

.me-main-section-tile{
    margin-top: 15px;
}

.me-main-section-document{
    margin: 0;
    padding-bottom: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 500px;
}
.me-main-section-icon-group{
    padding-bottom: 8px;
}
.me-main-section-icon{
    margin-left: 5px;
    margin-right: 5px;
    color: #b3b3b3;
}

.me-main-section-supplier{

}
</style>