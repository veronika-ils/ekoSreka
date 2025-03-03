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
            
             <li class="this small"><router-link to="/1VideoPage" class="none">    EN  </router-link>  </li>    
           <li class="small"> <router-link to="/MK1VideoPage" class="none">   MK </router-link> </li>
            <li class="logo"> <img src="../../img/logo4.png"></li>  
        </ul>
     </div>

    <h1 class="videoTitle">Children – A Reflection of Our Actions: Plant a Tree, Plant the Future!</h1>
    <div class="controlVideo">
    <video src="../../videos/video1.mp4" controls ></video>  
    <p>Children are a reflection of our daily lives and our behavior.
         If we protect and nurture our environment, we will pass that same love on to our children.
          Children observe what we do, not what we say. Let’s motivate them to plant their future, to 
          love the environment, and to plant trees together with us so they can enjoy the benefits of a
           clean and healthy environment. It is our duty to instill in them both love and the habit of
            protecting nature. Habits are formed from an early age, and they will become a part of our 
            children’s everyday lives. Plant your future by planting a tree!🌱
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
    name:'OneVideoPage',
   

}
</script>
<style src="../../style.css"></style>