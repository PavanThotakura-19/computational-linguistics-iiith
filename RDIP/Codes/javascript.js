var englishSentences = [
    "John ate an apple before afternoon",
    "some students like to study in the night",
    "John and Mary went to church",
    "John went to church after eating",
    "did he go to market",
    "the woman who called my sister sells cosmetics",
    "John goes to the library and studies",
    "John ate an apple so did she",
    "the teacher returned the book after she noticed the error",
    "I told her that I bought a book yesterday",
];

var hindiSentences = [
    "राम और श्याम बाजार गयें",
    "राम सोया और श्याम भी",
    "मैंने उसे बताया कि राम सो रहा है",
    "राम खाकर सोया",
    "बिल्लियों को मारकर कुत्ता सो गया",
    "एक लाल किताब वहाँ है",
    "एक बड़ी सी किताब वहाँ है",	
];

var engCorrectSentences1 = ["John ate an apple before afternoon",
"before afternoon John ate an apple",	
"John before afternoon ate an apple"
];
var engCorrectSentences2 = ["some students like to study in the night",
"at night some students like to study"
];
var engCorrectSentences3 = ["John and Mary went to church",
"Mary and John went to church"
];
var engCorrectSentences4 = ["John went to church after eating",	
"after eating John went to church",
"John after eating went to church"];
var engCorrectSentences5 = ["did he go to market",	
"he did go to market"];
var engCorrectSentences6 = ["the woman who called my sister sells cosmetics",
"the woman who sells cosmetics called my sister",
"my sister who sells cosmetics called the woman",
"my sister who called the woman sells cosmetics"
];
var engCorrectSentences7 = ["John goes to the library and studies",
"John studies and goes to the library"
];
var engCorrectSentences8 = ["John ate an apple so did she",
"she ate an apple so did John"
];
var engCorrectSentences9 = ["the teacher returned the book after she noticed the error",
"the teacher noticed the error after she returned the book",
"after the teacher returned the book she noticed the error",
"after the teacher noticed the error she returned the book",
"she returned the book after the teacher noticed the error",
"she noticed the error after the teacher returned the book",
"after she returned the book the teacher noticed the error",
"after she noticed the error the teacher returned the book"
];
var engCorrectSentences10 = ["I told her that I bought a book yesterday",
"I told her yesterday that I bought a book",
"yesterday I told her that I bought a book",
"I bought a book that I told her yesterday",
"I bought a book yesterday that I told her",	
"yesterday I bought a book that I told her"
];
var hindiCorrectSentences1 = ["राम और श्याम बाजार गयें",
"राम और श्याम गयें बाजार",
"बाजार गयें राम और श्याम",
"गयें बाजार राम और श्याम"
];
var hindiCorrectSentences2 = ["राम सोया और श्याम भी",
"श्याम सोया और राम भी",
"सोया श्याम और राम भी",
"सोया राम और श्याम भी"
];
var hindiCorrectSentences3 = ["मैंने उसे बताया कि राम सो रहा है",
"मैंने उसे बताया कि सो रहा है राम",
"उसे मैंने बताया कि राम सो रहा है",
"उसे मैंने बताया कि सो रहा है राम",
"मैंने बताया उसे कि राम सो रहा है",
"मैंने बताया उसे कि सो रहा है राम",
"उसे बताया मैंने कि राम सो रहा है",
"उसे बताया मैंने कि सो रहा है राम",
"बताया मैंने उसे कि राम सो रहा है",
"बताया मैंने उसे कि सो रहा है राम",
"बताया उसे मैंने कि राम सो रहा है",
"बताया उसे मैंने कि सो रहा है राम"
];
var hindiCorrectSentences4 = ["राम खाकर सोया",
"खाकर राम सोया",
"राम सोया खाकर",
"खाकर सोया राम",
"सोया राम खाकर",
"सोया खाकर राम"
];
var hindiCorrectSentences5 = ["बिल्लियों को मारकर कुत्ता सो गया",	
"मारकर बिल्लियों को कुत्ता सो गया",	 
"बिल्लियों को मारकर सो गया कुत्ता",	
"मारकर बिल्लियों को सो गया कुत्ता",	
"कुत्ता सो गया बिल्लियों को मारकर",	
"कुत्ता सो गया मारकर बिल्लियों को",	
"सो गया कुत्ता बिल्लियों को मारकर",
"सो गया कुत्ता मारकर बिल्लियों को"
];
var hindiCorrectSentences6 = ["एक लाल किताब वहाँ है",
"एक लाल किताब है वहाँ",
"वहाँ है एक लाल किताब",
"है वहाँ एक लाल किताब"
];
var hindiCorrectSentences7 = ["एक बड़ी सी किताब वहाँ है",	
    "एक बड़ी सी किताब है वहाँ",
    "बड़ी सी एक किताब वहाँ है",
    "बड़ी सी एक किताब है वहाँ",
    "वहाँ है एक बड़ी सी किताब",
    "वहाँ है बड़ी सी एक किताब",
    "है वहाँ एक बड़ी सी किताब",
    "है वहाँ बड़ी सी एक किताब",
    ];


var selectedLanguage;
var randomNumber;
var selectedSentance;
var sentanceArray;
var shuffeledArray;
var numberOfClicks = 0;
var inputSentace = "";
var validationArray = [];
var togglebutton=false;

function renderDynamicButtons(selectedObj){
    document.getElementById("buttons").innerHTML = "";
    document.getElementById("dynamic-sentance").innerHTML = "";
    document.getElementById("message").innerHTML = '';
    document.getElementById("sentance-txt2").style.display = "none";
    document.getElementById("reform-btn").style.display = 'none';
    document.getElementsByClassName("text1")[0].style.display = 'inline';
    document.getElementById("check-sen-btn").style.display = 'none';
    document.getElementById("answers").innerHTML = '';
    document.getElementById("display-ans-btn").style.display = "none"; 
    selectedLanguage = selectedObj.value;
    if(selectedLanguage == "null"){
        alert("select language");
    }
    else if (selectedLanguage == "english") {
        randomNumber = Math.floor(Math.random()*(englishSentences.length));
        selectedSentance = englishSentences[randomNumber];
        sentanceArray = selectedSentance.split(" ");
        shuffeledArray = shuffle(sentanceArray);
        shuffeledArray.forEach(myfunction);
    }
    else if (selectedLanguage=="hindi"){      
        randomNumber = Math.floor(Math.random()*(hindiSentences.length));
        selectedSentance = hindiSentences[randomNumber];
        sentanceArray = selectedSentance.split(" ");
        shuffeledArray = shuffle(sentanceArray);
        shuffeledArray.forEach(myfunction);
    } 
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
}

function myfunction(item){
    document.getElementById("buttons").innerHTML +="<button class='dyn-btns' onclick = onButtonClick(this) value="+item+" style='margin:16px;cursor:pointer'>"+item+"</button>"
}

function onButtonClick(dis){
    numberOfClicks++;
    document.getElementsByClassName("text2")[0].style.display = 'inline';
    if(numberOfClicks == 1){
        document.getElementById("reform-btn").style.display = 'inline';
        document.getElementById("sentance-txt2").style.display = 'inline';
    }   
    var val = dis.value;
    document.getElementById("dynamic-sentance").innerHTML +=" "+val;
    dis.style.display = 'none';
    if(numberOfClicks == shuffeledArray.length){
        document.getElementById("check-sen-btn").style.display = 'inline';
        inputSentace += val;
    }
    else{
        inputSentace += val+" ";
    }
}

function reformSentance(dis){
    var ele = document.getElementsByClassName("dyn-btns");
    for (var i = 0; i < ele.length; i++ ) {
        ele[i].style.display = "inline";
    }
    document.getElementById("dynamic-sentance").innerHTML = "";
    document.getElementById("sentance-txt2").style.display = "none";
    document.getElementById("reform-btn").style.display = 'none';
    document.getElementById("check-sen-btn").style.display = 'none';
    document.getElementById("message").innerHTML = '';
    document.getElementById("answers").innerHTML = '';
    document.getElementById("display-ans-btn").style.display = "none"; 
    numberOfClicks = 0;
    inputSentace = '';
}

function validation(inputArray){
    validationArray = inputArray;
    for (var i = 0; i < inputArray.length; i++ ) {
        if(inputArray[i] == inputSentace){
            return true;
        }  
    }
    return false;
}

function validateSentace(dis){
    var isValid = false;
    if(selectedLanguage == "english"){
        switch (randomNumber+1){
            case 1:
                isValid = validation(engCorrectSentences1);
                break; 
            case 2:
                isValid = validation(engCorrectSentences2);
                break;
            case 3:
                isValid = validation(engCorrectSentences3);
                break;
            case 4:
                isValid = validation(engCorrectSentences4);
                break;
            case 5:
                isValid = validation(engCorrectSentences5);
                break;
            case 6:
                isValid = validation(engCorrectSentences6);
                break;
            case 7:
                isValid = validation(engCorrectSentences7);
                break;
            case 8:
                isValid = validation(engCorrectSentences8);
                break;
            case 9:
                isValid = validation(engCorrectSentences9);
                break;
            case 10:
                isValid = validation(engCorrectSentences10);
                break;
            default: 
                isValid = false;
                break;
        }
    }
    else{
        switch (randomNumber){
            case 1:
                isValid = validation(hindiCorrectSentences1);
                break; 
            case 2:
                isValid = validation(hindiCorrectSentences2);
                break;
            case 3:
                isValid = validation(hindiCorrectSentences3);
                break;
            case 4:
                isValid = validation(hindiCorrectSentences4);
                break;
            case 5:
                isValid = validation(hindiCorrectSentences5);
                break;
            case 6:
                isValid = validation(hindiCorrectSentences6);
                break;
            case 7:
                isValid = validation(hindiCorrectSentences7);
                break;
            default: 
                isValid = false;
                break;
        }
    }
    document.getElementById("message").innerHTML = isValid ? "<center><h2>Right Answer!!!</h2></center>" : "<center><h2>Wrong Answer!!! </h2></center>";
    document.getElementById("display-ans-btn").style.display = "inline"; 
}


function toggleAnswers(dis){
    togglebutton = !togglebutton;
    if(togglebutton){ 
        document.getElementById("answers").innerHTML = "";
        document.getElementById("display-ans-btn").value="Hide the answers"
            for (var i = 0; i < validationArray.length; i++ ) {
            document.getElementById("answers").innerHTML += "<center><p>"+validationArray[i]+"</p></center>";
        }
    }
    else{
        document.getElementById("answers").innerHTML = "";
        document.getElementById("display-ans-btn").value="Get answers";
    }       
}
