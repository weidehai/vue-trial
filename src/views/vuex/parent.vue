<template>
  <div id="">
    {{ $store.state.count }} <input type="button" value="add" @click="add" />
    {{$store.getters.getFullName}}
    {{$store.getters.getFullName}}
    {{$store.getters.getFullName}}
    {{$store.getters.getFullName}}
    {{$store.getters.getFullName}}
  </div>
</template>

<script>
export default {
  methods: {
    add() {
      this.$store.commit("add");
    }
  }
};
</script>

<style lang="" scoped></style>
