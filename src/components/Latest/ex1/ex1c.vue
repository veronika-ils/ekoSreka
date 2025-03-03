<template>
  

  
    <div class="body3">
        <img  src="../../../img/demo.jpg">
      <router-link to="/ExOne" class="news">  
        <p>Regional, 01.01.2024</p>
        <h1>Title</h1>
        <br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at feugiat eros,
             sed aliquam justo. Etiam tempor felis a lorem semper vestibulum. Nulla ullamcorper lobortis felis, 
             ac consequat mauris consectetur at. Morbi a turpis leo. Morbi commodo, nisi ac porttitor suscipit, 
             velit mi efficitur justo, a tristique velit metus vel justo. Nulla nec sem tortor. Etiam nec velit luctus,
              vestibulum lectus non, sagittis leo. Vivamus ac nisl odio. Ut sed ultrices leo. Sed felis nisl, porta non pulvinar vel,
               pulvinar non elit. Aenean consequat, est ut fringilla vulputate, mauris tortor blandit odio,
             et tincidunt justo neque sit amet mi.
             <span class="dots"  v-if="!isExpanded">...</span>
             <span  :class="{'less' : isExpanded, 'more' : !isExpanded}">   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at feugiat eros,
             sed aliquam justo. Etiam tempor felis a lorem semper vestibulum. Nulla ullamcorper lobortis felis, 
             ac consequat mauris consectetur at. Morbi a turpis leo. Morbi commodo, nisi ac porttitor suscipit, 
             velit mi efficitur justo, a tristique velit metus vel justo. Nulla nec sem tortor. Etiam nec velit luctus,
              vestibulum lectus non, sagittis leo. Vivamus ac nisl odio. Ut sed ultrices leo. Sed felis nisl, porta non pulvinar vel,
               pulvinar non elit. Aenean consequat, est ut fringilla vulputate, mauris tortor blandit odio,
             et tincidunt justo neque sit amet mi.</span></p>
            
            </router-link>
             <button class="myBtn" @click="expand" >{{ isExpanded ? 'Read Less' : 'Read More' }}</button>

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