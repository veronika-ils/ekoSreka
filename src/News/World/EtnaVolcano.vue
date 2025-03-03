<template>
  
  <div class="nav">
        <ul>
            <div>
                <router-link to="/HomePage"> <img src="../../img/home.png" class="home"></router-link>
            </div>
            <div class="dropdown">
                <img src="../../img/menu.png" class="icon">
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
            <li class="this small" ><router-link to="/EtnaVulcano" class="none">    EN  </router-link>  </li> 
               <li class="small"><router-link to="/MKEtnaVulcano" class="none">MK</router-link></li>
            <li class="logo"> <img src="../../img/logo4.png"></li>
        </ul>
    </div>
       <h1 class="title">Night-Time Excursions on Italy's Etna Volcano Spark Safety Concerns</h1>  

<img src="../../img/etna.webp" class="below">

<div class="date">
  <p>Saturday, February 22 2025</p>   
</div>
<br>

<div class="text">
  <p>Reading time: 4 minutes</p>
  <p>Italy's Etna volcano, one of the most active and well-known natural landmarks in the world, has long attracted adventurers and nature enthusiasts. Recently, the emergence of night-time excursions has raised concerns among local authorities, volcanologists, and tourism experts.</p>
  <p>In recent years, guided tours that venture across Etna’s slopes at night have gained significant popularity. Tourism agencies highlight the unique advantage of witnessing dramatic eruptions and glowing lava flows under the stars—a spectacle that differs from daytime visits. However, while these night-time journeys offer an unforgettable experience, the challenges of navigating the rugged terrain in low visibility raise serious concerns.</p>
  <p>In the darkness, the natural beauty of Etna is overshadowed by numerous potential hazards. Reduced lighting, steep and uneven paths, and rapid temperature changes create a dangerous environment. Experts warn that even well-organized excursions are not immune to risks.
    <br>
    <i>"The volcano is inherently unpredictable"</i> - explains a local volcanologist.
  </p>
  <p>Authorities are concerned that unprepared visitors may underestimate the risks. Beyond the physical dangers, there is also growing concern that a large number of tourists during night-time hours could overwhelm local infrastructure, potentially affecting the safety of both visitors and residents. Tourism agencies now face the challenge of balancing the economic benefits of night-time excursions with the need for strict safety standards.</p>
  <p>In addition to the immediate safety concerns, experts emphasize that increased human activity during sensitive night-time hours may disrupt local wildlife and negatively impact the ecosystem surrounding the volcano. Environmental advocates argue that any measure promoting tourism must also consider the long-term consequences for the region's natural habitats.</p>
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
    name:'EtnaVolcano',
  }
  </script>
  <style src="../../style.css"></style>