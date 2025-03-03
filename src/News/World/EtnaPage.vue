<template>
  

  
    <div class="body3">
        <img  src="../../img/etna.webp">
      <router-link to="/EtnaVolcano" class="news">  
        <p>The World Today, 02.22.2025</p>
        <h1>Night-Time Excursions on Italy's Etna Volcano Spark Safety Concerns</h1>
        <br>
        <p> Italy's Etna volcano, one of the most active and well-known natural
           landmarks in the world, has long attracted adventurers and nature enthusiasts.
            Recently, the emergence of night-time excursions has raised concerns among local authorities,
             volcanologists, and tourism experts.
             <span class="dots"  v-if="!isExpanded">...</span>
             <br>
             <span  :class="{'less' : isExpanded, 'more' : !isExpanded}">In recent years, guided tours that venture across Etna’s 
              slopes at night have gained significant popularity. Tourism agencies
               highlight the unique advantage of witnessing dramatic eruptions and glowing lava flows under the stars—a 
              spectacle that differs from daytime visits....</span></p>
            
            </router-link>
             <button class="myBtn" @click="expand" >{{ isExpanded ? 'Read Less' : 'Read More' }}</button>

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