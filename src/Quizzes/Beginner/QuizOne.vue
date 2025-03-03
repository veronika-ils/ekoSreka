<template>
  
    <div class="nav">
        <ul>
            <div >
            <router-link to="/"> <img src="../../img/home.png" class="home"></router-link>   
            </div>
            <div class="dropdown">

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
            <li v-for="(answer, answerIndex) in question.answers" :key="answerIndex" class="symbol">
              <button @click="selectAnswer(index, answer)" :class="{ selected: answers[index] === answer }" 
              :disabled="submit && answers[index] !== answer" >{{ answer }}</button>
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
      <button @click="submitQuiz" :disabled="!allQuestionsAnswered || submit">Submit Quiz</button>
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
  name:'QuizOne',
  data() {
    return {
      quiz: {
        title: " Eco Concepts 101",
        questions: [
          {
            question: "What are the three R's of the environment?",
            answers: ["Reduce, Replace, Recycle", "Reduce, Read, Ride",
             "Reduce, Reuse, Recycle", "Rearrange, Reduce, Recycle"],
            correctAnswer: "Reduce, Reuse, Recycle",
          },
          {
            question: "Which is a benefit of planting trees?",
            answers: ["Provides oxygen", "Reduces air quality", "Decreases carbon dioxide", "Destroys habitats"],
            correctAnswer: "Provides oxygen",
          },
          {
            question: "Which one of this is non-recyclable item?",
            answers: ["Porcelain tiles", "Steel cans", "Glass", "Jugs"],
            correctAnswer: "Porcelain tiles",
          },
          {
            question: "What is recycling?",
            answers: ["Throwing waste", "Reusing items", "Processing materials", "Burning trash"],
            correctAnswer: "Processing materials",
          },
          {
            question: "What is a greenhouse gas?",
            answers: [" Oxygen", "Carbon dioxide", "Nitrogen", "Helium"],
            correctAnswer: "Carbon dioxide",
          },
          {
            question: "True or False: Plants and trees release oxygen into the air.",
            answers: ["True", "False"],
            correctAnswer: "False",
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