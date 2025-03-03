<template>
    <div class="nav">
        <ul>
            <div>
                <router-link to="/HomePage"> <img src="../../img/home.png" class="home"></router-link>
            </div>
            <div class="dropdown">
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
                        :disabled="submit && answers[index] !== answer">{{ answer }}</button>
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
                <button @click="submitQuiz" :disabled="!allQuestionsAnswered || submit">Submit Quiz</button>
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
    name: 'QuizOneA',
    data() {
        return {
            quiz: {
                title: "Challenge for True Guardians of the Planet",
                questions: [
                    {
                        question: "Which gas has the largest share in causing the greenhouse effect?",
                        answers: ["Methane (CH₄)", "Nitrous Oxide (N₂O)", "Carbon Dioxide (CO₂)", "Ozone (O₃)"],
                        correctAnswer: "Carbon Dioxide (CO₂)",
                    },
                    {
                        question: "Which of the following is the best indicator of an ecosystem's health?",
                        answers: ["Number of trees", "Biodiversity", "Air quality", "Rainfall level"],
                        correctAnswer: "Biodiversity",
                    },
                    {
                        question: "What is the main cause of acid rain?",
                        answers: ["Emission of methane and ammonia", "Volcanic activity", "Increased CO₂ levels in the atmosphere", "Emission of sulfur dioxide (SO₂) and nitrogen oxides (NOx)"],
                        correctAnswer: "Emission of sulfur dioxide (SO₂) and nitrogen oxides (NOx)",
                    },
                    {
                        question: "What does the term 'ecological footprint' mean?",
                        answers: ["A measure of human impact on the environment through resource consumption", "The amount of waste generated by a household", "Total electricity consumption at home", "Water quality used in industrial processes"],
                        correctAnswer: "A measure of human impact on the environment through resource consumption",
                    },
                    {
                        question: "What is the largest carbon reservoir on Earth?",
                        answers: ["Oceans", "Polar ice caps", "Tropical forests", "Atmosphere"],
                        correctAnswer: "Oceans",
                    },
                    {
                        question: "What is the world's largest source of renewable energy?",
                        answers: ["Solar energy", "Geothermal energy", "Wind energy", "Hydropower (hydroelectric plants)"],
                        correctAnswer: "Hydropower (hydroelectric plants)",
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
