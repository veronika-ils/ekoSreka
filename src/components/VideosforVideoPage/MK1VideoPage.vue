<template>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <div class="nav">
        <ul>
            <div >
            <router-link to="/"> <img src="../../img/home.png" class="home"></router-link>   
            </div>
            <div class="dropdown">

                 <img  src="../../img/menu.png" class="icon">   
                
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
            
             <li class="small" ><router-link to="/1VideoPage" class="none">    EN  </router-link>  </li> 
            <li class="this small"><router-link to="/MK1VideoPage" class="none">MK</router-link></li>
        <li class="logo"> <img src="../../img/logo4.png"></li>  
        </ul>
     </div>

    <h1 class="videoTitle">Децата – Огледало на Нашите Дела: Засади Дрво, Засади Иднина!</h1>
    <div class="controlVideo">
    <video src="../../videos/video1.mp4" controls ></video>  
    <p>Децата се огледало на нашето секојдневие и на нашето однесување. Ако ние ја чуваме и ја негуваме
        нашата средина, истата љубов ќе им ја пренесеме на нашите деца. Децата не гледаат што зборуваме, туку што правиме. Да 
        ги мотивираме да ја засадат својата иднина, да ја сакаат животната средина и да садат
        растенија заедно со нас, за да уживаат од придобивките од чистата животна средина. Затоа, ние сме должни да им всадиме љубов и навика за заштита
        на животната средина. Навиките се градат од најмали нозе и ќе станат дел од  секојдневието на нашите деца. Засадете ја вашата иднина - засадете дрвце!  
        🌱
    </p>    
    </div>
    
 
    

   
    <div class="footer">
        <h1>Пишете ни!</h1>
        
        <table>
            <tr>
                <td>
                  <img src="../../img/insta.png">  
                </td>
                <td><p>@ecosrekja</p></td>
            </tr>
            <tr>
                <td>
                    <img src="../../img/face.png">
               
                </td>
                <td><p>@ecosrekja</p></td>
            </tr>
            <tr>
                <td>    
               <img src="../../img/mail.png"> 
                </td>
                <td><p><a href="mailto:ecosrekja@gmail.com">ecosrekja@gmail.com</a></p></td>
            </tr>
        </table>
             
        
    </div>
    
</template>
<script>

export default {
    name:'MK1VideoPage',
   

}
</script>
<style src="../../style.css"></style>