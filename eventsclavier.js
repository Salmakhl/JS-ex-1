<html>

<body>
    <!--         <input type="text" id="message">
        <script>
        
        let msg = document.getElementById('message');
        msg.addEventListener("keydown", (event) => {
            console.log("Key down: " + event.key);
        });
        msg.addEventListener("keypress", (event) => {
            console.log("Key press: " + event.key);
        });
        msg.addEventListener("keyup", (event) => {
            console.log("Key up: " + event.key);
        });
        
        </script> -->

    <input type="text" id="message">
    <script>
        let zone = document.getElementById('message');
        zone.addEventListener('keydown', (event) => {
            console.log(`key=${event.key},code=${event.code}`);
        });
    </script>
</body>

</html>