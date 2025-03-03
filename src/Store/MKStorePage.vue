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
            
             <li class="small" ><router-link to="/StorePage" class="none">    EN  </router-link>  </li> 
            <li class="this small"><router-link to="/MKStorePage" class="none">MK</router-link></li>
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
    name: 'MKStorePage',
   
}
   
</script>
<style src="../style.css"></style>
<style src="../hourglass.css"></style>