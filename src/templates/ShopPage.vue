<template>
  <Layout>
    <h1>Featured Items</h1>

    <div class="items__description">
      Todays currently featured items for Fall Guys. Updates every few days!
    </div>
    <div class="items__last-updated">Last updated {{ dateFormatted }}</div>

    <div class="items__container">
      <Item v-for="item in $context.items" :key="item.uid" :item="item"></Item>
    </div>
  </Layout>
</template>

<script>
import Item from "../components/Item";

export default {
  components: {
    Item,
  },
  computed: {
    dateFormatted() {
      return new Date(this.$context.updatedDate).toDateString();
    },
  },
  metaInfo: {
    title: "Shop",
  },
};
</script>

<style>
.layout {
}
.items__last-updated {
  font-weight: 600;
}

.items__container {
  display: flex;
  flex-basis: 33.33%;
  flex-wrap: wrap;
}
</style>
