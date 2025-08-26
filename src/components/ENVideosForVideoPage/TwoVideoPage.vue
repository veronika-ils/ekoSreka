<template>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <div class="nav">
        <ul>
            <div >
            <router-link to="/HomePage"> <img src="../../img/home.png"  class="home"></router-link> 
            </div>
            <div class="my-dropdown">

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
            
             <li class="this small"><router-link to="/2VideoPage" class="none">    EN  </router-link>  </li>    
           <li class="small"> <router-link to="/MK2VideoPage" class="none">   MK </router-link> </li>
            <li class="logo"> <img src="../../img/logo4.png"></li>  
        </ul>
     </div>

    <h1 class="videoTitle">We dream of a clean future – The environment is in our hands!</h1>
    <div class="controlVideo">
    <video src="../../videos/video2.mp4" controls ></video>  
    <p>What Kind of Environment Do We Dream Of? What Kind of Living Surroundings Do We Want?
A clean one? That depends on us.

Slovenia is a country where environmental care is a daily routine, a primary goal for every resident, their aspiration, and their way of life. A clean environment starts with our daily activities—our yard, our street, our neighborhood, and our municipality.
<br>
The first impression of Slovenia is that it is a green country—bridges covered with green grass, protection of animal habitats, walking trails leading deep into forests and mountains, well-kept house yards, neatly maintained lawns by the residents, and food produced from local resources.

The general impression is that caring for the environment gives back to people in a positive way. After visiting Slovenia, I realized that taking care of the environment and consuming homegrown, healthy food is not a burden but a source of pride.

<br> Make an effort – the results will be visible, and the environment will reward you! 🌍♻️
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
    name:'TwoVideoPage',
   

}
</script>
<style src="../../style.css"></style>