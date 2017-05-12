var body = document.querySelector("body");
var isPurple = false;

setInterval(function() {
    if (isPurple) {
        body.style.background = "white";
    }
    else {
        // body.style.background = "#FF2400";
    }

    isPurple = !isPurple;
}, 1000);




var btn0 = document.getElementById('btn0');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
var btn6 = document.getElementById('btn6');




btn0.addEventListener("click", function(){
    document.getElementById("answer0").innerHTML = printTime()
});

btn1.addEventListener("click", function(){
    var year = parseInt(document.getElementById("year").value); 

    document.getElementById('answer1').innerHTML = leapYear(year);
});


btn2.addEventListener("click", function(){
    document.getElementById('answer2').innerHTML = guessGame();
});

btn3.addEventListener("click", function(){
    var string = String(document.getElementById("String").value); 
    var letter = String(document.getElementById("Letter").value); 

    console.log(typeof string);
    console.log(typeof letter);
    console.log(string);
    console.log(letter);
    console.log(numberOfLetters(letter, string));
    document.getElementById("answer3").innerHTML = numberOfLetters(letter, string);
});


btn4.addEventListener("click", function(){


    var arrayOne = document.getElementById("array1").value;
    var array1 = [];
    var num = "";
    for (i = 0; i < arrayOne.length; i++) {
        

        num = num + arrayOne[i];

        if (arrayOne[i] === " ") {
            array1.push(parseInt(num));
            num = "";
            
        } else if (i === arrayOne.length -1) {
            array1.push(parseInt(num));
        }

    }
    console.log(array1)

    document.getElementById("answer4").innerHTML = arrayToMinMax(array1);
});


btn5.addEventListener("click", function(){
    document.getElementById('answer5').innerHTML = allProperties(superman);
});


btn6.addEventListener("click", function(){
    document.getElementById('answer6').innerHTML = printer(library);
});










































function printTime() {
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        //monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var time = new Date();
    var day = daysOfWeek[time.getDay()];
    var hour = time.getHours();
    var minute = time.getMinutes();
    var date = time.getDate();
    var month = time.getMonth();
    var year = time.getFullYear();
    return ("Today is: " + day + ", " + hour + ":" + minute + " " + date + "/" + (month + 1) + "/" + year)
}

// function leapYear(year) {
//     if (year % 4 === 0) {
//         if (year % 100 === 0) {
//             if (year % 400 === 0) {
//                 return true;
//             }
//             return false;
//         }
//         return true;
//     }
//     return false;
// }


function leapYear(year) {
    if (year % 4 !== 0) {
        return false;
    }
    
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            }
            return false;
        }
        return true;
    }
}









function guessGame() {
    var randNum = Math.ceil(20 * Math.random());
    console.log(randNum)
    var tries = 0
    while (true) {
        var guess = parseInt(prompt("Guess a number from 1 - 20"));
        tries++;
        console.log(guess, randNum);
        if (randNum === guess) {
            return ("You guessed Correctly in: " + tries);
        }
    }
}

function numberOfLetters(letter, string) {
    var num = 0;
    for (var i = 0; i < string.length; i++) {
        if (letter === string[i]) {
            num++;
            console.log(num)
        }
    }
    return num;
}

function arrayToMinMax(array) {
    var min = array[0];
    var max = array[0];
    for (i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
        if (array[i] > max) {
            max = array[i];
        }
    }
    return [max, min];
}

function allProperties(misterObject) {
    var numberOfProps = 0;
    for (var key in misterObject) {
        console.log(key, misterObject[key]);
        numberOfProps++;
    }
    return (numberOfProps);
}

var superman = {
    name: "superman",
    "real name": "Clark Kent",
    height: 75,
    weight: 235,
    hero: true
}

var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];


function printer(arrayOfObj) {
    for (var i = 0; i < arrayOfObj.length; i++) {
        if (arrayOfObj[i]["readingStatus"] ===  true) {
            console.log("I am reading '"+ arrayOfObj[i]["title"] + "' by " + arrayOfObj[i]["author"])
        } else {
            console.log("I will '"+ arrayOfObj[i]["title"] + "'' by " + arrayOfObj[i]["author"])
        }
    }
}