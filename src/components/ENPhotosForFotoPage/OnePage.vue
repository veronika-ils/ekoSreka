<template>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <div class="nav">
        <ul>
            <div >
            <router-link to="/HomePage"> <img src="../../img/home.png"  class="home"></router-link> 
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
            
             <li class="this small"><router-link to="/1Page" class="none">    EN  </router-link>  </li>    
           <li class="small"> <router-link to="/MK1Page" class="none">   MK </router-link> </li>
            <li class="logo"> <img src="../../img/logo4.png"></li>  
        </ul>
     </div>

    
     <div class="fotop">
        <h1>Guide to Plastic Recycling: How to Contribute to a Cleaner Environment?</h1>

    <p>
        Plastic is a material widely present in our daily lives – from food packaging and water bottles to storage containers and industrial materials. 
        However, not all types of plastic are equally suitable for recycling, making proper selection and waste management a crucial step in protecting the environment.
    </p>

    <p>
        This guide presents different types of plastic, their usage, and their recyclability. By better understanding these categories, we can make more 
        conscious choices about the products we use, dispose of them properly, and help reduce pollution.
    </p>

    <h2>Why is it important to know how plastic is recycled?</h2>
    <ul class="nosym">
        <li>✅ We preserve natural resources and reduce the need for new plastic production.</li>
        <li>✅ We lower greenhouse gas emissions and mitigate the effects of climate change.</li>
        <li>✅ We protect flora and fauna from the harmful impact of plastic waste.</li>
        <li>✅ We reduce water and soil pollution.</li>
    </ul>

    <p>
        Each type of plastic has its own code, indicating how easy or difficult it is to recycle. 
        By recognizing these symbols and disposing of waste properly, we can contribute to a sustainable future for everyone.
    </p>

    <h2>Categories of Plastic and Their Recyclability:</h2>
    <ul class="symbolfoto">
        <li class="easy">PET (1) – Water bottles, spice packaging → ✅ Easy to recycle</li>
        <li class="easy">HDPE (2) – Milk jugs, shampoo bottles → ✅ Easy to recycle</li>
        <li class="difficult">PVC (3) – Pipes, plastic film → ❌ Difficult to recycle</li>
        <li class="moderate">LDPE (4) – Grocery bags and wraps → 🟠 Can be recycled</li>
        <li class="moderate">PP (5) – Yogurt and sour cream containers → 🟠 Can be recycled</li>
        <li class="difficult">PS (6) – Takeout food containers, coffee cups → ❌ Difficult to recycle</li>
        <li class="difficult">O (7) – Other materials like nylon, acrylic, and fiberglass → ❌ Difficult to recycle</li>
    </ul>

    <p>
        Remember – every small step we take toward proper recycling is a big contribution to a cleaner environment! 
    </p>
        <img src="../../img/ang1.png">
        
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
    name:'OnePage',
   

}
</script>
<style src="../../style.css"></style>