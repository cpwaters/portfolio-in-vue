<template>
    <div id="single-blog">
        <h1>{{ blog.title }}</h1>
        <article>{{ blog.body }}</article>
    </div>
</template>

<script>
export default {
    data(){
        return {
            id:this.$route.params.id,
            blog:{}
        }
    },
    created(){
        this.get('@/source.json/' + this.id).then(function(data){
            this.blog = data.body;
        })
    },

    methods:{

    },
    computed:{

    }, 
    mixins:[]
}

</script>
<style scoped type="sass">

</style>