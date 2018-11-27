<template>
  <header>
    <div class="top-row">
      <p>{{ created }}</p>
        <a :href="vue"><img alt="Vue logo" src="@/assets/logo.png"></a>    
    </div>
    <div class="wrapper">
      <h1>{{ myName }}</h1> 
      <h2>{{ job }}</h2>
    </div>
    <Nav />
  </header>
</template>

<script>
import Nav from '@/components/Nav.vue' 

export default {
  data(){
    return {
      created: 'Created with VueJS',
      myName : 'Chris Waters',
      job : 'Web Developer',
      vue: 'https://vuejs.org/'
    }
  },
  components: {
    Nav
  }
}

</script>

<style scoped lang="scss">
header {
  margin:0;
    h1 {
      margin:10px 0 0 0;
    }
    h2 {
      margin:0 0 20px 0;
    }
    .top-row {
    margin:0;
    background:#000;
    padding:10px 0;
      p {
        margin:0;
        display:inline-block;
        vertical-align:middle;
        color:#ccc;
        font-weight:bold;
        }
      img {
        width:35px;
        background:#000;
        vertical-align: middle;
        padding:0 0 0 10px;
        }
    }
    .wrapper {
      max-width:1200px;
      margin:0 auto;
      }
  }
</style>
