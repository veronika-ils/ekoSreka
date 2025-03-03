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
  name:'MKQuizThree',
  data() {
    return {
      quiz: {
        title: "Проучување на тајните на планетата",
        questions: [
          {
            question: "Што можете да направите за да помогнете во намалувањето на отпадот?",
            answers: ["Користете повеќе пластични кеси", "Рециклирајте остатоци од храна", "Фрлете сè во ѓубре", "Купувајте предмети за еднократна употреба"],
            correctAnswer: "Рециклирајте остатоци од храна",
          },
          {
            question: "Кој е главниот гас што придонесува за климатските промени?",
            answers:["Азот", "Јаглерод диоксид", "Кислород", "Водород"],
            correctAnswer: "Јаглерод диоксид",
          },
          {
            question: "Кој од овие е чист извор на енергија?",
            answers: ["Природен гас", "Нафта", "Сончева енергија", "Јаглен"],
            correctAnswer: "Сончева енергија",
          },
          {
            question: "Кој процент од водата на Земјата е безбеден за пиење?",
            answers: ["2.5%", "50%", "10%", "100%"],
            correctAnswer: "2.5%",
          },
          {
            question: "Што е поместување на јаглерод?",
            answers: ["Начин за намалување на јаглеродните отпечатоци со поддршка на еколошки проекти", "Нешто што го зголемува загадувањето", "Еден вид гориво", "Извор на енергија"],
            correctAnswer: "Начин за намалување на јаглеродните отпечатоци со поддршка на еколошки проекти",
          },
          {
            question: "Точно или неточно: рециклирањето помага во заштеда на ресурси и го намалува загадувањето.",
            answers: ["Точно", "Неточно"],
            correctAnswer: "Точно",
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