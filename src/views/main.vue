<template>
  <div class="operator-list">
    <Operator
      v-for="item in operatorList"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :slug="item.slug"
    />
  </div>
</template>

<script>
import Operator from "../components/operator.vue";

export default {
  components: {
    Operator,
  },
  data: () => ({
    operatorList: [
      {
        id: "id1",
        title: "МТС",
        slug: "mts",
      },
      {
        id: "id2",
        title: "Beeline",
        slug: "beeline",
      },
      {
        id: "id3",
        title: "Megafon ",
        slug: "megafon",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.operator-list {
  display: grid;
  gap: 25px;
  padding: 25px;

  @media (min-width: $md) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
