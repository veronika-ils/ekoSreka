<template>
  

  
  <div class="body3">
        <img src="../../img/waves.webp" alt="Strong Waves">
      <router-link to="/WavesPage" class="news">  
        <p>The World Today, 24.02.2025</p>
        <h1>The Waves Are Getting Bigger: Is the World Ready?</h1>
        <br>
        <p>The world is now facing a new natural challenge – waves in the Southern Ocean are growing faster
           and constantly becoming larger. This phenomenon, caused by intense climate change and increased marine activity,
               poses serious threats to coastal areas but also opens up opportunities for new innovative solutions.

             <span class="dots"  v-if="!isExpanded">...</span>
             <span  :class="{'less' : isExpanded, 'more' : !isExpanded}"> Despite the risks, some scientists believe that bigger waves can also bring positive effects, 
             especially in the context of the climate crisis... </span></p>
            
            </router-link>
             <button class="myBtn" @click="expand" >{{ isExpanded ? 'Read Less' : 'Read More' }}</button>

    </div>
    
    
</template>
<script>


export default{
  name:'ENWaves',
  data(){
    return {
      isExpanded:false
    }
  },
  methods: {
    expand(){
      this.isExpanded = !this.isExpanded;
    }
  }
}
</script>
<style src="../../style.css"></style>