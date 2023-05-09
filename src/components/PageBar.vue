<template>
    <div class="page-wrapper">
        <button id="page-btn" v-for="(item, index) in allPageNumber" :key="index" 
        @click="pageNumber = index, selectedPage()">{{ index + 1 }}</button>
    </div>
</template>

<script>
export default {
  name: 'PageBar',
  props: ['allPageNumber'],
  data: function () {
    return {
        pageNumber: 0,
    }
  },
  methods: {
    selectedPage: function () {
         document.querySelectorAll('#page-btn').forEach(el => el.classList.remove('active'));
        event.target.classList.add('active');
        this.$emit('sentPage' , this.pageNumber);
    }
  }
}

</script>