<template>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta charset="UTF-8">

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
            
        
          <li class="lang"><router-link to="/HomePage" ><img src="../img/uk.webp"></router-link></li>
            <li class=" lang"><router-link to="/" ><img src="../img/mkd.png"></router-link></li>

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


    <div class="body1">
      <h1>Најнови вести</h1>
      <div class="news-container">
  <MKWaves />
  <MKEtna />
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
      
    </div>
    
    <div class="flower-border">
  <!-- Текст над сликата -->
  <div class="slider-overlay">
    <h2>Природата е живот</h2>
    <p>Заштити ја. Почитувај ја. Дишеме заедно со неа.</p>
  </div>

</div>


  
    <div class="green-banner">

    
    <router-link to="/MKQuizzes" class="banner-section">
  <img src="../img/aroww.png" alt="Back" class="banner-icon">
  <span>Нашите интересни квизови!</span>
</router-link>

<router-link to="/MKStorePage" class="banner-section">
  <span>Посетете ја нашата онлајн продавница!</span>
  <img src="../img/arow.png" alt="Next" class="banner-icon">
</router-link></div>

     <h1 class="old">Постари вести</h1>

<div class="old-news-grid">
  <ExOne />
  <ExOne />
  <ExOne />
  <ExOne />
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

export default {
  name: 'MKHomePage',
  components: {
    ExOne,
    MKEtna,
    MKWaves
  },
   data() {
    return {
      images: [
        require('../img/air.jpg'),
        require('../img/water.jpg'),
        require('../img/sun.jpg'),
        require('../img/sea.jpg')
      ],
      currentIndex: 0,
      currentImage: ''
    };
  },
  mounted() {
    this.initializeComparison();
      this.currentImage = this.images[0];
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.currentImage = this.images[this.currentIndex];
    }, 5000);
  },
  methods: {
    initializeComparison() {
      let overlays = document.getElementsByClassName("img-comp-overlay");
      for (let i = 0; i < overlays.length; i++) {
        this.compareImages(overlays[i]);
      }
    },
    compareImages(img) {
      let slider, clicked = 0, w, h;

      if (!img) return; // Ensure the image exists

      w = img.offsetWidth;
      h = img.offsetHeight;

      img.style.width = (w / 2) + "px";

      // Create slider
      slider = document.createElement("DIV");
      slider.setAttribute("class", "img-comp-slider");
      img.parentElement.insertBefore(slider, img);

      // Position the slider in the middle
      slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
      slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";

      // Mouse and touch events
      slider.addEventListener("mousedown", slideReady);
      window.addEventListener("mouseup", slideFinish);
      slider.addEventListener("touchstart", slideReady);
      window.addEventListener("touchend", slideFinish);

      function slideReady(e) {
        e.preventDefault();
        clicked = 1;
        window.addEventListener("mousemove", slideMove);
        window.addEventListener("touchmove", slideMove);
      }

      function slideFinish() {
        clicked = 0;
        window.removeEventListener("mousemove", slideMove);
        window.removeEventListener("touchmove", slideMove);
      }

      function slideMove(e) {
        if (clicked === 0) return;
        let pos = getCursorPos(e);
        if (pos < 0) pos = 0;
        if (pos > w) pos = w;
        slide(pos);
      }

      function getCursorPos(e) {
        e = e.changedTouches ? e.changedTouches[0] : e;
        let rect = img.getBoundingClientRect();
        return e.pageX - rect.left - window.pageXOffset;
      }

      function slide(x) {
        img.style.width = x + "px";
        slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
      }
    }
  }
};
</script>
<style src="../style.css"></style>