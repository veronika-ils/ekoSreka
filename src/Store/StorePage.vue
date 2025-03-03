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
            
             <li class="this small"><router-link to="/StorePage" class="none">    EN  </router-link>  </li>    
           <li class="small"> <router-link to="/MKStorePage" class="none">   MK </router-link> </li>
            <li class="logo"> <img src="../img/logo4.png"></li>  
        </ul>
     </div>
    
     <div class="hourglass">
  <div class="top"></div>
  <div class="bottom"></div>
</div>
    
</template>
<script>

export default {
    name:'StorePage',
   

}
</script>
<style src="../style.css"></style>
<style src="../hourglass.css"></style>