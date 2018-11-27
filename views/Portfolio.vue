<template>
  <div class="portfolio">
    <h2>{{ title }}</h2>
    <Gallery :galObjs="galObjs"/> <!--passing props down-->
    <div>CSS Grids for IE</div>
    <div>Encryptor / Decryptor</div>
    <div>Online shop</div>
    <div>The origin of me</div>
    <div>MERN Stack basic demo</div>
  </div>
</template>

<script>
import Gallery from '@/components/GridGallery.vue'

export default {
  data(){
    return {
     title: 'This is the portfolio page',  
    galObjs:[
            {name:'img 1', src:'./assets/ED.jpg', show:false, website:'http://14061983.webdevmmu.uk/'},
            {name:'img 2', src:'@/assets/ED.jpg', show:false, website:'http://14061983.webdevmmu.uk/'},
            {name:'img 3', src:'@/assets/ED.jpg', show:false, website:'http://14061983.webdevmmu.uk/'},
            {name:'img 4', src:'@/assets/ED.jpg', show:false, website:'http://14061983.webdevmmu.uk/'},
            {name:'img 5', src:'@/assets/ED.jpg', show:false, website:'http://14061983.webdevmmu.uk/'}
            ]

      }
  },
  components: {
    Gallery
  }
}

</script>
<style lang="scss">


</style>

