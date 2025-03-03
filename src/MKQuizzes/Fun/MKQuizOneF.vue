<template>
  
  <div class="nav">
        <ul>
            <div >
            <router-link to="/MKHomePage"> <img src="../../img/home.png" class="home"></router-link>   
            </div>
            <div class="dropdown">

                 <img  src="../../img/menu.png" class="icon">   
                
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
            
        <li class="logo"> <img src="../../img/logo4.png"></li>  
        </ul>
     </div>

    <div class="quizzes">
      <h1>{{ quiz.title }}</h1>
    
      <h2>Прашања</h2>
      <ol>

        <li v-for="(question, index) in quiz.questions" :key="index">
          <p>{{ question.question }}</p>
          <ul class="list">
            <li v-for="(answer, answerIndex) in question.answers" :key="answerIndex" class="symbol">
              <button @click="selectAnswer(index, answer)" :class="{ selected: answers[index] === answer }" 
              :disabled="submit && answers[index] !== answer" >{{ answer }}</button>
            </li>
          </ul>
        </li>

      </ol>
   
    <div>
    <div >
      <button @click="submitQuiz" :disabled="!allQuestionsAnswered || submit">Submit Quiz</button>
    </div>

    <div v-if="allQuestionsAnswered && submit" class="score">
      <span v-if="score<=6">
        <h2>🏔️ Ти треба да го посетиш Националниот Парк Маврово!</h2>
        <img src="../../img/mavrovo.jpg" alt="Маврово"  class="park">
      </span>
      <span v-if="score>6 & score<=11">
        <h2>🌲 Ти треба да го посетиш Националниот Парк Пелистер!</h2>
        <img src="../../img/pelister.jpg" alt="Пелистер" class="park">
      </span>
      <span v-if="score>11">
        <h2>🌊 Ти треба да го посетиш Националниот Парк Галичица!</h2>
        <img src="../../img/galicica.jpg" alt="Галичица"  class="park">
      </span>
      <button @click="restartQuiz">Пробај повторно?</button>
    </div>
     </div>
  </div>
  <div class="footer">
        <h1>Пишете ни!</h1>
        
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
  name:'MKQuizOneF',
  data() {
    return {
      quiz: {
        title: "Кој Национален Парк Треба да го Посетите?",
        questions: [
          {
            question: "Каква природа најмногу ви се допаѓа?",
            answers: ["а) Планини со високи врвови", "б) Густи шуми и водопади",
            "в) Езера и пасторални предели"],
          },
          {
            question: "Кој вид на активност најмногу ве привлекува?",
            answers:["а) Планинарење и алпинизам",
             "б) Пешачење низ шуми и набљудување животни", "в) Кајакарење и кампување покрај езеро"],
          },
          {
            question: "Кој пејзаж најмногу ве смирува?",
            answers: ["а) Сурови карпи и снежни врвови", 
            "б) Зелени долини и густи дрвја", 
            "в) Огромни езера и водопади"],
          },
          {
            question: "Каква температура повеќе ви одговара?",
            answers: ["а) Студено, со снег и свеж планински воздух",
             "б) Умерено топло со сенка од густи шуми", 
            "в) Топло, со лесен ветер од езеротот"],
          },
          {
            question: "Дали претпочитате диви животни во вашата авантура?",
            answers: ["а) Да, сакам да видам диви кози, мечки и орли",
            "б) Да, но повеќе би сакал да набљудувам птици и елени",
            "в) Не многу, сакам повеќе да уживам во водените предели"],
          }
        ],
      },
      answers: [],
      score: 0,
      submit: false
    };
  },
  computed: {
    allQuestionsAnswered() {
      return this.answers.length === this.quiz.questions.length;
    }
  },
  methods: {
    selectAnswer(questionIndex, answer) {
        this.answers[questionIndex] = answer;
    },
    restartQuiz() {
      this.answers = [];
      this.score = 0;
      this.submit = false;
    },
    submitQuiz() {
  this.submit = true;
  this.score = 0; 

  this.answers.forEach((answer, questionIndex) => {
    const selectedIndex = this.quiz.questions[questionIndex].answers.indexOf(answer);
    if (selectedIndex !== -1) {
      this.score += selectedIndex + 1; 
    }
  });
}
  },
};
</script>
<style src="../../style.css"></style>