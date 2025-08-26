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
            
                <li class="lang"><router-link to="/FotoPage" ><img src="../img/uk.webp"></router-link></li>
            <li class=" lang"><router-link to="/MKFotoPage" ><img src="../img/mkd.png"></router-link></li>
        <li class="logo"> <img src="../img/logo4.png"></li>  
        </ul>
     </div>
   
    <div class="old-news-grid">

    
     <div class="compact-news-card">
    <router-link to="/MK1Page" class="news-title-link">
      <img class="compact-img" src="../img/mk1.png" alt="Рециклирање на пластика" />
      <div class="compact-content">
        <p class="news-date">Забава</p>
        <h2 class="compact-title">Водич за Рециклирање на Пластика</h2>
        <p class="compact-text">
          Како да допринесеме за почиста средина преку мали чекори и правилно сортирање на отпад?
        </p>
        <button class="myBtn">Кликни ме!</button>
      </div>
    </router-link>
  </div>

   <div class="compact-news-card">
    <router-link to="/MK1Page" class="news-title-link">
      <img class="compact-img" src="../img/mk1.png" alt="Рециклирање на пластика" />
      <div class="compact-content">
        <p class="news-date">Забава</p>
        <h2 class="compact-title">Водич за Рециклирање на Пластика</h2>
        <p class="compact-text">
          Како да допринесеме за почиста средина преку мали чекори и правилно сортирање на отпад?
        </p>
        <button class="myBtn">Кликни ме!</button>
      </div>
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
    name:'MKFotoPage',
   

}
</script>
<style src="../style.css"></style>