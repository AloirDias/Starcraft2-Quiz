var introduction = document.getElementById("introduction");
introduction.style.visibility = "visible";

var questions = [
    {
        question: "1. What day was Starcraft 2 released on?",
        a: "July 27, 2010",
        b: "May 19, 2007",
        c: "April 25, 2017",
        d: "August 14, 1998",
        e: "January 1, 2000",
        answer: "A"
    },
    {
        question: "2. What maximum players do you interact with in Multiplayer mode?",
        a: "1",
        b: "3",
        c: "7",
        d: "15",
        e: "49",
        answer: "C"
    },
    {
        question: "3. How is the 3 races called?",
        a: "Humans, Robots, Aliens",
        b: "Protoss, Zergs, Terrans",
        c: "Scientists, Warriors, Immortals",
        d: "Men, Women, Gods",
        e: "Human, Draenei, Orc",
        answer: "B"
    },
    {
        question: "4. What are the names of the two resources that support the game economy?",
        a: "Water and Fire",
        b: "Blood and Dust",
        c: "Dollars and Euros",
        d: "Mineral and Vespen gas",
        e: "Steel and Fire",
        answer: "A"
    },
    {
        question: "5. What is the name of the highest starcraft ranking?",
        a: "Gold",
        b: "Diamond",
        c: "Master",
        d: "Grandmaster",
        e: "Specialist",
        answer: "D"
    },
    {
        question: "6. Which symbol represents the zergs?",
        a: "<img src='images/1 200x200.jpg'>",
        b: "<img src='images/2 200x200.jpg'>",
        c: "<img src='images/3 200x200.jpg'>",
        answer: "A"
    },
    {
        question: "7. Which of these symbols represent the largest league?",
        a: "<img src='images/Tiers03.jpg'>",
        b: "<img src='images/Tiers01.jpg'>",
        c: "<img src='images/Tiers02.jpg'>",
        answer: "B"
    },
    {
        question: "8. Which symbol represents the terrans?",
        a: "<img src='images/1 200x200.jpg'>",
        b: "<img src='images/3 200x200.jpg'>",
        c: "<img src='images/2 200x200.jpg'>",
        answer: "B"
    },
    {
        question: "9. Which one is the greatest starcraft 2 player in history?",
        a: "<img src='images/Champ01.jpg'>",
        b: "<img src='images/Champ02.jpg'>",
        c: "<img src='images/Champ03.jpg'>",
        answer: "A"
    },
    {
        question: "10. Which symbol represents the protoss?",
        a: "<img src='images/3 200x200.jpg'>",
        b: "<img src='images/2 200x200.jpg'>",
        c: "<img src='images/1 200x200.jpg'>",
        answer: "A"
    },
    {
        question: "11. what is the name of the lowest starcraft ranking?",
        answer: "Bronze"
    },
    {
        question: "12. What is the name of the highest starcraft ranking?",
        answer: "Grandmaster"
    },
    {
        question: "13. What is the name of the best starcraft 2 player in history?",
        answer: "Serral"
    },
    {
        question: "14. What is the name of the best starcraft 2 player today?",
        answer: "Serral"
    },
    {
        question: "15. What is the nationality of today's best starcraft 2 player?",
        answer: "Finnish"
    }
];

var pos = 0;
var q = [20, 30, 40, 50, 60];
var points = 0;
var i = 0;





function play() {
    var checker = 0;
    for (i = 0; i < 5; i++) {
        do {
            pos = Math.floor(Math.random() * 14);
        }
        while ((i = 2 && pos < 10) || (i = 1 && pos < 5 && pos < 10) || (i = 0 && pos > 4) || pos == q[0] || pos == q[1] || pos == q[2] || pos == q[3]);
        q[i] = pos;
        displayQuestion(pos);
    }
}
       
       /*
        if (checker == 0) {
            if (i == 0) {
                pos = Math.floor(Math.random() * 4);
                q[i] = pos;
                displayQuestion(pos);
                alert("case 0" + pos)
                checker = 1;
            } else if (i == 1) {
                pos = Math.floor(Math.random() * 4) + 5;
                q[i] = pos;
                displayQuestion(pos);
                alert("case 1" + pos)
                checker = 1;
            } else if (i == 2) {
                pos = Math.floor(Math.random() * 4) + 10;
                q[i] = pos;
                displayQuestion(pos);
                alert("case 2" + pos)
                checker = 1;
            } else {
                do {
                    pos = Math.floor(Math.random() * 14);
                }
                while (pos == q[0] || pos == q[1] || pos == q[2] || pos == q[3]);
                q[i] = pos;
                displayQuestion(pos);
*/
   /* document.body.style.backgroundImage="url('images/sc2.jpg')";
    var right = document.getElementById("rightSide");
    right.style.visibility = "hidden";
    alert(points);*/


function displayQuestion(pos) {
    document.body.style.backgroundImage="url('images/sc2Left2.png')";
    introduction.style.visibility = "hidden";
    var right = document.getElementById("rightSide");
    right.style.visibility = "visible";
    
    if (pos < 5) {
        question = questions[pos].question;
        optionA = questions[pos].a;
        optionB = questions[pos].b;
        optionC = questions[pos].c;
        optionD = questions[pos].d;
        optionE = questions[pos].e;
            right.innerHTML = "";
            right.innerHTML += "<h4>" + question + "</h4>";
            right.innerHTML += "<form>";
            right.innerHTML += "<label class='container'>" + optionA + " <input type='radio' checked='checked' name='options' value='a'> <span class='checkmark'></span> </label><br>";
            right.innerHTML += "<label class='container'>" + optionB + " <input type='radio' name='options' value='b'> <span class='checkmark'></span> </label><br>";
            right.innerHTML += "<label class='container'>" + optionC + " <input type='radio' name='options' value='c'> <span class='checkmark'></span> </label><br>";
            right.innerHTML += "<label class='container'>" + optionD + " <input type='radio' name='options' value='d'> <span class='checkmark'></span> </label><br>";
            right.innerHTML += "<label class='container'>" + optionE + " <input type='radio' name='options' value='e'> <span class='checkmark'></span> </label><br><br>";
            right.innerHTML += "<button id='submitAnswer'>Submit Answer</button>";
            right.innerHTML += "</form>";
            document.getElementById("submitAnswer").addEventListener("click", checkAnswer());
    } else if (pos >= 5 && pos < 10) {
        question = questions[pos].question;
        optionA = questions[pos].a;
        optionB = questions[pos].b;
        optionC = questions[pos].c;
            right.innerHTML = "";
            right.innerHTML += "<h4>" + question + "</h4>";
            right.innerHTML += "<form>";
            right.innerHTML += "<label class='container'>" + optionA + " <input type='radio' checked='checked' name='options' value='a'> <span class='checkmark'></span> </label><br>";
            right.innerHTML += "<label class='container'>" + optionB + " <input type='radio' name='options' value='b'> <span class='checkmark'></span> </label><br>";
            right.innerHTML += "<label class='container'>" + optionC + " <input type='radio' name='options' value='c'> <span class='checkmark'></span> </label><br>";
            right.innerHTML += "<button id='submitAnswer'>Submit Answer</button>";
            right.innerHTML += "</form>";
            document.getElementById("submitAnswer").addEventListener("click", checkAnswer());   
    } else {
        question = questions[pos].question;
            right.innerHTML = "";
            right.innerHTML += "<h4>" + question + "</h4>";
            right.innerHTML += "<form>";
            right.innerHTML += "<input type='text' id='myText' value=''> </input>";
            right.innerHTML += "<button id='submitAnswer'>Submit Answer</button>";
            right.innerHTML += "</form>";
            document.getElementById("submitAnswer").addEventListener("click", checkAnswer());
    }
}

function checkAnswer() {
        
}