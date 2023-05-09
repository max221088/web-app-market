<template>
  <div id="app">
    <header>
      <div class="nav-menu">
        <div class="header-wrapper">
          <NavMenu/>
        <SearchProducts @sentQuery="getQuery"/>
        </div>
      </div>
    </header>
    <div class="wrapper">
      <aside>
        <CategoryBar @sentCategory="getSelectedCategory"/>
      </aside>
      <main >
        <PageBar :allPageNumber="filteredProducts" @sentPage="getCurrentPage"/>
        <div class="cards-container">
          <ProductCard v-for="items in filteredProducts[curentPage]" :key="items.id" :product="items"></ProductCard>
        </div>
      </main>
    </div>
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/> -->
  </div>
</template>

<script>
import CategoryBar from './components/CategoryBar.vue'
import ProductCard from './components/ProductCard.vue'
import SearchProducts from './components/SearchProducts.vue'
import NavMenu from './components/NavMunu.vue'
import PageBar from './components/PageBar.vue'

export default {
  name: 'App',
  components: {
    CategoryBar,
    ProductCard,
    SearchProducts,
    NavMenu,
    PageBar
  },
  data: function () {
    return {
      selectedCategory: [],
      query: '',
      productsOnPage: 2,
      curentPage: 0,
    }
  },
  methods: {
    getSelectedCategory: function (data) {
      this.selectedCategory = data;
    },
    getQuery: function (data) {
      this.query = data;
    },
    getCurrentPage: function (data) {
      this.curentPage = data;
    }
  },
  computed: {
    products() {
      return this.$store.getters['getProducts'];
    },
    filteredProducts() {
      let products = [];
      let paginatedProducts = [[]];
      let index = 0;
      products = (this.selectedCategory.length || this.query)
      ? this.products.filter(product => {
        return ((this.selectedCategory.length) ? ~this.selectedCategory.indexOf(product.category.toString()) : true)
         && ~product.title.toLowerCase().indexOf(this.query.toLowerCase());
      })
      : this.products
      for (let i = 0; i < products.length; i++) {
        if (i % this.productsOnPage == 0 && i != 0) {
          index ++;
          paginatedProducts[index] = []
        }
        paginatedProducts[index].push(products[i]);
      }
      return paginatedProducts;
    }
  },
  created() {
    this.$store.dispatch('fetchProducts');
    
  },
}

</script>

<style lang="less">
@import url(./assets/less/style.less);

</style>
