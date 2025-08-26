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
            
             <li class="this small"><router-link to="/3Page" class="none">    EN  </router-link>  </li>    
           <li class="small"> <router-link to="/MK3Page" class="none">   MK </router-link> </li>
            <li class="logo"> <img src="../../img/logo4.png"></li>  
        </ul>
     </div>

    
     <div class="fotop">
        <h1>Eco-Friendly Kitchen Alternatives: Reduce Waste and Protect the Planet</h1>
        <p>
        In modern living, a significant part of our daily habits generates enormous amounts of waste, especially in the kitchen. 
        From plastic bottles and bags to disposable utensils and packaging, our waste directly contributes to environmental pollution. 
        However, the good news is that with small changes in how we use and store food and beverages, 
        we can significantly reduce waste and live more sustainably.
    </p>

    <p>
        Sustainable alternatives not only help protect nature, but they also improve our convenience and save money in the long run. 
        If we start with small steps, such as using durable containers instead of plastic ones, we can contribute to a greener future.
    </p>

    <h2>Eco-Friendly Kitchen Alternatives:</h2>
    <ul class="nosym">
        <li>✅ Reusable Shopping Bag – Instead of buying plastic bags every time, use a reusable shopping bag</li>
        <li>✅ Glass Jar – A great alternative for storing food, spices, and beverages instead of plastic packaging</li>
        <li>✅ Reusable Tea Bags – Instead of using disposable tea bags, opt for metal or cotton filters</li>
        <li>✅ Bamboo Cutlery – Biodegradable and natural material that replaces plastic cutlery</li>
        <li>✅ Reusable Containers – Durable food containers instead of plastic and aluminum packaging</li>
        <li>✅ Tea Strainer – A great way to avoid using paper filters</li>
        <li>✅ Stainless Steel Water Bottle – With this, you can completely stop using plastic bottles</li>
        <li>✅ Reusable Sandwich Bags – Instead of throwing away plastic bags, use silicone or waxed bags</li>
        <li>✅ Reusable Cup – A great choice for coffee and tea instead of disposable cups</li>
        <li>✅ Fabric Food Covers – Replace plastic wrap with an eco-friendly alternative</li>
        <li>✅ Reusable Coffee Filter – Reduce waste from disposable paper filters</li>
    </ul>

    <p>
        Small steps lead to big changes! Start today and contribute to a healthier environment. 🌍♻️
    </p>
        <img src="../../img/ang3.jpg">
        
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
    name:'ThreePage',
   

}
</script>
<style src="../../style.css"></style>