<template>
    <div class="search-products">
      <input type="text" placeholder="Search products" v-model="query" @input="sendQuery">
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchProducts',
    data: function () {
        return {
            query: ''
        }
    },
    methods: {
        sendQuery () {
            this.$emit('sentQuery', this.query);
        }
    }
  }
  </script>