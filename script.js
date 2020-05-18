<html>
<link href="style.css" rel="stylesheet">
<head>
    <meta charset="UTF-8">
</head>
    
<body>
    <div class="header">
        <h1>Learn Japenese !!! </h1>
        <p>Test Kanji</p>
    </div> 

    <div class = "test">
        <form action="will see later">
            <input type="checkbox" name="Lesson" value="treize">Lesson 13<br>
            <input type="checkbox" name="Lesson" value="quatorze">Lesson 14<br>
            <input type="checkbox" name="Lesson" value="quinze">Lesson 15<br>
        </form>            
    </div>

    <div class = "test" id="texte">
        <button class="button button5 start-btn"><i class=""></i>New game</button>
        <div class="Kanji-romanji" id="romanji">Ca arrive</div>
    </div>

    <div class = "test" id = "image">
        <button class="button button5 result-btn"><i class=""></i>Show result</button>
        <img src="" alt="Kanji_image" class="Kanji_image">
    </div>

    <div class = "test">
        <button class="button button5 addReview-btn"><i class=""></i>Wrong</button>
        <button class="button button5 next-btn"><i class=""></i>Next</button>
    </div>

    <div id="myProgress">
        <div id="myBar"></div>
    </div>
</body>

<script src = 'script.js'></script>
<script src = 'script_varible.js'></script>
</html>
