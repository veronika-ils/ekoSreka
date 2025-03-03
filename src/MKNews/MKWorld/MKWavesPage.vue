<template>
  
    <div class="nav">
          <ul>
              <div >
              <router-link to="/"> <img src="../../img/home.png" class="home"></router-link>   
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
               <li class="small" ><router-link to="/WavesPage" class="none">    EN  </router-link>  </li> 
               <li class="this small"><router-link to="/MKWavesPage" class="none">MK</router-link></li>
          <li class="logo"> <img src="../../img/logo4.png"></li>  
          </ul>
       </div>
       <h1 class="title">Брановите стануваат поголеми: Дали светот е подготвен?</h1>  
     
     
     <img src="../../img/waves.webp" class="below">

     <div class="date">
     <p >Понеделник, <br>24 Февруари 2025</p>   
     </div>
     <br>
     
     <div class="text">
        <p>Време потребно за читање: 3 минути</p>
       <p>Светот сега се соочува со еден нов природен предизвик – брановите во Јужниот океан растат побрзо и постојано стануваат поголеми. </p>
        <br>
        <p>Овој феномен, кој се должи на интензивните климатски промени и зголеменетата  морска активност, создава сериозни закани за прибрежните области, но истовремено отвора можности за нови иновативни решенија.</p>
И покрај ризиците, некои научници сметаат дека поголемите бранови може да донесат и позитивни ефекти, особено во контекстот на климатската криза. 
<p>Океанската енергија, добиена од движението на брановите, се смета за еден од најпотенцијалните извори на обновлива енергија. Со развојот на иновативни технологии, постои потенцијал да се искористи оваа природна сила за производство на зелена енергија, што ќе помогне во намалување на емисиите на штетни гасови.
Неколку истражувачки тимови и компании веќе работат на проекти за конверзија на енергијата од бранови.<br>
 Овие проекти имаат за цел да ги искористат новите можности кои ги нуди поголемата моќ на океанските движења, создавајќи системи за производство на електрична енергија кои не зависат од фосилни горива. Ова не само што би придонесло кон решавањето на енергетските предизвици, туку и би помогнало во борбата против климатските промени.
Додека растечките бранови во Јужниот океан претставуваат сериозна закана за прибрежните области, тие исто така нудат и уникатна можност за иновативни решенија во областа на обновлива енергија. 
</p>
<p>Со соодветни мерки и инвестиции, природната сила на поголемите бранови може да се претвори во клучен фактор во борбата против климатските промени, отварајќи пат кон одржлива и еколошки свесна иднина.
   </p>
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
    name:'MKWavesPage',
  }
  </script>
  <style src="../../style.css"></style>