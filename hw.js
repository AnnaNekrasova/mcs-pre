// Task 1
function hello () {
	return "Hello, world!";
}
;
console.log(hello());

// Task 2
function oneFor (str){
	if (str == undefined){
		console.log( "One for you, one me.");
	}
	else {console.log( "One for " + str + ", one for me.")};
	;
}
;
oneFor("Alice");
oneFor();

// Task 2
// function oneFor (str="you"){
// 	return "One for "+str+ ",one for me.";
// }
// ;
// console.log(oneFor());	

// Task 3 check
// function isLeap(year){
//  if (year%4==0){
//  	if(year%100!=0){
//  		return true;
//  	}
//  	if(year%400=0){
//  			return true;
//  	}
//  }
//  return false;
// }
// }
// ;
// console.log(isLeap(2013));

// Task 3 
function isLeap(year){
	return ((year%4===0) && (year%100!==0)||(year%400===0));
}
;
console.log(isLeap(2013));

// Task 4 

function reversed (str){
	var result = "";
	for (var i=str.length-1;i>=0;i--){ //это перебор массива с конца
		result+= str[i]
	}
	return result;
}
;
console.log(reversed('Moscow'));

// Task 5 Здесь можно применить механизм map.

const obj = {
	"T":"A",
	"G":"C",
	"C":"G",
	"A":"U"
}

const data = 'TGCA'
function transcript(str){
	var result = "";
	for (var i = 0; i< str.length; i++){ //это перебор массива с начала
		const letter =str[i];
		const new_letter = obj[letter]; //перебор по ключу
		result +=new_letter;
	}
	return result;
}
console.log(transcript(data));

// Task 5

// function transcript(str){
// 	return str.map(function(l){return obj[l]});
// }  //не работает тк метод мап работает только с массивом.

// const obj = {
// 	"T":"A",
// 	"G":"C",
// 	"C":"G",
// 	"A":"U"
// }
// ;
// console.log(["G", "C"].map(function(l => obj[l])); //check! it does not work.

// Task 6
//Ceaser Chiper

// console.log("A".charCodeAt()); //65
// console.log("Z".charCodeAt()); //90

// // console.log(String.fromCharCode(67)); //C

function encrypt (letter,step=3) {
	const letterIndex = letter.charCodeAt();
	var newLetterIndex = letterIndex+step;
	if(newLetterIndex>90){newLetterIndex-=26};
	if(newLetterIndex<65){newLetterIndex+=26};
	const newLetter = String.fromCharCode(newLetterIndex);
	return newLetter
}

console.log(encrypt("A"));

function encryptString (str,step){
	var result = "";
	for (var i = 0; i< str.length; i++){ //это перебор массива с начала
		const letter =str[i];
		const new_letter = encrypt(letter,step); //перебор по ключу
		result +=new_letter;
	}
	return result;
}
;
console.log(encryptString("ABBA",3));
console.log(encryptString("DEED",-3));

// // Task 7

function isPangram (str){
	str = str.toUpperCase(); //преобразуем все в капслок, чтобы упорядочить по номерам буквы
    var array = [];
    for (var i = 0; i< str.length; i++){ 
    	if(str[i] !== " "){ //в этом ифе мы убираем пробелы
    		array.push(str[i].charCodeAt());
    	}
    }
    array.sort();
	for (var i = 0; i< array.length - 1; i++){ //здесь пишем минус один тк у нас есть array[i+1] будщет последний элемент + следующий = андефайнд
    	const diff = array[i+1]-array[i];
    	if (diff >1){
    		return false;
    	}
    }
    return str.includes("A") && str.includes("A")
 };

console.log(isPangram("The quick brown fox jumps over the lazy dog"));

// Task 8
// Bob
function bob (str){
	if (str[str.length-1] == "?"){
		return "Sure."
	} if (str[str.length-1] == "!"){
		return "Woah, chill out!"
	} if (str===""){
		return "Fine.Be that way."
	}
	return "Whatever."
}
;
console.log(bob("Hi,bro!"));
console.log(bob("Are you okay?"));
console.log(bob(""));
console.log(bob("Wha"));