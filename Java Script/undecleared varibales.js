<body>
    <h2>JavaScript variables </h2>

    <p>In this exaples x, y , z, are undecleared.</p>
    <p>They are automatically decleared when first used.</p>

    <p id="demo"></p>

    <script>
        x = 4;
        y = 5;
        z = x + y;
        document.getElmentById("demo").innerHTML =
        "The value of z is: " + z;
    </script>
</body>