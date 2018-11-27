<template>
  <div id="gallery">
    <h2>{{ title }}</h2>
    <ul>
        <a v-for="galObj in galObjs" @:mousehover="galObj.show = !galObj.show" :key="galObj.id" :href="galObj.website"><li>
            <h3>{{ galObj.name }}</h3>
            {{ galObj.src }}
            <img src="galObj.src" alt="galObj.name">
        </li></a>
    </ul>
  </div>
</template>

<script>
export default {
    //props:['galObjs'], //receiving props from parent component
    props: {
        galObjs: {
            type: Array, //Will validate what type of prop is being passed down
            required: true
        }
    },
  data(){
    return {
     title: '', 
     
        }
  },
  computed:{

  },
  components: {
   
  }
}

</script>

<style lang="scss">
#gallery {
    width:100%;
    max-width:1200px;
    padding:20px;
    box-sizing:border-box;
    ul {
        display:flex;
        flex-wrap:wrap;
        list-style-type:none;
        padding:10px;
        a {
            border: 1px solid #c7c7c7;
            width:50px;
            cursor: pointer;
            flex-grow:1;
            flex-basis:300px;
            text-align:center;
            padding:10px;
            margin:10px;
        }
    }
}

</style>