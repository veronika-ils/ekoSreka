<template>
    <div class="nav">
        <ul>
            <div >
            <router-link to="/"> <img src="../img/home.png" class="home"></router-link>   
            </div>
            <div class="my-dropdown">
 
                 <img  src="../img/menu.png" class="icon">   
                
                <div class="dropdown-content">
                    <a href="#"><router-link to="/MKEnviroment">Животната Средина</router-link></a>
                    <a href="#"><router-link to="/MKRegional">Македонија и Регионот</router-link></a>
                    <a href="#"><router-link to="/MKTodayPage">Светот денес</router-link></a>
                    <a href="#"><router-link to="/MKQuizzes">Квизови</router-link></a>
                    <a href="#"><router-link to="/MKFunPage">Забава</router-link></a>
                    <a href="#"><router-link to="/MKAbout">За нас</router-link></a>
                    <span  class="homeD">
                        <a hre="#"><router-link to="/" >Дома</router-link> </a>
                    </span>
                </div>
             </div>
            
        
          <li class="lang"><router-link to="/TodayPage" ><img src="../img/uk.webp"></router-link></li>
            <li class=" lang"><router-link to="/MKTodayPage" ><img src="../img/mkd.png"></router-link></li>

        <li class="logo"> <img src="../img/logo4.png"></li>  
        </ul>
     </div>
     <div class="old-news-grid">
     <MKWaves/>
        <MKEtna/>
        <ExOne/>
        <ExOne/>
        <ExOne/>   
     </div>
     
       <footer class="footer">
  <h2 class="footer-heading">📬 Пишете ни!</h2>

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
   import MKEtna from '@/MKNews/MKWorld/MKEtna.vue';
   import MKWaves from '@/MKNews/MKWorld/MKWaves.vue';
   export default{
       name:'MKTodayPage',
       components:{
           ExOne,
           MKEtna,
           MKWaves
       }
   }
   </script>
   <style src="../style.css"></style>