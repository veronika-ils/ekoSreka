<template> <div class="nav">
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
            
            <li class="lang"><router-link to="/Regional" ><img src="../img/uk.webp"></router-link></li>
            <li class=" lang"><router-link to="/MKRegional" ><img src="../img/mkd.png"></router-link></li>

        <li class="logo"> <img src="../img/logo4.png"></li>  
            
        </ul>
     </div>
        <div class="old-news-grid">
        <ExOne/>
        <ExOne/>
        <ExOne/>
        <ExOne/>
        <ExOne/>
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
import ExOne from './Latest/ex1/ex1c.vue';
export default{
    name:'ReagionalPage',
    components:{
        ExOne
    }
}
</script>
<style src="../style.css"></style>