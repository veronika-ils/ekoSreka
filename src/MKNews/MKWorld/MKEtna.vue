<template>
  

  
    <div class="body3">
        <img  src="../../img/etna.webp" alt="Вулканот Етна">
      <router-link to="/MKEtnaVulcano" class="news">  
        <p>Светот денес, 22.02.2025</p>
        <h1>Ноќни екскурзии на италијанскиот вулкан Етна предизвикуваат безбедносни загрижености</h1>
        <br>
        <p>Италијанскиот вулкан Етна, еден од најактивните и најпознатите природни знаменитости во светот, 
            долго време привлекува авантуристи и љубители на природата. Во последно време, појавата на ноќни
             екскурзии предизвикува загрижености меѓу локалната власт, вулканолозите и туристичките експерти.
             <span class="dots"  v-if="!isExpanded">...</span>
             <span  :class="{'less' : isExpanded, 'more' : !isExpanded}"> Во последните неколку години, водените тури кои патуваат по страните на Етна за време на ноќта се стекнуваат
                 со значителна популарност. Туристичките агенции ги истакнуваат уникатните предности на гледањето на
                  драматичните ерупции и светливите лавни патеки кои се откриваат под ѕвездите – спектакл кој се разликува 
                  од дневните посети...</span></p>
            
            </router-link>
             <button class="myBtn" @click="expand" >{{ isExpanded ? 'Read Less' : 'Read More' }}</button>

    </div>
    
    
</template>
<script>


export default{
  name:'MKEtna',
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