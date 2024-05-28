<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #myElement {
            width: 200px;
            height: 200px;
            background-color: lightblue;
        }
    </style>
</head>
<body>
        <!-- mouseover -->

    <div id="monDiv" style="width:50px;height:30px;background-color:lightblue;">
      hihi
    </div>
    
    <script>
    document.getElementById("monDiv").onmouseover = function() {
        alert("wiwiwiwi");
    };
    

    //   mouseout 

    document.getElementById("monDiv").onmouseout = function() {
        alert("yeeeeeeeeeeey");
      };
    </script>



    <!-- mousemove -->

<div id="myElement"></div>
<p id="output">Position de la souris sur l'élément : </p>

<script>
// Sélection de l'élément sur lequel nous voulons détecter le mouvement de la souris
var element = document.getElementById("myElement");

// Sélection de l'élément <p> pour afficher la position de la souris sur l'élément
var output = document.getElementById("output");

// Fonction pour mettre à jour la position de la souris sur l'élément lorsque l'événement "mousemove" est déclenché
function handleMouseMove(event) {
  var rect = element.getBoundingClientRect(); // Obtient la taille et la position de l'élément par rapport à la fenêtre du navigateur
  var mouseX = event.clientX - rect.left; // Position horizontale de la souris sur l'élément
  var mouseY = event.clientY - rect.top; // Position verticale de la souris sur l'élément
  
  // Mettre à jour le contenu de l'élément <p> avec la position de la souris sur l'élément
  output.textContent = "Position de la souris sur l'élément : " + mouseX + ", " + mouseY;
}

// Ajouter un écouteur d'événements pour l'événement "mousemove" sur l'élément spécifique
element.addEventListener("mousemove", handleMouseMove);
</script>





</body>
</html>