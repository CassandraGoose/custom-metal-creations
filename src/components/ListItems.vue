<template lang="html">
  <div>
  <div  class="card">
    <div class="card-image">
      <figure class="image">
        <img src="../assets/cham.jpg" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        description here
        <br />
        <a @click="showModal = true">View</a>
      </div>
    </div>
  </div>
  <div class="modal" :class="{'is-active': showModal}">
    <div class="modal-background"></div>
    <div class="modal-content">
      <p class="image">
        <img src="image" alt="image">
      </p>
    </div>
    <button class="is-large modal-close" aria-label="close"  @click="showModal = false"></button>
  </div>
</div>
</template>

<script>
export default {
  name: 'ListItems',
  props: ['items'],
  data() {
    return {
      showModal: false,
    }
  },
};
</script>

<style lang="css">
</style>
