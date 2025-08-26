<template>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
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
            
            <li class="lang"><router-link to="/About" ><img src="../img/uk.webp"></router-link></li>
            <li class=" lang"><router-link to="/MKAbout" ><img src="../img/mkd.png"></router-link></li>

        <li class="logo"> <img src="../img/logo4.png"></li>  
            
        </ul>
     </div>

       <div class="before-after-container">
  <div class="before">
    <img src="../img/before1.jpg" alt="Before cleanup">
    <p class="label">Reality</p>
  </div>

  <div class="arrow homeA">
    <img src="../img/arrow.png" alt="Arrow">
  </div>

  <div class="after">
    <img src="../img/after1.jpg" alt="After cleanup">
    <p class="label">Goal</p>
  </div>
</div>
  


        <div class="goal-section">
    <div class="goal-text">
        <h1>Our mission</h1>

        <p>Eko Sreḱa is a web portal whose goal is to inspire and encourage the expansion of knowledge that 
            contributes to raising awareness for protecting and improving the environment. Our mission is to
             help highlight the importance of care by all institutions and stakeholders involved in the environment
              in a <span class="highlight">fun, yet realistic, objective, accurate, and impartial manner</span>.
               To achieve this goal, the education of different social groups is essential, and we hope to accomplish it.</p>
        <p>Eko Sreḱa is dedicated to encouraging a deeper understanding of environmental issues and inspiring
             collective action for a sustainable future. Our vision is to create a platform that not only
              informs but also motivates individuals and communities to take meaningful steps toward protecting the environment.
               Through workshops, articles, and interactive content, we strive to connect different groups
                and foster cooperation in addressing environmental challenges. Together, we can build a community 
                that values and protects our planet for the generations to come.</p>

        <div class="footer-tags">
            PR • MARKETING • MEDIUMS • COMMERSIALSЕ • COMMUNICATIONS
        </div>
    </div>

    <div class="goal-logo">
        <img src="../img/logo4.png" alt="Еко Среќа Лого">
    </div>
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
    name:'AboutPage',
   

}
</script>
<style src="../style.css"></style>