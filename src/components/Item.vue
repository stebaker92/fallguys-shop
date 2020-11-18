<template>
  <div class="item-container">
    <div class="item" :class="'item--' + item.node.rarity.toLowerCase()">
      <div class="item__title">
        <div class="item__rarity">
          {{ item.node.rarity }}
        </div>
        {{ item.node.name }}
      </div>

      <div class="item__body">
        <img :src="item.node.icon.replace('-icon', '')" />
        <div v-if="item.node.currency === 'Crowns'" class="item__price-row">
          <img :src="$context.crownIcon" class="item__price-icon" />
          {{ item.node.price }}
        </div>
        <div v-if="item.node.currency === 'Kudos'" class="item__price-row">
          <img :src="$context.kudosIcon" class="item__price-icon" />
          {{ item.node.price }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Shop",
  },
  props: {
    item: {
      type: Object,
      default: {},
    },
  },
};
</script>


<style>
.item-container {
  border: 5px solid transparent;
  border-radius: 22px;
  margin: 1rem;
}

.item-container:hover {
  border-color: #ffc700;
}

.item {
  position: relative;
  background-color: #45dbf4;
  border: 5px solid #fff;
  border-radius: 15px;
}
@media (max-width: 500px) {
  .item-container {
    width: 100%;
    text-align: center;
  }
}

.item--legendary {
  --bg-rarity: #f1911b;
  --border-rarity: #d27517;
  --bg-title: #de861c;
}
.item--epic {
  --bg-rarity: #b819db;
  --border-rarity: #9512b5;
  --bg-title: #9b14b8;
}
.item--rare {
  --bg-rarity: #42eb6b;
  --border-rarity: #18d95c;
  --bg-title: #1ecf4d;
}
.item__rarity {
  background-color: var(--bg-rarity);
  max-width: 200px;
  position: absolute;
  top: -20px;
  padding: 2px 5px;
  border: 4px solid var(--border-rarity);
  border-radius: 30px;
  text-transform: uppercase;
  font-size: 16px;
  padding: 1px 8px;
}
.item__title {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: var(--bg-title);
  font-family: titan one, Lato, Roboto, Calibri, Arial;
  text-shadow: 2px 3px 1px rgba(0, 0, 0, 0.5);

  border-bottom: 2px solid #fff;
  padding: 0.5rem 4px 0.25rem;
  min-height: 68px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  font-weight: 600;
  font-size: 22px;
}

.item__body {
  padding: 10px;
}

.item__body > img {
  border-radius: 15px;
  width: 175px;
  height: 175px;
  object-fit: contain;
}

.item__price-row img {
  width: 30px;
  height: 30px;
}

.item__price-row {
  margin-top: 0.5rem;
  justify-content: center;
  display: flex;

  color: #fff;
  font-size: 20px;
  z-index: 9;
  font-family: titan one, Lato, Roboto, Calibri, Arial;
  text-shadow: 2px 2px 2px rgb(0 0 0/38%);
  font-weight: 400;
}

.item__price-row .item__price-icon {
  padding-right: 0.5rem;
}
</style>
