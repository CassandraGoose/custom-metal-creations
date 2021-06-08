<template>
  <div class="container margin-top">
    <div v-if="loading">
      <Loading />
    </div>
    <div v-else>
      <figure id="image-max" class="image">
        <img src="../assets/aboutlogo.png" alt="Logo">
      </figure>
      <div id="masonry" class="more-container">
        <div
          class="full-100 slight-margin"
          v-for="item in items" :key="item.title"
          >
          <ListItems :item="item"></ListItems>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import ListItems from './ListItems';
import Loading from './Loading';
const URL = 'https://custom-metal-creations.herokuapp.com/items'

export default {
  name: 'HomePage',
  components: {
    ListItems,
    Loading,
  },
  data() {
    return {
      items: '',
      loading: true,
    };
  },
  mounted() {
    fetch(URL).then(res => {
      return res.json()
    }).then(data => {
      if (data) this.loading = false
      this.items = data;
    })
  },
};
</script>
