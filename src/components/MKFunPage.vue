<template>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
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
            
             <li class="lang"><router-link to="/FunPage" ><img src="../img/uk.webp"></router-link></li>
            <li class=" lang"><router-link to="/MKFunPage" ><img src="../img/mkd.png"></router-link></li>
        <li class="logo"> <img src="../img/logo4.png"></li>  
        </ul>
     </div>

     <div class="partsContainer">
     <div class="parts">
    <router-link to="/MKVideoPage" class="none">
         <p>Видео</p>
    </router-link>
       
     </div>
     <div class="parts">
        <router-link to="/MKFotoPage" class="none">
          <p>Фото</p>   
        </router-link>
       
     </div>
     <div class="parts last">
        <router-link to="/MKBasicStarPage" class="none">
          <p>Хороскоп</p>   
        </router-link>
       
     </div>   
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

export default {
    name:'MKFunPage',
   

}
</script>
<style src="../style.css"></style>