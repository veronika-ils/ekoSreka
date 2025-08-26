<template>
  
    
    <div class="compact-news-card">
    <router-link to="/WavesPage" class="news-title-link">
      <img class="compact-img" src="../../img/waves.webp" alt="Strong waves" />

      <div class="compact-content">
        <p class="news-date">The World Today, 24.02.2025</p>
        <h2 class="compact-title">
          The Waves Are Getting Bigger: Is the World Ready?
        </h2>
        <p class="compact-text">
          The world is now facing a new natural challenge – waves in the Southern Ocean are growing faster
           and constantly becoming larger. 
          <span class="dots" v-if="!isExpanded">...</span>
          <span :class="{ less: isExpanded, more: !isExpanded }">
             This phenomenon, caused by intense climate change and increased marine activity,
               poses serious threats.
          Despite the risks, some scientists believe that bigger waves can also bring positive effects, 
             especially in the context of the climate crisis...
          </span>
        </p>

        <button class="myBtn" @click.stop.prevent="expand">
          {{ isExpanded ? 'Read Less' : 'Read More' }}
        </button>
      </div>
    </router-link>
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