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
            
             <li class="small" ><router-link to="/VideoPage" class="none">    EN  </router-link>  </li> 
            <li class="this small"><router-link to="/MKVideoPage" class="none">MK</router-link></li>
        <li class="logo"> <img src="../img/logo4.png"></li>  
        </ul>
     </div>
<div class="videosDiv">


     <router-link to="/MK1VideoPage">
     <div class="video">
     <video src="../videos/video1.mp4" autoplay loop muted></video>  
      <p>Децата – Огледало на Нашите Дела: Засади Дрво, Засади Иднина!</p>
     </div>   
     </router-link>
     
     <router-link to="/MK2VideoPage">
     <div class="video">
      <video src="../videos/video2.mp4" autoplay loop muted></video>   
      <p> Сонуваме за чиста иднина – Животната средина е во наши раце!.</p>
     </div>
    </router-link>
    <router-link to="/MK3VideoPage">
     <div class="video last">
      <video src="../videos/video3.mp4" autoplay loop muted></video>   
      <p>Чистиот Воздух – Заедничка Одговорност за Подобра Иднина.</p>
     </div>
    </router-link>
    </div>

   
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

export default {
    name:'MKVideoPage',
   

}
</script>
<style src="../style.css"></style>