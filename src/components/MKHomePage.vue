<template>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <div class="nav">
        <ul>
            <div >
            <router-link to="/"> <img src="../img/home.png" class="home"></router-link>   
            </div>
            <div class="dropdown">

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
            
             <li class="small" ><router-link to="/HomePage" class="none">    EN  </router-link>  </li> 
            <li class="this small"><router-link to="/" class="none">MK</router-link></li>
        <li class="logo"> <img src="../img/logo4.png"></li>  
        </ul>
     </div>

    <div class="fade-in">
      <img src="../img/before1.jpg" class="first">
      <img src="../img/after1.jpg" class="second">
      <img src="../img/arrow.png" class="third">
    </div> 
  

    <div class="body1">
      <h1>Најнови вести</h1>
      <div class="extra">
        <MKWaves/>
        <MKEtna/>
      </div>
        
       
        <router-link to="/MK1Page" class="extrafoto">
  <h3 class="cl">Кликни ме!</h3>         
<div class="foto">
 
   <img src="../img/mk1.png">
   <p>  Водич за Рециклирање на Пластика: Како да Допринесеме за Почиста Средина? </p>
</div>
</router-link>

        
    </div>
    
    <div class="flower-border">
        </div>
    
    <div class="body2">
        <div class="one">
           <router-link to="/MKQuizzes"> <img src="../img/one2.png" id="one"> </router-link>
            <p>Нашите интересни квизови!</p>
        </div>
        <div class="two">
            
            <p>Посетете ја нашата онлајн продавница!</p>
           <router-link to="/MKStorePage"><img src="../img/two2.png" id="two"></router-link> 
        </div>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
     <h1 class="old">Постари вести</h1> 
    
    <ExOne />
    <ExOne/>
    <ExOne/>
    <ExOne/>
    <div class="footer">
        <h1>Пишете ни!</h1>
        
        <table>
            <tr>
                <td>
                  <img src="../img/insta.png">  
                </td>
                <td><p>@ecosrekja</p></td>
            </tr>
            <tr>
                <td>
                    <img src="../img/face.png">
               
                </td>
                <td><p>@ecosrekja</p></td>
            </tr>
            <tr>
                <td>    
               <img src="../img/mail.png"> 
                </td>
                <td><p><a href="mailto:ecosrekja@gmail.com">ecosrekja@gmail.com</a></p></td>
            </tr>
        </table>
             
        
    </div>
    
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
  mounted() {
    this.initializeComparison();
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