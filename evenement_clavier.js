<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    La fonction handleKeyDown(event) est appelée chaque fois qu’une touche est enfoncée. 
    Elle récupère le code de la touche (keyCode) à partir de l’objet event 
    et l’affiche dans l’élément HTML avec l’ID “output”.

         <!-- keydown -->

      <!-- <input type="text" id="myInput" onkeydown="handleKeyDown(event)">
        <p id="output"></p>

        <script>
        function handleKeyDown(event) {
        var keyCode = event.keyCode;
        var output = document.getElementById("output");
        output.textContent = "le code dyal lharf li ktbti: " + keyCode;
        }
    </script>

     keyup -->
    <input type="text" id="myInput" onkeyup="handleKeyUp(event)">
    <p id="output"></p>

    <script>
    function handleKeyUp(event) {
     var keyReleased =event.code; // Récupère la touche du clavier relâchée par l'utilisateur
  
  // Mettre à jour le contenu de l'élément <p> avec la touche du clavier relâchée
    document.getElementById("output").textContent = "Touche relâchée : " + keyReleased;
}


</script>
<!-- <input type="text" id="myInput" onkeypress="handleKeyPress(event)">
<p id="output"></p>

<script>
function handleKeyPress(event) {
  var keyPressed = event.key; 

  document.getElementById("output").textContent = "Touche pressée : " + keyPressed;
}
</script> -->

    
</body>
</html>