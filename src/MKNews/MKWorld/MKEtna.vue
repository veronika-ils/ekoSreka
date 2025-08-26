<template>
  <div class="compact-news-card">
    <router-link to="/MKEtnaVulcano" class="news-title-link">
      <img class="compact-img" src="../../img/etna.webp" alt="Вулканот Етна" />

      <div class="compact-content">
        <p class="news-date">Светот денес, 22.02.2025</p>
        <h2 class="compact-title">
          Ноќни екскурзии на италијанскиот вулкан Етна предизвикуваат загрижености
        </h2>
        <p class="compact-text">
          Италијанскиот вулкан Етна, еден од најактивните и најпознатите природни знаменитости во светот,
          долго време привлекува авантуристи и љубители на природата.
          <span class="dots" v-if="!isExpanded">...</span>
          <span :class="{ less: isExpanded, more: !isExpanded }">
            Појавата на ноќни екскурзии предизвикува загрижености меѓу локалната власт, вулканолозите
            и туристичките експерти...
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