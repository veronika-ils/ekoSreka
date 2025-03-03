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
              <li class="this small" ><router-link to="/WavesPage" class="none">    EN  </router-link>  </li> 
                 <li class="small"><router-link to="/MKWavesPage" class="none">MK</router-link></li>
              <li class="logo"> <img src="../../img/logo4.png"></li>
          </ul>
      </div>
      <h1 class="title">The Waves Are Getting Bigger: Is the World Ready?</h1>   
  
  <img src="../../img/waves.webp" class="below">
  
  <div class="date">
    <p>Monday, February 24 2025</p>   
  </div>
  <br>
  
  <div class="text">
    <p>Reading time: 3 minutes</p>
    <p>The world is now facing a new natural challenge – waves in the Southern Ocean are growing faster and constantly becoming larger.</p>
        <br>
        <p>This phenomenon, caused by intense climate change and increased marine activity, poses serious threats to coastal areas but also opens up opportunities for new innovative solutions.</p>
Despite the risks, some scientists believe that bigger waves can also bring positive effects, especially in the context of the climate crisis. 
<p>Ocean energy, derived from wave motion, is considered one of the most promising sources of renewable energy. With the development of innovative technologies, there is potential to harness this natural force for green energy production, which will help reduce greenhouse gas emissions.
Several research teams and companies are already working on projects for wave energy conversion.<br>
 These projects aim to take advantage of the new opportunities offered by the greater power of ocean movements, creating electricity generation systems that do not rely on fossil fuels. This would not only contribute to solving energy challenges but also help combat climate change.
While the rising waves in the Southern Ocean pose a serious threat to coastal areas, they also offer a unique opportunity for innovative solutions in renewable energy.
</p>
<p>With appropriate measures and investments, the natural power of larger waves can become a key factor in the fight against climate change, paving the way for a sustainable and environmentally conscious future.
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
      name:'WavesPage',
    }
    </script>
    <style src="../../style.css"></style>