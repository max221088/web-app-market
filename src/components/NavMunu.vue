<template>
    <div class="menu-container">
        <router-link class="menu-link" to="/">Home</router-link>
        <router-link class="menu-link" to="/new">New</router-link>
        <router-link class="menu-link" to="/woman">Woman</router-link>
        <router-link class="menu-link" to="/man">Man</router-link>
        <router-link class="menu-link" to="/footwear">Footwear</router-link>
        <router-link class="menu-link" to="/accessories">Accessories</router-link>
        <router-link class="menu-link" to="/about">About</router-link>
        <router-link class="menu-link" to="/blog">Blog</router-link>
        <router-link class="menu-link" to="/contact">Contact</router-link>
    </div>
</template>

<script>
export default {
  name: 'ProductCard',
  
}
</script>
