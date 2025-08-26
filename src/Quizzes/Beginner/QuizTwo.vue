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
                        <li class="this small"><router-link to="/GreenAwareness" class="none">    EN  </router-link>  </li>    
           <li class=" small"> <router-link to="/MKGreenAwareness" class="none">   MK </router-link> </li>
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
  name:'QuizTwo',
  data() {
    return {
      quiz: {
        title: "Eco-Discovery Quiz",
        questions: [
          {
            question: "Which of the following is a renewable resource?",
            answers: ["Coal", "Natural gas", "Solar energy", "Nuclear energy"],
            correctAnswer: "Solar energy",
          },
          {
            question: "What does \"carbon footprint\" measure?",
            answers: ["Carbon emissions", "Water consumption", "Waste production", "Energy usage"],
            correctAnswer: "Carbon emissions",
          },
          {
            question: "What is deforestation?",
            answers: ["Protecting wildlife", "Planting trees", "Recycling paper", "Cutting down forests"],
            correctAnswer: "Cutting down forests",
          },
          {
            question: "What is an ecosystem?",
            answers: ["A waste product", "A community of living things", "A single species", "A type of pollution"],
            correctAnswer: "A community of living things",
          },
          {
            question: "What is overfishing?",
            answers: ["Fish farming", "Catching too many fish", "Catching too few fish", "Sustainable fishing"],
            correctAnswer: "Catching too many fish",
          },
          {
            question: "What is composting?",
            answers: ["Decomposing organic matter", " Burning trash", "Dumping waste", " Recycling plastic"],
            correctAnswer: "Decomposing organic matter",
          },
          {
            question: "True or False: Litter is a type of pollution.",
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