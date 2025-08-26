<template>
  
    <div class="nav">
          <ul>
              <div >
              <router-link to="/MKHomePage"> <img src="../../img/home.png" class="home"></router-link>   
              </div>
              <div class="my-dropdown">
  
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
                <li class=" small"><router-link to="/Eco-Recycling" class="none">    EN  </router-link>  </li>    
           <li class="this small"> <router-link to="/MKEco-Recycling" class="none">   MK </router-link> </li>  
          <li class="logo"> <img src="../../img/logo4.png"></li>  
          </ul>
       </div>
  
      
      <div class="quizzes">
        <h1 class="main-title">{{ quiz.title }}</h1>
      
        <h2 class="sub-title">Прашања</h2>
        <div v-for="(question, index) in quiz.questions" :key="index" class="question-block">

  <p class="question-text">{{ index + 1 }}. {{ question.question }}</p>
            <ul class="list">
              <li
  v-for="(answer, answerIndex) in question.answers"
  :key="answerIndex"
 class="answer-option"
>
  <button
    @click="selectAnswer(index, answer)"
    :class="{ selected: answers[index] === answer }"
    :disabled="submit && answers[index] !== answer"
  >
    {{ ['а', 'б', 'в', 'г', 'д'][answerIndex] }}) {{ answer }}
  </button>
</li>
            </ul>
           <div v-if="allQuestionsAnswered && submit" class="answer-feedback">
  <p
    v-if="answers[index] !== undefined"
    :class="isCorrect(index) ? 'user-answer correct-box' : 'user-answer wrong-box'"
  >
    Ваш одговор: {{ answers[index] }}
    <span v-if="isCorrect(index)">✅ Точно</span>
    <span v-else>❌ Неточно.</span>
  </p>
  <p v-if="!isCorrect(index)" class="correct-text">
    Точен одговор: {{ question.correctAnswer }}
  </p>
</div>
</div>

     
      <div>
      <div >
        <button @click="submitQuiz" :disabled="!allQuestionsAnswered || submit" class="fun-submit">Готово?</button>
      </div>
  
      <div v-if="allQuestionsAnswered && submit" class="score">
        <h2>Освоени поени:<br> <img src="../../img/trophy.png" class="imgs"> <span class="green">{{ score }}/{{ quiz.questions.length }}</span></h2>
        <span v-if="score>3"><h2>Браво!</h2></span>
        <button @click="restartQuiz" class="retry-button">Пробај повторно?</button>
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
    name:'MKQuizTwoI',
    data() {
      return {
        quiz: {
          title: "Колку Добро се Грижиш за Планетата?",
          questions: [
            {
              question: "Кое од следниве дејства најмногу придонесува за намалување на емисијата на штетни гасови?",
              answers: ["Садење дрвја", "Намалување на употребата на автомобил",
              "Редовно полевање на тревникот", "Користење на пластични кеси повторно"],
              correctAnswer: "Намалување на употребата на автомобил",
            },
            {
              question: "Што претставува концептот „нулт отпад“ (Zero Waste)?",
              answers:["Уништување на отпад со висока температура", "Систем за минимизирање или елиминирање на отпад преку рециклирање и повторна употреба", "Употреба на отпад за градежни материјал", "Создавање на отпад што може брзо да изгние"],
              correctAnswer: "Систем за минимизирање или елиминирање на отпад преку рециклирање и повторна употреба",
            },
            {
              question: "Која е најдобрата алтернатива за намалување на пластичниот отпад?",
              answers: ["Складирање на пластика дома", "Користење на торби за повеќекратна употреба", "Купување нови пластични производи наместо стари", "Секогаш користење на хартиени кеси "],
              correctAnswer: "Користење на торби за повеќекратна употреба",
            },
            {
              question: "Која е најеколошката опција за заштеда на енергија во домот?",
              answers: ["Употреба на LED светилки", " Исклучување на светлата кога не се користат", "Отворање на прозорци наместо користење клима уред", "Сите горенаведени"],
              correctAnswer: "Сите горенаведени",
            },
            {
              question: "Која од следниве активности не придонесува за заштита на водните ресурси?",
              answers: ["Намалување на времето за туширање","Рециклирање на отпад за намалување на загадувањето ","Фрлање на масло за готвење во тоалетот","Користење ефикасни чешми и тушеви"],
              correctAnswer: "Фрлање на масло за готвење во тоалетот",
            },
            {
              question: "Зошто е важно да се поддржуваат локални производи?",
              answers: ["Затоа што немаат потреба од конзерванс","Намалуваат емисиите од транспорт и поддржуваат локалната економија"," Затоа што тие се поевтини","Затоа што се поубаво пакувани"],
              correctAnswer: "Намалуваат емисиите од транспорт и поддржуваат локалната економија",
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