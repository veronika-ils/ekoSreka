<template>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <div class="nav">
        <ul>
            <div >
            <router-link to="/"> <img src="../img/home.png" class="home"></router-link>   
            </div>
            <div class="dropdown">

                 <img  src="../img/menu.png" class="icon">   
                
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
            
             <li class="small" ><router-link to="/About" class="none">    EN  </router-link>  </li> 
            <li class="this small"><router-link to="/MKAbout" class="none">MK</router-link></li>
        <li class="logo"> <img src="../img/logo4.png"></li>  
        </ul>
     </div>

    <div class="fade-in">
      <img src="../img/before1.jpg" class="first">
      <img src="../img/after1.jpg" class="second">
      <img src="../img/arrow.png" class="third">
    </div>

    <div class="body1">
        <h1>Нашата цел</h1>
        <p>Еко Среќа е веб-портал чија цел е да инспирира и да го поттикне проширувањето на знаењето кое придонесува 
            за подигање на свеста за заштита и унапредување на животната средина. Нашата мисија е да придонесеме за истакнување на 
            важноста на грижата од сите институции и засегнати страни вклучени во животната средина на забавен, но реален, објективен, 
            точен и непристрасен начин. За да се постигне оваа цел, 
            од суштинско значење е образованието на различни општествени групи, што се надеваме дека ќе го постигнеме.</p>
            <br>
            <p class="remove">
                Еко Среќа е посветена на поттикнување на подлабоко разбирање на еколошките прашања и инспиративна колективна 
                акција за одржлива иднина. Нашата визија е да создадеме платформа која не само што ги информира, туку и ги поттикнеме  
                поединците и заедниците да преземат значајни чекори кон чување на животната средина. Преку работилници, написи и 
                интерактивни содржини, се стремиме да поврземе различни групи и да поттикнеме соработка во справувањето со еколошките предизвици. 
                Заедно, можеме да изградиме заедница која ја цени и штити нашата планета за генерациите што доаѓаат.


            </p>
    </div>
    
   <div class="logobig">
    <img src="../img/logo4.png">
   </div>
        <div class="marketing">
            <p>ПР,МАРКЕТИНГ,МЕДИУМИ,РЕКЛАМИРАЊЕ,КОМУНИКАЦИИ</p>
        </div>
    
        <div class="footer">
        <h1>Пишете ни!</h1>
        
        <table>
            <tr>
                <td>
                  <img src="../img/insta.png">  
                </td>
                <td><p>@ecosrekja</p></td>
            </tr>
            <tr>
                <td>
                    <img src="../img/face.png">
               
                </td>
                <td><p>@ecosrekja</p></td>
            </tr>
            <tr>
                <td>    
               <img src="../img/mail.png"> 
                </td>
                <td><p><a href="mailto:ecosrekja@gmail.com">ecosrekja@gmail.com</a></p></td>
            </tr>
        </table>
             
        
    </div>
    
</template>
<script>

export default {
    name:'MKAbout',
   

}
</script>
<style src="../style.css"></style>