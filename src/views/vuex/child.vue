<template>
  <div id=''>{{$store.state.count}} {{fullName}}</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  methods:{
    add(){

    }
  },
  computed:{
    ...mapGetters({fullName:'getFullName'})
  }
}
</script>

<style lang='' scoped>
</style>
