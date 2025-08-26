
<template>
  <div class="compact-news-card">
    <router-link to="/ExOne" class="news-title-link">
      <img class="compact-img" src="../../../img/demo.jpg"  />

      <div class="compact-content">
        <p class="news-date">Regional, 01.01.202</p>
        <h2 class="compact-title">
          Ноќни екскурзии на италијанскиот вулкан Етна предизвикуваат загрижености
        </h2>
        <p class="compact-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at feugiat eros
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
  name:'ExOne',
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
<style src="../../../style.css"></style>