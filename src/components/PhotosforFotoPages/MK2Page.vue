<template>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <div class="nav">
        <ul>
            <div >
            <router-link to="/"> <img src="../../img/home.png" class="home"></router-link>   
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
            
             <li class="small" ><router-link to="/2Page" class="none">    EN  </router-link>  </li> 
            <li class="this small"><router-link to="/MK2Page" class="none">MK</router-link></li>
        <li class="logo"> <img src="../../img/logo4.png"></li>  
        </ul>
     </div>

    
     <div class="fotop">
        <h1>Рециклирајте за Почиста и Позелена Иднина!</h1>
        <p>  Рециклирањето е еден од наједноставните, но најмоќни начини да ја заштитиме нашата планета.
             Со правилно сортирање и одложување на отпадот, можеме значително да го намалиме загадувањето, 
             да ги зачуваме природните ресурси и да придонесеме за поздрава животна средина.</p>
            <h2>Зошто е важно да рециклираме?</h2>
<ul class="nosym">
    <li>✅ Го намалуваме количеството на отпад што завршува на депониите</li>
    <li>✅ Ја зачувуваме енергијата што би се користела за производство на нови материјали</li>
    <li>✅ Ја заштитуваме природата од штетното влијание на пластиката и другите отпадни материјали</li>
    <li>✅ Ја подобруваме чистотата на нашите заедници и го намалуваме загадувањето на воздухот, почвата и водата</li>
</ul>
<p>Рециклирајте ги следниве материјали:</p>
<ul class="symbolfoto">
    <li> Хартија – Весници, списанија, книги, стари документи, пакувања од храна</li>
    <li>Пластични шишиња – Шишиња за вода и сокови, амбалажи од шампони и детергенти, пластични ќеси</li>
    <li>Стаклени шишиња – Тегли, шишиња од пијалаци и други стаклени садови</li>
    <li>Картон – Кутии од млеко, сокови, пакувања од прехранбени производи</li>
    <li>Метали – Алуминиумски лименки, конзерви, аеросолни спрејови</li>
</ul>

<h2>Како да рециклирате правилно?</h2>
<p>
 Измијте ги и исушете ги пластичните и стаклените шишиња пред да ги одложите
Отстранете ги металните капачиња и пластичните затворачи од шишињата
Пресечете или сплескајте ги картонските кутии за да заземат помалку простор
Секогаш фрлајте ги рециклабилните материјали во соодветните контејнери
Со секој мал чекор што го преземаме, придонесуваме за подобар свет. 
<br>
Ве молиме рециклирајте ги овие предмети и заедно да создадеме почиста иднина!  
</p>

        <img src="../../img/mk2.png">
        
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
    name:'MK2Page',
   

}
</script>
<style src="../../style.css"></style>