<template>
    <div class="nav">
        <ul>
            <div >
            <router-link to="/HomePage"> <img src="../img/home.png"  class="home"></router-link> 
            </div>
            <div class="my-dropdown">

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
            
                   <li class="lang"><router-link to="/Quizzes" ><img src="../img/uk.webp"></router-link></li>
            <li class=" lang"><router-link to="/MKQuizzes" ><img src="../img/mkd.png"></router-link></li>
            <li class="logo"> <img src="../img/logo4.png"></li>  
        </ul>
     </div>
     <h1 class="level">Beginner </h1>
     
     <div class="quiz-container">
  <router-link to="/EcoConcepts" class="quiz-link">
    <div class="quiz-card" :style="{
    backgroundImage: `url(${require('@/img/quiz1.png')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }">
      <div class="quiz-dark-overlay"></div>
      <div class="quiz-overlay">
        <h2 class="quiz-title">Eco Concepts 101</h2>
        <p class="quiz-description">Dive into the world of ecology with our quiz "Eco Concepts 101"!</p>
      </div>
    </div>
  </router-link>

  <router-link to="/GreenAwareness" class="quiz-link">
    <div class="quiz-card" :style="{
    backgroundImage: `url(${require('@/img/quiz2.png')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }">
      <div class="quiz-dark-overlay"></div>
      <div class="quiz-overlay">
        <h2 class="quiz-title">Eco Detectives</h2>
        <p class="quiz-description">A quiz that challenges participants to uncover ecological facts.</p>
      </div>
    </div>
  </router-link>

  <router-link to="/Eco-Discovery" class="quiz-link">
    <div class="quiz-card" :style="{
    backgroundImage: `url(${require('@/img/quiz3.png')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }">
      <div class="quiz-dark-overlay"></div>
      <div class="quiz-overlay">
        <h2 class="quiz-title">Exploring the Secrets of the Planet</h2>
        <p class="quiz-description">An educational and fun quiz designed to encourage participants to discover fascinating facts about the Earth.</p>
      </div>
    </div>
  </router-link>
</div>


    <h1 class="level">Intermidiate</h1>



<div class="quiz-container">

  <router-link to="/Eco-Engagement" class="quiz-link">
    <div
  class="quiz-card"
  :style="{
    backgroundImage: `url(${require('@/img/quiz4.png')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }"
>
<div class="quiz-dark-overlay"></div>

      <div class="quiz-overlay">
        <h2 class="quiz-title">Eco Concepts – Intermediate Level</h2>
        <p class="quiz-description">This quiz is designed for those with a basic understanding of ecological concepts who are looking for a bit of a challenge.</p>
      </div>
    </div>
  </router-link>

  <router-link to="/Eco-Recycling" class="quiz-link">
   <div
  class="quiz-card"
  :style="{
    backgroundImage: `url(${require('@/img/quiz5.png')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }"
>
<div class="quiz-dark-overlay"></div>

      <div class="quiz-overlay">
        <h2 class="quiz-title">How Well Do You Care for the Planet?</h2>
        <p class="quiz-description">This quiz will encourage you to reflect on your daily habits that impact the environment.</p>
      </div>
    </div>
  </router-link>

</div>

     <h1 class="level">Advanced</h1>
     
     <div class="quiz-container">

      <router-link to="/Eco-Quiz" class="quiz-link">
   <div
  class="quiz-card"
  :style="{
    backgroundImage: `url(${require('@/img/quiz6.png')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }"
>
<div class="quiz-dark-overlay"></div>

      <div class="quiz-overlay">
        <h2 class="quiz-title">Challenge for True Guardians of the Planet</h2>
        <p class="quiz-description">Are you ready to test your environmental intelligence and prove your commitment to protecting the planet?</p>
      </div>
    </div>
  </router-link>


   </div>
  
     <h1 class="level">Entertainment</h1>
     
      <div class="quiz-container">

        
      <router-link to="/ENNationalPark" class="quiz-link">
   <div
  class="quiz-card"
  :style="{
    backgroundImage: `url(${require('@/img/quiz7.png')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }"
>
<div class="quiz-dark-overlay"></div>

      <div class="quiz-overlay">
        <h2 class="quiz-title">Which National Park Should You Visit?</h2>
        <p class="quiz-description">Discover the perfect park for your next adventure!</p>
      </div>
    </div>
  </router-link>

     
     </div>
            <footer class="footer">
  <h2 class="footer-heading">📬 Connect with us!</h2>

  <div class="footer-contact">
    <div class="contact-item">
      <img src="../img/insta.png" alt="Instagram" class="footer-icon">
      <span>@ecosrekja</span>
    </div>
    <div class="contact-item">
      <img src="../img/face.png" alt="Facebook" class="footer-icon">
      <span>@ecosrekja</span>
    </div>
    <div class="contact-item">
      <img src="../img/mail.png" alt="Email" class="footer-icon">
      <span><a href="mailto:ecosrekja@gmail.com">ecosrekja@gmail.com</a></span>
    </div>
  </div>
</footer>
     
    
</template>
<script>
export default {
    name:'QuizesPage',

}
</script>
<style src="../style.css"></style>