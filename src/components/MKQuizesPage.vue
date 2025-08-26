<template>
     <div class="nav">
        <ul>
            <div >
            <router-link to="/"> <img src="../img/home.png" class="home"></router-link>   
            </div>
            <div class="my-dropdown">
 
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
            
        
          <li class="lang"><router-link to="/Quizzes" ><img src="../img/uk.webp"></router-link></li>
            <li class=" lang"><router-link to="/MKQuizzes" ><img src="../img/mkd.png"></router-link></li>

        <li class="logo"> <img src="../img/logo4.png"></li>  
        </ul>
     </div>
     <h1 class="level">Почетно ниво</h1>
     
     <div class="quiz-container">
  <router-link to="/MKEcoConcepts" class="quiz-link">
    <div class="quiz-card" :style="{
    backgroundImage: `url(${require('@/img/quiz1.png')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }">
      <div class="quiz-dark-overlay"></div>
      <div class="quiz-overlay">
        <h2 class="quiz-title">Еколошки концепти 101</h2>
        <p class="quiz-description">Нурнете во светот на екологијата со нашиот квиз „Еко концепти 101“!</p>
      </div>
    </div>
  </router-link>

  <router-link to="/MKGreenAwareness" class="quiz-link">
    <div class="quiz-card" :style="{
    backgroundImage: `url(${require('@/img/quiz2.png')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }">
      <div class="quiz-dark-overlay"></div>
      <div class="quiz-overlay">
        <h2 class="quiz-title">Еко Детективи</h2>
        <p class="quiz-description">Квиз што ги предизвикува учесниците да откријат еколошки факти</p>
      </div>
    </div>
  </router-link>

  <router-link to="/MKEco-Discovery" class="quiz-link">
    <div class="quiz-card" :style="{
    backgroundImage: `url(${require('@/img/quiz3.png')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }">
      <div class="quiz-dark-overlay"></div>
      <div class="quiz-overlay">
        <h2 class="quiz-title">Проучување на тајните на планетата</h2>
        <p class="quiz-description">Едукативен и забавен квиз дизајниран да ги поттикне учесниците да откријат фасцинантни факти за Земјата.</p>
      </div>
    </div>
  </router-link>
</div>


    <h1 class="level">Средно ниво</h1>



<div class="quiz-container">

  <router-link to="/MKEco-Engagement" class="quiz-link">
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
        <h2 class="quiz-title">Еко концепти-Средно ниво</h2>
        <p class="quiz-description">Овој квиз е дизајниран за оние со основно разбирање на еколошките концепти кои сакаат некаков мал предизвик.</p>
      </div>
    </div>
  </router-link>

  <router-link to="/MKEco-Recycling" class="quiz-link">
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
        <h2 class="quiz-title">Колку Добро се Грижиш за Планетата?</h2>
        <p class="quiz-description">Овој квиз ќе те поттикне да размислиш за секојдневните навики што влијаат врз животната средина.</p>
      </div>
    </div>
  </router-link>

</div>

     <h1 class="level">Напредно ниво</h1>
     
     <div class="quiz-container">

      <router-link to="/MKEco-Quiz" class="quiz-link">
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
        <h2 class="quiz-title">Предизвик за Вистински Чувари на Планетата</h2>
        <p class="quiz-description">Дали си подготвен да ја тестирате својата еколошка интелигенција и да ја докажеш твојата посветеност за заштита на планетата? </p>
      </div>
    </div>
  </router-link>


   </div>
  
     <h1 class="level">Забава</h1>
     
      <div class="quiz-container">

        
      <router-link to="/NationalPark" class="quiz-link">
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
        <h2 class="quiz-title">Кој Национален Парк Треба да го Посетите?</h2>
        <p class="quiz-description">Откриј го совршениот парк за твојата следна авантура!</p>
      </div>
    </div>
  </router-link>

     
     </div>
       <footer class="footer">
  <h2 class="footer-heading">📬 Пишете ни!</h2>

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
    name:'MKQuizesPage',

}
</script>
<style src="../style.css"></style>