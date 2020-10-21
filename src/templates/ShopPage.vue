<template>
  <Layout>
    <h1>Featured Items</h1>

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
  metaInfo: {
    title: "Shop",
  },
};
</script>

<style>
.layout {
}

.items__container {
  display: flex;
  flex-basis: 33.33%;
  flex-wrap: wrap;
}
</style>
