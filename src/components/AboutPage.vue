<template>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
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
            
             <li class="this small"><router-link to="/About" class="none">    EN  </router-link>  </li>    
           <li class="small"> <router-link to="/MKAbout" class="none">   MK </router-link> </li>
            <li class="logo"> <img src="../img/logo4.png"></li>  
        </ul>
     </div>

    <div class="fade-in">
      <img src="../img/before1.jpg" class="first">
      <img src="../img/after1.jpg" class="second">
      <img src="../img/arrow.png" class="third">
    </div>

    <div class="body1">
        <h1>Our Mission</h1>
        <p>Еко Среќа is a web portal aimed at inspiring and encouraging the expansion of knowledge that contributes to raising awareness about the protection and enhancement of the environment.

Our mission is to contribute to highlighting the importance of care from all institutions and stakeholders involved in the environment in a fun yet realistic, objective, accurate, and impartial manner.

To achieve this goal, the education of various social groups is essential, which we hope to accomplish.</p>
<br>
            <p class="remove">
                Еко Среќа is dedicated to fostering a deeper understanding of environmental issues and inspiring collective action for a sustainable future.

Our vision is to create a platform that not only informs but also empowers individuals and communities to take meaningful steps toward environmental stewardship.

Through workshops, articles, and interactive content, we strive to connect diverse groups and encourage collaboration in addressing ecological challenges. Together, we can build a community that values and protects our planet for generations to come.


            </p>
    </div>
    
   <div class="logobig">
    <img src="../img/logo4.png">
   </div>
        <div class="marketing">
            <p>PR,MARKETING,MEDIUMS,COMMERSIALS,COMMUNICATIONS</p>
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
    name:'AboutPage',
   

}
</script>
<style src="../style.css"></style>