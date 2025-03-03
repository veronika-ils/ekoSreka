<template>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <div class="nav">
        <ul>
            <div >
            <router-link to="/HomePage"> <img src="../../img/home.png"  class="home"></router-link> 
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
            
             <li class="this small"><router-link to="/2Page" class="none">    EN  </router-link>  </li>    
           <li class="small"> <router-link to="/MK2Page" class="none">   MK </router-link> </li>
            <li class="logo"> <img src="../../img/logo4.png"></li>  
        </ul>
     </div>

    
     <div class="fotop">
        <h1>Recycle for a Cleaner and Greener Future!</h1>
        <p>
        Recycling is one of the simplest yet most powerful ways to protect our planet. 
        By properly sorting and disposing of waste, we can significantly reduce pollution, 
        conserve natural resources, and contribute to a healthier environment.
    </p>

    <h2>Why is it important to recycle?</h2>
    <ul class="nosym">
        <li>✅ We reduce the amount of waste that ends up in landfills</li>
        <li>✅ We conserve energy that would be used to produce new materials</li>
        <li>✅ We protect nature from the harmful effects of plastic and other waste materials</li>
        <li>✅ We improve the cleanliness of our communities and reduce air, soil, and water pollution</li>
    </ul>

    <p>Recycle the following materials:</p>
    <ul class="symbolfoto">
        <li> Paper – Newspapers, magazines, books, old documents, food packaging</li>
        <li> Plastic bottles – Water and juice bottles, shampoo and detergent containers, plastic bags</li>
        <li> Glass bottles – Jars, beverage bottles, and other glass containers</li>
        <li> Cardboard – Milk and juice cartons, food packaging</li>
        <li> Metals – Aluminum cans, tin cans, aerosol sprays</li>
    </ul>

    <h2>How to recycle properly?</h2>
    <p>
        Wash and dry plastic and glass bottles before disposing of them  
        Remove metal caps and plastic lids from bottles  
        Cut or flatten cardboard boxes to save space  
        Always dispose of recyclable materials in the appropriate bins  
        Every small step we take contributes to a better world.  
        <br>
        Please recycle these items, and together we can create a cleaner future!  
    </p>
        <img src="../../img/ang2.jpg">
        
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
    name:'TwoPage',
   

}
</script>
<style src="../../style.css"></style>