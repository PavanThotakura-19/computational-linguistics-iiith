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
    document.getElementById("demo1").innerHTML +="<button style='margin:16px'>"+item+"</button>"
}
function list(selectedobject){
document.getElementById("demo1").innerHTML=""
document.getElementById("demo").innerHTML="<b>Form a sentence (Declarative or Interrogative or any other type) from the given words<b><br><i>(select the buttons in proper order)<i>"   
  var input=selectedobject.value
  if(input=="null"){
      alert("select language")
  }
else if (input=="english") {
    var corpus1=[
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
    var number=Math.floor(Math.random()*(corpus1.length));
    var str=corpus1[number];
    var array=str.split(" ");
    var final=shuffle(array);
    final.forEach(myfunction);
   
}
 else if (input=="hindi"){
    var corpus2=[
        "राम और श्याम बाजार गयें",
        "राम सोया और श्याम भी",
        "मैंने उसे बताया कि राम सो रहा है",
        "राम खाकर सोया",
        "बिल्लियों को मारकर कुत्ता सो गया",
        "एक लाल किताब वहाँ है",
        "एक बड़ी सी किताब वहाँ है",	
    ];
    var number1=Math.floor(Math.random()*(corpus2.length));
    var str1=corpus2[number1]
    var array1=str1.split(" ")
    var final1=shuffle(array1)
    final1.forEach(myfunction)
    
 } 
}