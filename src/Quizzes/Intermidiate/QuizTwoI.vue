<template>
    <div class="nav">
        <ul>
            <div>
                <router-link to="/HomePage"> <img src="../../img/home.png" class="home"></router-link>
            </div>
            <div class="my-dropdown">
                <img src="../../img/menu.png" class="icon">
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
                 <li class="this small"><router-link to="/Eco-Recycling" class="none">    EN  </router-link>  </li>    
           <li class="small"> <router-link to="/MKEco-Recycling" class="none">   MK </router-link> </li>   
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
            <div>
                <button @click="submitQuiz" :disabled="!allQuestionsAnswered || submit" class="fun-submit">Done?</button>
            </div>
            <div v-if="allQuestionsAnswered && submit" class="score">
                <h2>Points earned:<br> <img src="../../img/trophy.png" class="imgs"> <span class="green">{{ score }}/{{ quiz.questions.length }}</span></h2>
                <span v-if="score>3"><h2>Great job!</h2></span>
                <button @click="restartQuiz">Try Again?</button>
            </div>
        </div>
    </div>
    
    <div class="footer">
        <h1>Contact Us!</h1>
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
    name: 'QuizTwoI',
    data() {
        return {
            quiz: {
                title: "How Well Do You Take Care of the Planet?",
                questions: [
                    {
                        question: "Which of the following actions contributes the most to reducing harmful gas emissions?",
                        answers: ["Planting trees", "Reducing car usage", "Regularly watering the lawn", "Reusing plastic bags"],
                        correctAnswer: "Reducing car usage",
                    },
                    {
                        question: "What does the concept of 'Zero Waste' mean?",
                        answers: ["Destroying waste at high temperatures", "A system for minimizing or eliminating waste through recycling and reuse", "Using waste for building materials", "Creating waste that decomposes quickly"],
                        correctAnswer: "A system for minimizing or eliminating waste through recycling and reuse",
                    },
                    {
                        question: "What is the best alternative to reducing plastic waste?",
                        answers: ["Storing plastic at home", "Using reusable bags", "Buying new plastic products instead of old ones", "Always using paper bags"],
                        correctAnswer: "Using reusable bags",
                    },
                    {
                        question: "What is the most eco-friendly option for saving energy at home?",
                        answers: ["Using LED bulbs", "Turning off lights when not in use", "Opening windows instead of using air conditioning", "All of the above"],
                        correctAnswer: "All of the above",
                    },
                    {
                        question: "Which of the following activities does NOT contribute to protecting water resources?",
                        answers: ["Shortening shower time", "Recycling waste to reduce pollution", "Pouring cooking oil down the toilet", "Using efficient faucets and showers"],
                        correctAnswer: "Pouring cooking oil down the toilet",
                    },
                    {
                        question: "Why is it important to support local products?",
                        answers: ["Because they don’t need preservatives", "They reduce transport emissions and support the local economy", "Because they are cheaper", "Because they have better packaging"],
                        correctAnswer: "They reduce transport emissions and support the local economy",
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
        submitQuiz() {
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
