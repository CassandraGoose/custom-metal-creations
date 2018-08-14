<template>
  <div class="container margin-top">
    <figure id="image-max" class="image">
      <img src="../assets/aboutlogo.png" alt="Logo">
    </figure>
      <div id="masonry" class="more-container">
        <div
          class="full-100 slight-margin"
          v-for="item in items"
          >
          <ListItems :item="item"></ListItems>
        </div>
      </div>
  </div>
</template>

<script>
/* eslint-disable */
import ListItems from './ListItems';
const URL = 'https://custom-metal-creations.herokuapp.com/items'

export default {
  name: 'HomePage',
  components: {
    ListItems,
  },
  data() {
    return {
      items: '',
    };
  },
  mounted() {
    console.log('whooooot');
    fetch(URL).then(res => {
      return res.json()
    }).then(data => {
      this.items = data;
    })
  },
};
</script>
