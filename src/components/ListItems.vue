<template lang="html">
  <div>
    <b-loading :is-full-page="isFullPage" :active.sync="isLoading"></b-loading>
  <div  class="card">
    <div class="card-image">
      <figure class="image">
        <img @load="loading" :src="makeJPG" alt="item.title" @click="showModal = true">
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
      isFullPage: false,
      isLoading: true,
    }
  },
  methods: {
    loading() {
      this.isLoading = !this.isLoading;
    },
  },
  computed: {
    makeJPG() {
      return `${this.item.img_url}.jpg`
    }
  },
};
</script>

<style lang="css">
</style>
