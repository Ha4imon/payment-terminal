<template>
  <router-link
    class="opertaor"
    :to="{
      name: 'operator',
      params: { slug: slug },
      query: { id: id },
    }"
    >{{ title }}</router-link
  >
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.opertaor {
  border: 1px solid $greenDark;
  background-color: transparent;
  color: $greenDark;
  font-size: 30px;
  text-align: center;
  text-decoration: none;
  display: block;
  padding: 25px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background: $greenDark;
    color: #fff;
  }
}
</style>
