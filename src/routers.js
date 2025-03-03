import HomePage from './components/HomePage.vue'
import MKHomePage from './components/MKHomePage.vue';
import QuizesPage from './components/QuizesPage.vue'
import MKQuizesPage from './components/MKQuizesPage.vue';
import QuizOne from './Quizzes/Beginner/QuizOne.vue'
import ExampleOne from './components/Latest/ex1/ExampleOne.vue';
import { createRouter, createWebHistory } from "vue-router";
import QuizThree from './Quizzes/Beginner/QuizThree.vue';
import QuizTwo from './Quizzes/Beginner/QuizTwo.vue';
import ReagionalPage from './components/ReagionalPage.vue';
import MKFunPage from './components/MKFunPage.vue';
import QuizOneI from './Quizzes/Intermidiate/QuizOneI.vue';
import MKVideoPage from './components/MKVideoPage.vue';
import MKQuizOne from './MKQuizzes/Beginner/MKQuizOne.vue';
import MKQuizTwo from './MKQuizzes/Beginner/MKQuizTwo.vue';
import MKFotoPage from './components/MKFotoPage.vue';
import MKQuizThree from './MKQuizzes/Beginner/MKQuizThree.vue';
import MKQuizOneI from './MKQuizzes/Intermidiate/MKQuizOneI.vue';
import MKStorePage from './Store/MKStorePage.vue';
import StorePage from './Store/StorePage.vue';
import MKQuizTwoI from './MKQuizzes/Intermidiate/MKQuizTwoI.vue';
import MKQuizOneA from './MKQuizzes/Advanced/MKQuizOneA.vue';
import MKRegionalPage from './components/MKRegionalPage.vue';
import MKEnviromentPage from './components/MKEnviromentPage.vue';
import MKAbout from './components/MKAbout.vue';
import AboutPage from './components/AboutPage.vue';
import MK1Page from './components/PhotosforFotoPages/MK1Page.vue';
import MK2Page from './components/PhotosforFotoPages/MK2Page.vue';
import MK3Page from './components/PhotosforFotoPages/MK3Page.vue';
import FunPage from './components/FunPage.vue';
import MK1VideoPage from './components/VideosforVideoPage/MK1VideoPage.vue';
import MK2VideoPage from './components/VideosforVideoPage/MK2VideoPage.vue';
import MK3VideoPage from './components/VideosforVideoPage/MK3VideoPage.vue';
import MKBasicStarPage from './components/MKBasicStarPage.vue';
import MKStarPage from './components/StarSignsForStarPage/MKStarPage.vue';
import MKTodayPage from './components/MKTodayPage.vue';
import EnviromentPage from './components/EnviromentPage.vue';
import TodayPage from './components/TodayPage.vue';
import MKQuizOneF from './MKQuizzes/Fun/MKQuizOneF.vue';
import VideoPage from './components/VideoPage.vue';
import OneVideoPage from './components/ENVideosForVideoPage/OneVideoPage.vue';
import TwoVideoPage from './components/ENVideosForVideoPage/TwoVideoPage.vue';
import ThreeVideoPage from './components/ENVideosForVideoPage/ThreeVideoPage.vue';
import FotoPage from './components/FotoPage.vue';
import OnePage from './components/ENPhotosForFotoPage/OnePage.vue';
import TwoPage from './components/ENPhotosForFotoPage/TwoPage.vue';
import ThreePage from './components/ENPhotosForFotoPage/ThreePage.vue';
import StarPage from './components/StarSignsForStarPage/StarPage.vue';
import BasicStarPage from './components/BasicStarPage.vue';
import QuizOneA from './Quizzes/Advanced/QuizOneA.vue';
import QuizTwoI from './Quizzes/Intermidiate/QuizTwoI.vue';
import QuizOneF from './Quizzes/Fun/QuizOneF.vue';
import MKEtnaVulcano from './MKNews/MKWorld/MKEtnaVulcano.vue';
import EtnaVolcano from './News/World/EtnaVolcano.vue';
import MKWavesPage from './MKNews/MKWorld/MKWavesPage.vue';
import WavesPage from './News/World/WavesPage.vue';

const routes=[
    {
        name:'MKHomePage',
        component:MKHomePage,
        path:'/'
    },{
      name:'MKBasicStarPage',
      component:MKBasicStarPage,
      path:'/MKBasicStarPage'
    },{
      name:'MKStarPage',
      component:MKStarPage,
      path:'/MKStarPage'
    },{
      name:'QuizesPage',
      component:QuizesPage,
      path:'/Quizzes'
    },{
      name:'MKQuizOne',
      component:MKQuizOne,
      path:'/MKEcoConcepts'
    },{
      name:'QuizOne',
      component:QuizOne,
      path:'/EcoConcepts'
    },{
      name:'ExampleOne',
      component:ExampleOne,
      path:'/ExOne'
    },{
      name:'QuizThree',
      component:QuizThree,
      path:'/Eco-Discovery'
    },{
      name:'MKQuizThree',
      component:MKQuizThree,
      path:'/MKEco-Discovery'
    },{
      name:'QuizTwo',
      component:QuizTwo,
      path:'/GreenAwareness'
    },{
      name:'MKQuizTwo',
      component:MKQuizTwo,
      path:'/MKGreenAwareness'
    },{
      name:'ReagionalPage',
      component:ReagionalPage,
      path:'/Regional'
    },{
      name:'MKRegionalPage',
      component:MKRegionalPage,
      path:'/MKRegional'
    },{
      name:'QuizOneI',
      component:QuizOneI,
      path:'/Eco-Engagement'
    },{
      name:'MKQuizOneI',
      component:MKQuizOneI,
      path:'/MKEco-Engagement'
    },{
      name:'HomePage',
      component:HomePage,
      path:'/HomePage'
    },{
      name:'MKFunPage',
      component:MKFunPage,
      path:'/MKFunPage'
    },{
      name:'FunPage',
      component:FunPage,
      path:'/FunPage'
    },{
      name:'MKQuizesPage',
      component:MKQuizesPage,
      path:'/MKQuizzes'
    },{
      name:'MKVideoPage',
      component:MKVideoPage,
      path:'/MKVideoPage'
    },{
      name:'MKFotoPage',
      component:MKFotoPage,
      path:'/MKFotoPage'
    },{
      name:'FotoPage',
      component:FotoPage,
      path:'/FotoPage'
    },{
      name:'MKStorePage',
      component:MKStorePage,
      path:'/MKStorePage'
    },{
      name:'StorePage',
      component:StorePage,
      path:'/StorePage'
    },{
      name:'MKQuizTwoI',
      component:MKQuizTwoI,
      path:'/MKEco-Recycling'
    },{
      name:'QuizTwoI',
      component:QuizTwoI,
      path:'/Eco-Recycling'
    },{
      name:'MKQuizOneA',
      component:MKQuizOneA,
      path:'/MKEco-Quiz'
    },{
      name:'QuizOneA',
      component:QuizOneA,
      path:'/Eco-Quiz'
    },{
      name:'MKEnviroment',
      component:MKEnviromentPage,
      path:'/MKEnviroment'
    },{
      name:'MKAbout',
      component:MKAbout,
      path:'/MKAbout'
    },{
      name:'AboutPage',
      component:AboutPage,
      path:'/About'
    },{
      name:'MK1Page',
      component:MK1Page,
      path:'/MK1Page'
    },{
      name:'OnePage',
      component:OnePage,
      path:'/1Page'
    },{
      name:'TwoPage',
      component:TwoPage,
      path:'/2Page'
    },{
      name:'ThreePage',
      component:ThreePage,
      path:'/3Page'
    },{
      name:'MK2Page',
      component:MK2Page,
      path:'/MK2Page'
    },{
      name:'MK3Page',
      component:MK3Page,
      path:'/MK3Page'
    },{
      name:'MK1VideoPage',
      component:MK1VideoPage,
      path:'/MK1VideoPage'
    },{
      name:'MK2VideoPage',
      component:MK2VideoPage,
      path:'/MK2VideoPage'
    },{
      name:'MK3VideoPage',
      component:MK3VideoPage,
      path:'/MK3VideoPage'
    },{
      name:'MKTodayPage',
      component:MKTodayPage,
      path:'/MKTodayPage'
    },{
      name:'EnviromentPage',
      component:EnviromentPage,
      path:'/EnviromentPage'
    },{
      name:'TodayPage',
      component:TodayPage,
      path:'/TodayPage'
    },{
      name:'MKQuizOneF',
      component:MKQuizOneF,
      path:'/NationalPark'
    },{
      name:'QuizOneF',
      component:QuizOneF,
      path:'/ENNationalPark'
    },{
      name:'VideoPage',
      component:VideoPage,
      path:'/VideoPage'
    },{
      name:'OneVideoPage',
      component:OneVideoPage,
      path:'/1VideoPage'
    },{
      name:'TwoVideoPage',
      component:TwoVideoPage,
      path:'/2VideoPage'
    },{
      name:'ThreeVideoPage',
      component:ThreeVideoPage,
      path:'/3VideoPage'
    },{
      name:'StarPage',
      component:StarPage,
      path:'/StarPage'
    },{
      name:'BasicStarPage',
      component:BasicStarPage,
      path:'/BasicStarPage'
    },{
      name:'MKEtnaVulcano',
      component:MKEtnaVulcano,
      path:'/MKEtnaVulcano'
    } ,{
      name:'EtnaVolcano',
      component:EtnaVolcano,
      path:'/EtnaVolcano'
    },{
      name:'MKWavesPage',
      component:MKWavesPage,
      path:'/MKWavesPage'
    } ,{
      name:'WavesPage',
      component:WavesPage,
      path:'/WavesPage'
    }    
];
const router =createRouter({
  history:createWebHistory(),
  routes
})
export default router;