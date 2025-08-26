<template>
  
    <div class="nav">
        <ul>
            <div >
            <router-link to="/"> <img src="../../img/home.png" class="home"></router-link>   
            </div>
            <div class="my-dropdown">

                 <img  src="../../img/menu.png" class="icon">   
                
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
                   <li class="this small"><router-link to="/Eco-Discovery" class="none">    EN  </router-link>  </li>    
           <li class=" small"> <router-link to="/MKEco-Discovery" class="none">   MK </router-link> </li>  
             <li class="logo"> <img src="../../img/logo4.png"></li>   
        </ul>
     </div>

    <div class="quizzes">
      <h1>{{ quiz.title }}</h1>
    
      <h2>Questions</h2>
      <ol>

        <li v-for="(question, index) in quiz.questions" :key="index">
          <p>{{ question.question }}</p>
          <ul class="list">
            <li
  v-for="(answer, answerIndex) in question.answers"
  :key="answerIndex"
  class="symbol"
>
  <button
    @click="selectAnswer(index, answer)"
    :class="{ selected: answers[index] === answer }"
    :disabled="submit && answers[index] !== answer"
  >
    {{ String.fromCharCode(97 + answerIndex) }}) {{ answer }}
  </button>
</li>
          </ul>
          <div v-if="allQuestionsAnswered && submit">
           <p v-if="answers[index] !== undefined">
            Your answer: {{ answers[index] }} 
            <span v-if="isCorrect(index)">✅ Correct</span>
            <span v-else>❌ Incorrect.<br> Correct answer: {{ question.correctAnswer }}</span>
          </p> 
          </div>
        </li>

      </ol>
   
    <div>
    <div >
      <button @click="submitQuiz" :disabled="!allQuestionsAnswered || submit" class="fun-submit">Done?</button>
    </div>

    <div v-if="allQuestionsAnswered && submit" class="score">
      <h2>Your Score:<br> <img src="../../img/trophy.png" class="imgs"> <span class="green">{{ score }}/{{ quiz.questions.length }}</span></h2>
      <span v-if="score>3"><h2>Great Job!</h2></span>
      <button @click="restartQuiz">Try Again?</button>
    </div>
     </div>
  </div>
  <div class="footer">
        <h1>Connect with us</h1>
        
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
  name:'QuizThree',
  data() {
    return {
      quiz: {
        title: "Eco-Discovery Quiz: Uncovering Our Planet's Secrets",
        questions: [
          {
            question: "What can you do to help reduce waste?",
            answers: ["Use more plastic bags", "Compost food scraps", "Throw everything in the trash", "Buy single-use items"],
            correctAnswer: "Compost food scraps",
          },
          {
            question: "What is the main gas that contributes to climate change?",
            answers: ["Nitrogen", "Carbon Dioxide", "Oxygen", " Hydrogen"],
            correctAnswer: "Carbon Dioxide",
          },
          {
            question: "Which of these is a clean energy source?",
            answers: ["Natural Gas", "Oil", "Solar Power", "Coal"],
            correctAnswer: "Solar Power",
          },
          {
            question: "What part of the Earth's water is safe to drink?",
            answers: ["2.5%", "50%", "10%", "100%"],
            correctAnswer: "2.5%",
          },
          {
            question: "What is a carbon offset?",
            answers: [" A way to reduce carbon footprints by supporting eco-friendly projects", "Something that increases pollution", "A type of fuel", "An energy source"],
            correctAnswer: " A way to reduce carbon footprints by supporting eco-friendly projects",
          },
          {
            question: "True or False: Recycling helps save resources and reduces pollution.",
            answers: ["True", "False"],
            correctAnswer: "True",
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