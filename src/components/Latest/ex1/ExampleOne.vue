<template>
<div class="nav">
        <ul>
            <div >
            <router-link to="/"> <img src="../../../img/home.png" class="home"></router-link>   
            </div>
            <div class="dropdown">

                 <img  src="../../../img/menu.png" class="icon">   
                
                <div class="dropdown-content">
                    <a href="#">Environment</a>
                    <a href="#">Education/Science</a>
                    <a href="#"><router-link to="/Regional">Regional</router-link></a>
                    <a href="#">World</a>
                    <a href="#"><router-link to="/Quizzes">Quiz</router-link></a>
                    <a href="#">Entertainment</a>
                </div>
             </div>
            
            <li class="this">EN</li>
            <li>MK</li>
        <li class="logo"> <img src="../../../img/logo4.png"></li>  
        </ul>
     </div>
     
      <h1 class="title">Title</h1>  
     
     
     <img src="../../../img/demo.jpg" class="below">

     <div class="date">
     <p >Tuesday, 01 September 2024</p>   
     </div>
     <br>
     
     <div class="text">
        <p>Reading Time: 4 minutes</p>
        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend erat et mauris tincidunt finibus.<br> Sed lacinia finibus ultricies. Aenean et nisl et dolor pharetra scelerisque vel eget magna. Maecenas posuere lacus vel orci consequat ultrices. Nulla blandit ultricies lorem ut dictum. Phasellus a fermentum lorem, ut tempor quam.</p><p> Nam nec nibh vel libero ornare laoreet. Proin porta finibus augue ac maximus. Vivamus mollis eu tellus non blandit. In malesuada arcu lacus, rutrum cursus orci ornare semper. Sed tincidunt dictum rutrum. Cras lacus massa, dignissim quis dui non, efficitur sagittis urna. Ut blandit nibh eget rutrum auctor. Nunc sed ipsum eu mauris imperdiet mattis. Phasellus ac tortor lobortis, consequat purus ut, imperdiet diam. In hac habitasse platea dictumst.

Praesent ac sagittis mi, ac lobortis neque.</p> <p>In eu nisi eleifend ligula molestie maximus quis nec est.<br> Aliquam quis quam nisl. Vestibulum quis velit sed lectus pellentesque condimentum convallis non elit. Vestibulum finibus commodo lobortis. Phasellus eu sagittis dolor. In in orci pulvinar, posuere justo a, porttitor ipsum. Sed nec fermentum sapien. Donec ut vehicula neque. Nulla sed porta neque. Mauris imperdiet ligula et mauris fermentum volutpat. Nulla tristique est consequat diam mollis vestibulum. Donec convallis magna in blandit consectetur. Nunc scelerisque, quam et pharetra egestas, eros magna tincidunt turpis, pulvinar sagittis dui diam et mauris.

In fermentum ut lorem eu mollis. Nunc a finibus tellus.<br> Ut nec euismod tellus. Vivamus hendrerit nisi a nibh tristique, id volutpat urna efficitur. Vestibulum tempus tincidunt erat, nec venenatis nibh posuere scelerisque. Duis mattis condimentum nisi sit amet tristique. Ut lobortis volutpat ligula id blandit. Sed sed pulvinar mi, at varius massa.</p>
     </div>
     <div class="footer">
        <h1>Connect with us</h1>
        
        <table>
            <tr>
                <td>
                  <img src="../../../img/insta.png">  
                </td>
                <td><p>@ecosrekja</p></td>
            </tr>
            <tr>
                <td>
                    <img src="../../../img/face.png">
               
                </td>
                <td><p>@ecosrekja</p></td>
            </tr>
            <tr>
                <td>    
               <img src="../../../img/mail.png"> 
                </td>
                <td><p>ecosrekja@gmail.com</p></td>
            </tr>
        </table>
             
        
    </div>
</template>
<script>
export default{
    name:'ExampleOne'
}
</script>
<style src="../../../style.css"></style>