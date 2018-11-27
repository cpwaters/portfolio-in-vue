<template>
  <div id="nav">
    <nav>
      <router-link exact to="/" >Home</router-link> |
      <router-link exact to="/portfolio">Portfolio</router-link> | 
      <router-link exact to="/blogs">Blogs</router-link> |
      <router-link exact to="/work">Work</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  data(){
    return {
     
    }
  },
  components: {
    
  }
}

</script>
<style lang="scss">


</style>