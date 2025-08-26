<template>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <div class="nav">
        <ul>
            <div >
            <router-link to="/HomePage"> <img src="../img/home.png"  class="home"></router-link> 
            </div>
            <div class="my-dropdown">

                 <img  src="../img/menu.png" class="icon">   
                
                <div class="dropdown-content">
                    <a href="#"><router-link to="/EnviromentPage">Environment</router-link> </a>
                    <a href="#"><router-link to="/Regional">Macedonia and the Region</router-link></a>
                    <a href="#"><router-link to="/TodayPage">The World Today</router-link></a>
                    <a href="#"><router-link to="/Quizzes">Quizzes</router-link></a>
                    <a href="#"><router-link to="/FunPage">Entertainment</router-link></a>
                    <a href="#"><router-link to="/About">About Us</router-link></a>
                    <span class="homeD">
                       <a hre="#" ><router-link to="/HomePage">Home</router-link> </a>    
                    </span>
                 
                </div>
             </div> 
            
                <li class="lang"><router-link to="/VideoPage" ><img src="../img/uk.webp"></router-link></li>
            <li class=" lang"><router-link to="/MKVideoPage" ><img src="../img/mkd.png"></router-link></li>
            <li class="logo"> <img src="../img/logo4.png"></li>  
        </ul>
     </div>

    
    <div class="videosDiv">



     <router-link to="/1VideoPage">
     <div class="my-card">
            <video src="../videos/video1.mp4" autoplay loop muted class="card-image"></video>  
             <div class="card-content">
            <h2>Children – A Reflection of Our Actions: Plant a Tree, Plant the Future!</h2>
                </div>
        </div>
    </router-link>



        <router-link to="/2VideoPage">
     <div class="my-card">
            <video src="../videos/video2.mp4" autoplay loop muted class="card-image"></video>  
             <div class="card-content">
            <h2>We dream of a clean future – The environment is in our hands!</h2>
                </div>
        </div>
    </router-link>



     <router-link to="/3VideoPage">
     <div class="my-card">
            <video src="../videos/video3.mp4" autoplay loop muted class="card-image"></video>  
             <div class="card-content">
            <h2>Clean Air – A Shared Responsibility for a Better Future.</h2>
                </div>
        </div>
    </router-link>
    </div>
    

    
 <footer class="footer">
  <h2 class="footer-heading">📬 Connect with us!</h2>

  <div class="footer-contact">
    <div class="contact-item">
      <img src="../img/insta.png" alt="Instagram" class="footer-icon">
      <span>@ecosrekja</span>
    </div>
    <div class="contact-item">
      <img src="../img/face.png" alt="Facebook" class="footer-icon">
      <span>@ecosrekja</span>
    </div>
    <div class="contact-item">
      <img src="../img/mail.png" alt="Email" class="footer-icon">
      <span><a href="mailto:ecosrekja@gmail.com">ecosrekja@gmail.com</a></span>
    </div>
  </div>
</footer>
    
</template>
<script>

export default {
    name:'VideoPage',
   

}
</script>
<style src="../style.css"></style>