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
            
            <li class="lang"><router-link to="/HomePage" ><img src="../img/uk.webp"></router-link></li>
            <li class=" lang"><router-link to="/" ><img src="../img/mkd.png"></router-link></li>

        <li class="logo"> <img src="../img/logo4.png"></li>  
            
        </ul>
     </div>

       <div class="before-after-container">
  <div class="before">
    <img src="../img/before1.jpg" alt="Before cleanup">
    <p class="label">Reality</p>
  </div>

  <div class="arrow homeA">
    <img src="../img/arrow.png" alt="Arrow">
  </div>

  <div class="after">
    <img src="../img/after1.jpg" alt="After cleanup">
    <p class="label">Goal</p>
  </div>
</div>
  

    <div class="body1">
      <h1>Newest news</h1>
      <div class="news-container">
  <ENWaves/>
  <EtnaPage/>
  <div class="compact-news-card">
    <router-link to="/MK1Page" class="news-title-link">
      <img class="compact-img" src="../img/mk1.png" alt="Рециклирање на пластика" />
      <div class="compact-content">
        <p class="news-date">Entertainment</p>
        <h2 class="compact-title"> Guide to Plastic Recycling</h2>
        <p class="compact-text">
          How to Contribute to a Cleaner Environment? 
        </p>
        <button class="myBtn">Click me!</button>
      </div>
    </router-link>
  </div>
</div>
      
    </div>

    
  
    <div class="flower-border">
  <div class="slider-overlay">
    <h2>Nature is life</h2>
     <p>Protect it. Respect it. We breathe together with it.</p>
  </div>

</div>


    <div class="green-banner">

    
    <router-link to="/Quizzes" class="banner-section">
  <img src="../img/aroww.png" alt="Back" class="banner-icon">
  <span>Check out our fun quizzes!</span>
</router-link>

<router-link to="/StorePage" class="banner-section">
  <span>Check out our online store!</span>
  <img src="../img/arow.png" alt="Next" class="banner-icon">
</router-link></div>


     <h1 class="old">Older news</h1>

<div class="old-news-grid">
  <ExOne />
  <ExOne />
  <ExOne />
  <ExOne />
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
import EtnaPage from '@/News/World/EtnaPage.vue';
import ENWaves from '@/News/World/ENWaves.vue';
export default {
    name:'HomePage',
    components: {
    ExOne,
    EtnaPage,
    ENWaves
  }

}
</script>
<style src="../style.css"></style>