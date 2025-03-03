<template>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <div class="nav">
        <ul>
            <div >
            <router-link to="/HomePage"> <img src="../../img/home.png"  class="home"></router-link> 
            </div>
            <div class="dropdown">

                 <img  src="../../img/menu.png" class="icon">   
                
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
            
             <li class="this small"><router-link to="/3VideoPage" class="none">    EN  </router-link>  </li>    
           <li class="small"> <router-link to="/MK3VideoPage" class="none">   MK </router-link> </li>
            <li class="logo"> <img src="../../img/logo4.png"></li>  
        </ul>
     </div>

    <h1 class="videoTitle">Clean Air – A Shared Responsibility for a Better Future.</h1>
    <div class="controlVideo">
    <video src="../../videos/video3.mp4" controls ></video>  
    <p>The Air is All Around Us – Clean or Not?
It enters every pore of our body, keeps us alive, gives us strength, or destroys us. The choice is ours. Start with yourself, even though change does not depend on just one person.

Nature is beautiful in every season, but it is at its most beautiful when it is clean. Clean air flows deep into every pore of your body, filling you with freshness, oxygen, life, and happiness. A clean environment gives you a sense of security, fulfillment, and joy.
<br>
As we climb the path toward reaching the true peak, we must take care of the environment—avoiding littering, preventing destruction. Sometimes, nature itself cleans the environment through natural phenomena—snow, rain, wind—but it is up to humans to preserve and maintain it.

Protecting the environment brings a sense of pride to every person, like the achievement of reaching a mountain peak, like a personal victory, like the pinnacle of happiness. 🌿💚
    </p>    
    </div>
    
 
    <div class="footer">
        <h1>Connect with us</h1>
        
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
    name:'ThreeVideoPage',
   

}
</script>
<style src="../../style.css"></style>