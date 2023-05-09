<template>
    <div class="nav-bar">
        <h4>Categories</h4>
        <ul class="categories-list">
            <li v-for="(item, index) in categories" :key="index"
            ><input type="checkbox" :id="'cl' + item.id" 
            @input="filterCategory(item.id)">
            <label :for="'cl' + item.id" class="category-item">{{ item.title }}</label>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'CategoryBar',
  data() {
    return {
      selectedCategory: [],
    }
  },
  methods: {
      filterCategory(category) {
        let elementIndex = this.selectedCategory.indexOf(category);
        if (elementIndex != (-1)) {
          this.selectedCategory.splice(elementIndex, 1)
         } else {
           this.selectedCategory.push(category)
          }
         this.$emit('sentCategory', this.selectedCategory);
      }
    }, 
  computed: {
    categories() {
      return this.$store.getters['getCategories'];
    },
  },
  created() {
    this.$store.dispatch('fetchCategories');
  }
}
</script>