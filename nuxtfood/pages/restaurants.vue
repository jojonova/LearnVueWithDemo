<template>
  <main class="container restaurant">
    <div class="restaurantheading">
      <h1>Restaurants</h1>
      <p>Choose a cuisine:</p>
      <select v-model="choosed">
        <option value="">--Please choose--</option>
        <option v-for="item in fliterlist" :key="item">
          {{ item }}
        </option>
      </select>
    </div>
    <AppRestaurantInfo :fliterdata="fliterdata" />
  </main>
</template>

<script>
import AppRestaurantinfo from "@/components/AppRestaurantInfo.vue";
import { mapState } from "vuex";
export default {
  components: {
    AppRestaurantinfo,
  },
  computed: {
    ...mapState(["fooddata"]),
    fliterdata() {
      if (this.choosed) {
        return this.fooddata.filter((el) => {
          let name = el.name.toLowerCase();
          return name.includes(this.choosed);
        });
      }
      return this.fooddata;
    },
  },
  data() {
    return {
      fliterlist: ["pizza", "tacos", "dim sum"],
      choosed: "",
    };
  },
};
</script>

<style lang="scss" scoped></style>
