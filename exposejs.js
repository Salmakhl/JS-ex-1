<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
  <!-- <button onclick="console.log('helloo')" >click</button>


  <button onclick="afficher()"> clickkk</button>
  <script>
    function afficher() {
      alert("helllooooo");
    }
  </script>  -->



 <!-- <button id="btn">Click here</button>
  
<script>

    var btn = document.getElementById('btn');
    function clicked() { alert("hellooooooooo") } ;
    btn.onclick = clicked();

    //ou
   
    // btn.onclick = function () { console.log('clicked') };
   
    // ou
    // btn.onclick = () => (console.log('clicked') );

    // autre exemple
    // const btn = document.getElementById('btn');
    // btn.onclick = (event) => { console.log(event) };


</script> -->






    <!-- FOCUS /BLUR -->
     
     <!-- <input type="text" id="myInput" placeholder="Entrez quelque chose ici" onfocus="changer()" onblur="restore()">
     <script>
      
     function changer() {
       alert("youpiiiiiiiii");
       document.getElementById("myInput").blur();
      }
     
     
     
     function restore() {
       document.getElementById("myInput").style.backgroundColor = "pink";
     }
     </script> -->







   
     <!-- change -->

     <!-- <input type="text" id="myInput" placeholder="Entrez quelque chose ici" onchange="fctchange()">
        <p id="output">yey</p>

        <script>
        function fctchange() {
        var input = document.getElementById("myInput");
        var output = document.getElementById("output");
        output.textContent = "La valeur a été modifiée 🙂: " + input.value;
        }
        </script> -->



    <!-- select -->

    

    <!-- <textarea id="myTextarea" onselect="fctselect()" rows="4" cols="50" style="background-color: #f7d5f5; font-family: comic sans ms;">
        Sélectionnez une partie de ce texte.
        </textarea>
        <p id="output"></p>
      
        <script>
        function fctselect() {
          var selection = window.getSelection().toString(); 
          var output = document.getElementById("output");
          output.textContent = "Texte sélectionné : " + selection;k
        }
        </script> -->

    <!-- submit -->

    <!-- <form id="myForm" onsubmit="handleSubmit(event)">
        <label for="name">Nom :</label><br>
        <input type="text" id="name" name="name"><br>
        <label for="email">Email :</label><br>
        <input type="email" id="email" name="email"><br><br>
        <input type="submit" value="Submit">
      </form>
      
      <script>
      function handleSubmit(event) {
        event.preventDefault(); 
        var form = document.getElementById("myForm");
        var formData = new FormData(form);
        
        console.log("Données du formulaire : ", formData);
      }
      </script> -->
    
 
    // abort

    <!-- <img src="" alt="Example Image" id="myImage" onabort="handleAbort()">
    <p id="output"></p>

    <script>
    function handleAbort() {
    var output = document.getElementById("output");
    output.textContent = "Le chargement de l'image a été annulé.";
    } -->

    
// Dans cet exemple, l'événement "abort" ne sera déclenché que si le chargement de l'image est annulé, par exemple, si l'image n'existe pas ou si le chargement est interrompu pour une autre raison.

</script> 
</body>
</html>