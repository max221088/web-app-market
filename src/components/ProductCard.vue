<template>
    <div class="card">
        <div class="img"><img :src=product.avatar alt="foto not found"></div>
        <h5 class="title-product">{{ product.title }}</h5>
        <p class="price">{{ product.price }}{{ product.unit }}</p>
        <div class="action">
          <router-link class="button-link" :to="'/product/' + product.id">Read more...</router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  
}
</script>