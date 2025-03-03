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
            
             <li class="this small"><router-link to="/FotoPage" class="none">    EN  </router-link>  </li>    
           <li class="small"> <router-link to="/MKFotoPage" class="none">   MK </router-link> </li>
            <li class="logo"> <img src="../img/logo4.png"></li>  
        </ul>
     </div>
    <router-link to="/1Page">

    
     <div class="foto">
        <img src="../img/ang1.png">
        <p>  Guide to Plastic Recycling: How to Contribute to a Cleaner Environment?</p>
         </div>
    </router-link>
    <router-link to="/2Page">
    <div class="foto">
        <img src="../img/ang2.jpg" class="hori">
        <p>  Recycle for a Cleaner and Greener Future!</p>
         </div>
    </router-link>
    <router-link to="/3Page">
    <div class="foto foto3">
        <img src="../img/ang3.jpg">
        <p>Eco-Friendly Kitchen Alternatives: Reduce Waste and Protect the Planet  </p> 
        </div>
    </router-link>

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

export default {
    name:'FotoPage',
   

}
</script>
<style src="../style.css"></style>