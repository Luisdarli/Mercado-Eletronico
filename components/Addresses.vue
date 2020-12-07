<template>
  <section class="me-address-section">

    <div class="me-address-section-button-wrapper">
      <div class="me-address-section-button" @click="closeAddresses()"><div id="me-address-section-button" class="me-address-section-button-content"></div></div>
      <h5 class="me-address-section-button-title">Addresses</h5>
    </div>

    <div id="me-address-section-wrapper" class="me-address-section-wrapper">
      <div
        class="me-address-section-cards"
        v-for="card in this.getData.addresses"
        :key="card.id"
      >
        <p class="me-address-section-label">{{ card.label }}</p>
        <div class="me-address-section-name-group">
          <h5 class="me-address-section-title">{{ card.name }}</h5>
          <span class="me-address-section-code" v-html="checkValue(card.code)"></span>
        </div>

        <div class="me-address-section-icon-group">
          <font-awesome-icon
            class="me-address-section-icon" 
            :icon="['fas', 'map-marker-alt']"
          />
          <span class="me-address-section-info">{{ card.address }}</span>
        </div>

        <div class="me-address-section-icon-group">
          <font-awesome-icon
            class="me-address-section-icon"
            :icon="['fas', 'user']"
          />
          <span class="me-address-section-info">{{ card.contact.name }}</span>
        </div>

        <div class="me-address-section-icon-group">
          <font-awesome-icon
            class="me-address-section-icon"
            :icon="['fas', 'envelope']"
          />
          <span class="me-address-section-info">{{ card.contact.email }}</span>
        </div>

        <div class="me-address-section-icon-group">
          <font-awesome-icon
            class="me-address-section-icon"
            :icon="['fas', 'phone']"
          />
          <span class="me-address-section-info">
              {{ card.contact.phone }} -
            <span class="me-address-section-info">
                <font-awesome-icon
                    class="me-address-section-icon"
                    :icon="['fas', 'fax']"
                />
                <span class="me-address-section-info">
                    {{card.contact.fax}}
                </span>
            </span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    getData() {
      return this.$store.getters["main/getData"];
    },
  },
  methods:{
      closeAddresses(){
        let button =  document.getElementById('me-address-section-button');
        let cards = document.getElementById('me-address-section-wrapper');

        button.classList.toggle('me-address-section-button-content-close');
        cards.classList.toggle('me-address-section-wrapper-close');
      },
      checkValue(value){
        if (value != null) {
            return `<h5><span style="color:black; margin-left: 8px;"> - </span>(${value})</h5>`;
      }
      }
  }
};
</script>

<style scoped>
.me-address-section {
  margin: 30px auto;
  width: 95%;
}

.me-address-section-button-wrapper{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    margin-bottom: 15px;
}
.me-address-section-button{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background-color: #e1f1f8;
}
.me-address-section-button-content{
    height: 10px;
    width: 10px;
    border: 2px solid #2699d2;
    border-top: none;
    border-left: none;
    transform: rotate(45deg);
    transition: transform 0.3s linear;
    cursor: pointer;
}
.me-address-section-button-content-close{
    transform: rotate(-135deg);
    height: 10px;
    width: 10px;
    border: 2px solid #2699d2;
    border-top: none;
    border-left: none;
    transition: transform 0.3s linear;
    cursor: pointer;
}

.me-address-section-button-title{
    margin-left: 10px;
}
.me-address-section-wrapper{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  opacity: 1;
  transition: opacity .5s linear;
}

.me-address-section-wrapper-close{
    opacity: 0;
    pointer-events: none;
}
.me-address-section-cards {
  box-shadow: 0 0 8px 0.3px rgba(194, 193, 193, 0.5);
  padding: 15px;
  border-radius: 8px;
  width: 450px;
}

.me-address-section-label{
    color: #a0a0a0;
}

.me-address-section-name-group{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
}


.me-address-section-code{
    color: #a0a0a0;
    font-style: italic;
}
.me-address-section-icon-group{
    display: flex;
    align-items: baseline;
}

.me-address-section-icon{
    display: inline-block;
    color: #a0a0a0;
    margin: 15px 15px 0;
}

@media only screen and (max-width: 1600px){
    .me-address-section-wrapper{
        justify-content: center;
    }

    .me-address-section-cards{
        margin: 25px;
    }
}
</style>