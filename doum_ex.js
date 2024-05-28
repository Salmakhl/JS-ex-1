<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table border="1" width="300" height="100" style="text-align: center;" cellspacing="0" id="table">
    <tr>
        <td id="td1">colonne 1</td>
        <td>donnée 1</td>
    </tr>
    
    <tr >
        <td id="td2">colonne 2</td>
        <td>donnée 2</td>
    </tr>
    </table><br><br>
    <form >
        <input type="text" placeholder="colonne 1" id="input1">
        <input type="text" placeholder="colonne 2" id="input2">
        
    </form>
    <button onclick="ajouter()">ajouter</button>
    <script>
        function ajouter (){
        var in1 = document.getElementById("input1").value;
        var in2 = document.getElementById("input2").value;
        var tab = document.getElementById("table");
        var ligne = document.createElement("tr");
        var colone = document.createElement("td");
        var colone2 = document.createElement("td");

        tab.appendChild(ligne);
        ligne.appendChild(colone);
        ligne.appendChild(colone2);
        
        colone.innerText= in1;
        colone2.innerText= in2;

        document.getElementById("input1").value ="";
        document.getElementById("input2").value ="";
        }
        
    </script>
</body>
</html>