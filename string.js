//Question-1:-
var a="   ravipati";
var aa="surya  ";
var result=a.concat(" ",aa);
console.log(result.trim().toUpperCase());

//Question-2:-
var a="SAI DHARM TEJ";
var aa=a.slice(4,10);
console.log(aa.indexOf("M"));
console.log(aa.toLowerCase());

//Question-3:-
var a="a";
var aa="apple";
var result=a.concat(" ",aa);
console.log(result.toUpperCase().charAt(6));

//Question-4:-
var a="boravelli";
var aa="charan";
var result=a.charAt(0).toUpperCase()+a.slice(1,3)+aa.slice(3,5)+aa.charAt(5).toUpperCase()
console.log(result);

//Question-5:-
var a="  ocean  ";
var aa=a.trim();
var result=aa.charAt(0).toUpperCase()+aa.slice(1,4)+aa.charAt(4).toUpperCase()
var b="gayu";
var bb=result.slice(0,3);
console.log(b.concat(bb));

//Queation-6:-
var a="hello there , how are you";
var result=a.split(" ");
console.log(result.indexOf("are"));
