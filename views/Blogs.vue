<template>
  <div class="blogs">
    <h1>This is the blogs page</h1>
        <span class="blog-list" v-for="blog in blogs" :key="blog.id">
          <router-link v-bind:to="'/blogs/' + blog.id">{{ blog.title }}</router-link>
        </span>
      
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return { 
   blogs:
        [
            {
              "id": 1,
              "title": "Me and the industry",
              "body": "The Industry \n I find it fascinating how the tech industry is growing, especially in the North West (83% in the last 12 months (Manchester Digital 'Skills Audit' report 2017)) and the sheer number of meet-ups, clubs, blogs, tweets and practitioners of tech and the web is staggering. Attending a \"meet the meet-up\" session at university I found people that devote all their spare time to their chosen art. What I really need to do is hone-in, find my market and learn my trade. BSc Web Development is my degree, does that mean I will be, or am, a fully-fledged Web developer? According to data from the Manchester Digital 'Skills Audit' report 2017, \"Developer is still far and away the hardest role to fill but the picture is becoming nuanced, with high demand for specialist data and insight type roles\". Sounds promising for the data bods! From the initial panic and frantic finding my feet I seem to have found a vague area with what I read and the sources I use. I like to read tweets of value from accomplished Dev figures in the world (@chriscoyier, @meyerweb, @boagworld, @brad frost, @seanige and not to mention @wilsond). Personally, I don't think that money should be the motivator for doing a job, especially if it's a job that interests and challenges you mentally and creatively. Being a truck driver for 15 years was a real eye opener to earning good money but ultimatly being unhappy in what I did. But, as a side note, Manchester Digital 'Skills Audit' report 2017 stated that the role as a developer wages rose by 40% in the last year and the average wage inflation in the digital sector grew by 10% which is an average of £3k rise year on year... YAY!! And me - Am I scared? Of course I'm scared! University is the final frontier for me. When I started I wanted my life to count for something and what I do to count for something to someone is this great cosmos. I'm in the 3rd year, the final year of academic study, forever, because at 37, I can't see me doing a masters nor would I want to. I see people my age in a thriving and developing (no pun intended) industry loving their jobs, loving what they do, day in, day out and I want to be that type of person. I already want to have the experience of a 'gent' advanced in years and while I feel confident with coding HTML5, CSS and a bit of JavaScript, I'll read something that just scares the living daylights out of me. Usually job posts. If it's not Gulping It's Grunting or OOP'ing!! _mindmelt. Then there's the stuff I do know about... NodeJS sound interesting, oooh UX sounds interesting too! but to be honest, I have no idea what I am going to do when I leave university and while for a 22-year-old that might be a scary prospect, for a 37-year-old its terrifying. I'm not already the master of all things Web and it's frustrating. It's like a Phlogiston bursting out of me because I really want to do this! I may sound like I'm bleating on and my glass is half empty but far from it. I'm a logical thinker who wants... no, needs to be a guru at what he does. My enthusiasm for a career in the tech sector outstrips any notion of 'geek' you could find. I'm so out of touch with 'cool' that 'cool' is beneath me but that doesn't bother me so because I've had, and have, the help and support of the most important people around me, and created my little own journey of inspiration. Now that's cool! So plonk me down in a job that's important and say \"Sink or Swim\" and I'll swim any day because I can't wait to get started on whatever it is that I'm doing or I'm going to do."
            },
            {
              "id": 2,
              "title": "MongoDB & NodeJS",
              "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            },
            {
              "id": 3,
              "title": "React & ExpressJS",
              "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            },
            {
              "id": 4,
              "title": "Optimisation",
              "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
            },
            {
              "id": 5,
              "title": "Ongoing...",
              "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
            }
        ]
}
}
}

</script>

<style lang="scss">
.blogs {
  max-width:1200px;
  margin:0 auto;
  align-content: center;
  .blog-list {
    display:block;
    border: 1px solid #ccc;
    padding:20px 0;
    margin:10px auto 0 auto;
    max-width:400px;
  }
}
</style>
