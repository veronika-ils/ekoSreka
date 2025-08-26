<template>
  <div class="compact-news-card">
    <router-link to="/MKWavesPage" class="news-title-link">
      <img class="compact-img" src="../../img/waves.webp" alt="Јако бранови" />

      <div class="compact-content">
        <p class="news-date">Светот денес, 24.02.2025</p>
        <h2 class="compact-title">
          Брановите стануваат поголеми: Дали светот е подготвен?
        </h2>
        <p class="compact-text">
          Брановите во Јужниот океан растат побрзо и стануваат се поголеми – закана за крајбрежните подрачја,
          но и шанса за иновации.
          <span class="dots" v-if="!isExpanded">...</span>
          <span :class="{ less: isExpanded, more: !isExpanded }">
            Овој феномен, кој се должи на климатските промени и засилена морска активност, предизвикува загриженост.
            Некои научници, сепак, гледаат и потенцијални придобивки во контекст на климатската криза...
          </span>
        </p>

        <button class="myBtn" @click.stop.prevent="expand">
          {{ isExpanded ? 'Прочитај помалку' : 'Прочитај повеќе' }}
        </button>
      </div>
    </router-link>
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