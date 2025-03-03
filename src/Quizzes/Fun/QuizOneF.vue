<template>
    <div class="nav">
        <ul>
            <div>
                <router-link to="/HomePage"> <img src="../../img/home.png" class="home"></router-link>
            </div>
            <div class="dropdown">
                <img src="../../img/menu.png" class="icon">
                <div class="dropdown-content">
                    <a href="#"><router-link to="/Environment">Environment</router-link></a>
                    <a href="#"><router-link to="/Regional">Macedonia and the Region</router-link></a>
                    <a href="#"><router-link to="/TodayPage">The World Today</router-link></a>
                    <a href="#"><router-link to="/Quizzes">Quizzes</router-link></a>
                    <a href="#"><router-link to="/FunPage">Entertainment</router-link></a>
                    <a href="#"><router-link to="/About">About Us</router-link></a>
                    <span class="homeD">
                        <a href="#"><router-link to="/">Home</router-link></a>
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
            </li>
        </ol>
    
        <div>
            <div>
                <button @click="submitQuiz" :disabled="!allQuestionsAnswered || submit">Submit Quiz</button>
            </div>
            <div v-if="allQuestionsAnswered && submit" class="score">
                <span v-if="score<=6">
                    <h2>🏔️ You should visit Mavrovo National Park!</h2>
                    <img src="../../img/mavrovo.jpg" alt="Mavrovo" class="park">
                </span>
                <span v-if="score>6 & score<=11">
                    <h2>🌲 You should visit Pelister National Park!</h2>
                    <img src="../../img/pelister.jpg" alt="Pelister" class="park">
                </span>
                <span v-if="score>11">
                    <h2>🌊 You should visit Galicica National Park!</h2>
                    <img src="../../img/galicica.jpg" alt="Galicica" class="park">
                </span>
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
    name: 'QuizOneF',
    data() {
        return {
            quiz: {
                title: "Which National Park Should You Visit?",
                questions: [
                    {
                        question: "What kind of nature do you like the most?",
                        answers: ["a) Mountains with high peaks", "b) Dense forests and waterfalls", "c) Lakes and pastoral landscapes"],
                    },
                    {
                        question: "Which type of activity attracts you the most?",
                        answers: ["a) Hiking and mountaineering", "b) Walking through forests and wildlife observation", "c) Kayaking and camping by the lake"],
                    },
                    {
                        question: "Which landscape relaxes you the most?",
                        answers: ["a) Rugged cliffs and snowy peaks", "b) Green valleys and dense trees", "c) Vast lakes and waterfalls"],
                    },
                    {
                        question: "What kind of temperature do you prefer?",
                        answers: ["a) Cold, with snow and fresh mountain air", "b) Moderately warm with shade from dense forests", "c) Warm, with a light breeze from the lake"],
                    },
                    {
                        question: "Do you prefer wildlife in your adventure?",
                        answers: ["a) Yes, I want to see wild goats, bears, and eagles", "b) Yes, but I would rather observe birds and deer", "c) Not much, I prefer to enjoy water landscapes"],
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
