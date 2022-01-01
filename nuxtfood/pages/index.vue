<template>
  <main class="container">
    <AppHeader />
    <AppRestaurantInfo :fliterdata="fooddata" />
  </main>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppRestaurantInfo from "@/components/AppRestaurantInfo.vue";

export default {
  // async asyncData({ store }) {
  //   await store.dispatch("getFoodData");
  // },
  components: {
    AppHeader,
    AppRestaurantInfo,
  },
  computed: {
    fooddata() {
      return this.$store.state.fooddata;
    },
  },
};
</script>
