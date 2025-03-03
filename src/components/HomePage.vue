<template>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <div class="nav">
        <ul>
            <div >
            <router-link to="/HomePage"> <img src="../img/home.png"  class="home"></router-link> 
            </div>
            <div class="dropdown">

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
            
             <li class="this small"><router-link to="/HomePage" class="none">    EN  </router-link>  </li>    
           <li class="small"> <router-link to="/" class="none">   MK </router-link> </li>
            <li class="logo"> <img src="../img/logo4.png"></li>  
        </ul>
     </div>

     <div class="fade-in">
      <img src="../img/before1.jpg" class="first">
      <img src="../img/after1.jpg" class="second">
      <img src="../img/arrow.png" class="third">
    </div> 
  

    <div class="body1">
      <h1>Newest news</h1>
      <div class="extra">
        <ENWaves/>
        <EtnaPage/>
      </div>
        
       
        <router-link to="/MK1Page" class="extrafoto">
  <h3 class="cl">Click me!</h3>         
<div class="foto">
 
   <img src="../img/mk1.png">
   <p>  Guide to Plastic Recycling: How to Contribute to a Cleaner Environment? </p>
</div>
</router-link>

        
    </div>
    
    <div class="flower-border">
        </div>
    
    <div class="body2">
        <div class="one">
           <router-link to="/Quizzes"> <img src="../img/one2.png" id="one"> </router-link>
            <p>Check out our fun quizzes!</p>
        </div>
        <div class="two">
            
            <p>Check out our online store!</p>
           <router-link to="/StorePage"><img src="../img/two2.png" id="two"></router-link> 
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
     <h1 class="old">Older news</h1> 
    
    <ExOne />
    <ExOne/>
    <ExOne/>
    <ExOne/>
    <div class="footer">
        <h1>Connect with us</h1>
        
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