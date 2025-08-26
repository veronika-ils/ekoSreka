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
            
        
          <li class="lang"><router-link to="/About" ><img src="../img/uk.webp"></router-link></li>
            <li class=" lang"><router-link to="/MKAbout" ><img src="../img/mkd.png"></router-link></li>

        <li class="logo"> <img src="../img/logo4.png"></li>  
        </ul>
     </div>

     <div class="before-after-container">
  <div class="before">
    <img src="../img/before1.jpg" alt="Before cleanup">
    <p class="label">Реалност</p>
  </div>

  <div class="arrow homeA">
    <img src="../img/arrow.png" alt="Arrow">
  </div>

  <div class="after">
    <img src="../img/after1.jpg" alt="After cleanup">
    <p class="label">Цел</p>
  </div>
</div>



<div class="goal-section">
    <div class="goal-text">
        <h1>Нашата цел</h1>

        <p>Еко Среќа е веб-портал чија цел е да инспирира и да го поттикне проширувањето на знаењето кое придонесува 
            за подигање на свеста за заштита и унапредување на животната средина. Нашата мисија е да придонесеме за истакнување на 
            важноста на грижата од сите институции и засегнати страни вклучени во животната средина на 
            <span class="highlight">забавен, но реален, објективен, точен и непристрасен начин</span>. 
            За да се постигне оваа цел, од суштинско значење е образованието на различни општествени групи, што се надеваме дека ќе го постигнеме.
        </p>

        <p>
            Еко Среќа е посветена на поттикнување на подлабоко разбирање на еколошките прашања и инспиративна колективна акција за одржлива иднина. 
            Нашата визија е да создадеме платформа која не само што ги информира, туку и ги поттикнува поединците и заедниците да преземат значајни чекори кон чување на животната средина. 
            Преку работилници, написи и интерактивни содржини, се стремиме да поврземе различни групи и да поттикнеме соработка во справувањето со еколошките предизвици. 
            Заедно, можеме да изградиме заедница која ја цени и штити нашата планета за генерациите што доаѓаат.
        </p>

        <div class="footer-tags">
            ПР • МАРКЕТИНГ • МЕДИУМИ • РЕКЛАМИРАЊЕ • КОМУНИКАЦИИ
        </div>
    </div>

    <div class="goal-logo">
        <img src="../img/logo4.png" alt="Еко Среќа Лого">
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
    name:'MKAbout',
   

}
</script>
<style src="../style.css"></style>