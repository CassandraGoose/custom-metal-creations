<template lang="html">
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
        <a href="#">View</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListItems',
  props: ['items'],
};
</script>

<style lang="css">
</style>
