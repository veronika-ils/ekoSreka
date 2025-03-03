<template>
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
            
             <li class="this small"><router-link to="/Quizzes" class="none">    EN  </router-link>  </li>    
           <li class="small"> <router-link to="/MKQuizzes" class="none">   MK </router-link> </li>
            <li class="logo"> <img src="../img/logo4.png"></li>  
        </ul>
     </div>
     <h1 class="level">Beginner</h1>
     <hr>

     <div class="quiz-container">
        <router-link to="/EcoConcepts">
      <div class="quiz">
        <img src="../img/quiz1.png">
        <p class="name"> General Eco Concepts 101</p>
        <p>Dive into the world of ecology with our "Eco Concepts 101" quiz!</p>
     </div>
     </router-link>
  
       
     
     <router-link to="/GreenAwareness">
     <div class="quiz">
        <img src="../img/quiz2.png">
        <p class="name"> Basics of Eco Concepts</p>
        <p> Test your knowledge of essential environmental concepts with the "Green Awareness Quiz".</p>
     </div>
     </router-link>
     
      <router-link to="/Eco-Discovery">
     <div class="quiz">
        <img src="../img/quiz3.png">
        <p class="name">Uncovering Our Planet's Secrets</p>
        <p>Dive into the Eco-Discovery Quiz, an engaging and enlightening journey designed to expand your knowledge about our environment! 
       </p>
     </div>
   </router-link>
    
     
      </div>
     <h1 class="level">Intermidiate</h1>
     <hr>
     <div class="quiz-container">
   <router-link to="/Eco-Engagement">
     <div class="quiz">
        <img src="../img/quiz4.png">
        <p class="name">Eco-Engagement Challenge</p>
        <p>Dive deeper into environmental issues with the "Eco-Engagement Challenge."
          This quiz is designed for those with a foundational understanding of ecological concepts.</p>
     </div>
   </router-link>
     
   <router-link to="/Eco-Recycling">
     <div class="quiz">
        <img src="../img/quiz5.png">
        <p class="name">How Well Do You Take Care of the Planet?</p>
         <p>This quiz will encourage you to think about your daily habits that impact the environment.</p>
     </div>
</router-link>
</div>
     <h1 class="level">Advanced</h1>
     <hr>
     <div class="quiz-container">
     <router-link to="/Eco-Quiz">
     <div class="quiz">
        <img src="../img/quiz6.png">
        <p class="name">Challenge for True Guardians of the Planet</p>
         <p>Are you ready to test your ecological intelligence and prove your commitment to protecting the planet?</p>
     </div>
     </router-link>
   </div>
  
     <h1 class="level">Entertainment</h1>
     <hr>

      <div class="quiz-container">
         <router-link to="/ENNationalPark">
     <div class="quiz">
        <img src="../img/quiz7.png">
        <p class="name">Which National Park Should You Visit?</p>
<p>Find the perfect park for your next adventure! </p>
     </div>
   </router-link>
   </div>
     
     
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
    name:'QuizesPage',

}
</script>
<style src="../style.css"></style>