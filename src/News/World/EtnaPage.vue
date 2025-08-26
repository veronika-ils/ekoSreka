<template>
  
     <div class="compact-news-card">
    <router-link to="/EtnaVulcano" class="news-title-link">
      <img class="compact-img" src="../../img/etna.webp" alt="Vulcan Etna" />

      <div class="compact-content">
        <p class="news-date">The World Today, 02.22.2025</p>
        <h2 class="compact-title">
          Night-Time Excursions on Italy's Etna Volcano Spark Safety Concerns
        </h2>
        <p class="compact-text">
          Italy's Etna volcano, one of the most active and well-known natural
           landmarks in the world, has long attracted adventurers and nature enthusiasts
          <span class="dots" v-if="!isExpanded">...</span>
          <span :class="{ less: isExpanded, more: !isExpanded }">
            Recently, the emergence of night-time excursions has raised concerns among local authorities,
             volcanologists, and tourism experts...
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
  name:'EtnaPage',
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