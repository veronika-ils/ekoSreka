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
            <div v-if="allQuestionsAnswered && submit">
             <p v-if="answers[index] !== undefined">
              Ваш одговор: {{ answers[index] }} 
              <span v-if="isCorrect(index)">✅ Точно</span>
              <span v-else>❌ Неточно.<br> Точен одговор: {{ question.correctAnswer }}</span>
            </p> 
            </div>
          </li>
  
        </ol>
     
      <div>
      <div >
        <button @click="submitQuiz" :disabled="!allQuestionsAnswered || submit">Submit Quiz</button>
      </div>
  
      <div v-if="allQuestionsAnswered && submit" class="score">
        <h2>Освоени поени:<br> <img src="../../img/trophy.png" class="imgs"> <span class="green">{{ score }}/{{ quiz.questions.length }}</span></h2>
        <span v-if="score>3"><h2>Браво!</h2></span>
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
    name:'MKQuizOneA',
    data() {
      return {
        quiz: {
          title: "Предизвик за Вистински Чувари на Планетата",
          questions: [
            {
              question: "Кој гас има најголем удел во предизвикувањето на ефектот на стаклена градина?",
              answers: ["Метан (CH₄)", "Азотен оксид (N₂O)",
              "Јаглерод диоксид (CO₂)", "Озон (O₃)"],
              correctAnswer: "Јаглерод диоксид (CO₂)",
            },
            {
              question: "Кој од следниве е најдобар индикатор за здравјето на еден екосистем?",
              answers:["Бројот на дрвја", "Разновидноста на видови (биодиверзитет)", "Квалитетот на воздухот", "Нивото на врнежи"],
              correctAnswer: "Разновидноста на видови (биодиверзитет)",
            },
            {
              question: "Која е главната причина за кисели дождови?",
              answers: ["Емисија на метан и амонијак", 
              "Вулканска активност", 
              "Зголемено ниво на CO₂ во атмосферата",
               "Емисија на сулфур диоксид (SO₂) и азотни оксиди (NOx)"],
              correctAnswer: "Емисија на сулфур диоксид (SO₂) и азотни оксиди (NOx)",
            },
            {
              question: "Што претставува поимот „еколошки отпечаток“ (ecological footprint)?",
              answers: ["Мерка за влијанието на човекот врз животната средина преку потрошувачка на ресурси", "Количината на отпад што ја создава едно домаќинство", 
              "Вкупната потрошувачка на електрична енергија во домот", " Квалитетот на водата што се користи во индустриски процеси"],
              correctAnswer: "Мерка за влијанието на човекот врз животната средина преку потрошувачка на ресурси",
            },
            {
              question: "Кој е најголемиот резервоар на јаглерод на Земјата?",
              answers: ["Океаните","Поларните ледници","Тропските шуми","Атмосферата"],
              correctAnswer: "Океаните",
            },
            {
              question: "Кој е најголемиот извор на обновлива енергија во светот?",
              answers: ["Соларна енергија","Геотермална енергија"
              ,"Ветроенергија","Хидроенергија (хидроцентрали)"],
              correctAnswer: "Хидроенергија (хидроцентрали)",
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
      isCorrect(index) {
        return this.answers[index] === this.quiz.questions[index].correctAnswer;
      },
      restartQuiz() {
        this.answers = [];
        this.score = 0;
        this.submit = false;
      },
      submitQuiz(){
        this.submit = true;
        this.score = 0; 
  
      this.answers.forEach((answer, index) => {
    if (answer === this.quiz.questions[index].correctAnswer) {
      this.score++; 
         }
      });
      }
    },
  };
  </script>
  <style src="../../style.css"></style>