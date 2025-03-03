<template>
  

  
    <div class="body3">
        <img  src="../../img/waves.webp" alt="Јако бранови">
      <router-link to="/MKWavesPage" class="news">  
        <p>Светот денес, 24.02.2025</p>
        <h1>Брановите стануваат поголеми: Дали светот е подготвен?</h1>
        <br>
        <p> Светот сега се соочува со еден нов природен предизвик – брановите во Јужниот океан растат побрзо
           и постојано стануваат поголеми. Овој феномен, кој се должи на интензивните климатски промени и зголеменетата  морска активност,
               создава сериозни закани за прибрежните области, но истовремено отвора можности за нови иновативни решенија.

             <span class="dots"  v-if="!isExpanded">...</span>
             <span  :class="{'less' : isExpanded, 'more' : !isExpanded}"> И покрај ризиците, некои научници сметаат дека поголемите бранови може да донесат и позитивни ефекти, 
             особено во контекстот на климатската криза... </span></p>
            
            </router-link>
             <button class="myBtn" @click="expand" >{{ isExpanded ? 'Read Less' : 'Read More' }}</button>

    </div>
    
    
</template>
<script>


export default{
  name:'MKWaves',
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