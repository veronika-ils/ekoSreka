<template>
     <div class="nav">
        <ul>
            <div >
            <router-link to="/"> <img src="../img/home.png" class="home"></router-link>   
            </div>
            <div class="dropdown">

                 <img  src="../img/menu.png" class="icon">   
                
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
            
             <li class="small" ><router-link to="/Quizzes" class="none">    EN  </router-link>  </li> 
            <li class="this small"><router-link to="/MKQuizzes" class="none">MK</router-link></li>
        <li class="logo"> <img src="../img/logo4.png"></li>  
        </ul>
     </div>
     <h1 class="level">Почетик</h1>
     <hr>
     <div class="quiz-container">

  
     <router-link to="/MKEcoConcepts">
      <div class="quiz">
        <img src="../img/quiz1.png">
        <p class="name">Еколошки концепти 101</p>
        <p>Нурнете во светот на екологијата со нашиот квиз „Еко концепти 101“! </p>
     </div>
     </router-link>
     
     <router-link to="/MKGreenAwareness">
     <div class="quiz">
        <img src="../img/quiz2.png">
        <p class="name">Еко Детективи</p>
        <p>Квиз што ги предизвикува учесниците да откријат еколошки факти </p>
     </div>
     </router-link>
     
     <router-link to="/MKEco-Discovery">
     <div class="quiz">
        <img src="../img/quiz3.png">
        <p class="name">Проучување на тајните на планетата</p>
        <p>Едукативен и забавен квиз дизајниран да ги поттикне
          учесниците да откријат фасцинантни факти за Земјата.
       </p>
     </div>
   </router-link>
     
      </div>
     <h1 class="level">Средно ниво</h1>
     <hr>
     <div class="quiz-container">
     <router-link to="/MKEco-Engagement">
     <div class="quiz">
        <img src="../img/quiz4.png">
        <p class="name">Еко концепти-Средно ниво</p>
        <p>Овој квиз е дизајниран за оние со основно разбирање на еколошките концепти кои сакаат некаков мал предизвик.</p>
     </div>
   </router-link>
     
   <router-link to="/MKEco-Recycling">
     <div class="quiz">
        <img src="../img/quiz5.png">
        <p class="name">Колку Добро се Грижиш за Планетата?</p>
        <p>Овој квиз ќе те поттикне да размислиш за секојдневните навики што влијаат врз животната средина. </p>
     </div>
</router-link>
</div>
     <h1 class="level">Напредно ниво</h1>
     <hr>
     <div class="quiz-container">
     <router-link to="/MKEco-Quiz">
     <div class="quiz">
        <img src="../img/quiz6.png">
        <p class="name">Предизвик за Вистински Чувари на Планетата</p>
        <p>Дали си подготвен да ја тестирате својата еколошка интелигенција и да ја докажеш твојата посветеност за заштита на планетата? </p>
     </div>
     </router-link>
   </div>
  
     <h1 class="level">Забава</h1>
     <hr>
      <div class="quiz-container">
         <router-link to="/NationalPark">
     <div class="quiz">
        <img src="../img/quiz7.png">
        <p class="name">Кој Национален Парк Треба да го Посетите?</p>
        <p>Откриј го совршениот парк за твојата следна авантура!</p>
     </div>
   </router-link>
     
     </div>
     <div class="footer">
        <h1>Пишете ни!</h1>
        
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
    name:'MKQuizesPage',

}
</script>
<style src="../style.css"></style>