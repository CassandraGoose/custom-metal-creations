<template lang="html">
  <div>
  <div  class="card">
    <div class="card-image">
      <figure class="image">
        <img :src="makeJPG" alt="item.title" @click="showModal = true">
      </figure>
    </div>
    <div class="card-content">
      {{this.item.title}}
      <div class="content">
        {{this.item.description}}
      </div>
    </div>
  </div>
  <div class="modal" :class="{'is-active': showModal}">
    <div class="modal-background"></div>
    <div class="modal-content">
      <p class="image">
        <img :src="makeJPG" alt="image unavailable">
      </p>
    </div>
    <button class="is-large modal-close" aria-label="close"  @click="showModal = false"></button>
  </div>
</div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'ListItems',
  props: ['item'],
  data() {
    return {
      showModal: false,
    }
  },
  computed: {
    makeJPG() {
      return `${this.item.img_url}.jpg`
    }
  }
};
</script>

<style lang="css">
</style>
