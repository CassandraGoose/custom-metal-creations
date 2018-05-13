<template>
  <div class="container margin-top">
    <figure id="image-max" class="image margin-top">
      <img src="../assets/aboutlogo.png" alt="Logo">
    </figure>
      <div class="columns is-multiline">
        <div class="column is-4" v-for="item in items">
          <ListItems :item="item"></ListItems>
        </div>
      </div>
  </div>
</template>

<script>
import ListItems from './ListItems';

export default {
  name: 'HomePage',
  components: {
    ListItems,
  },
  data() {
    return {
      items: [
        'item1',
        'item2',
        'item3',
        'item4',
        'item5',
        'item6',
        'item7',
        'item8',
        'item9',
      ],
    };
  },
};
</script>
