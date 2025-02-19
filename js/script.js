/* 
Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

ragioniamo un secondo

1. genero un ciclo for che scorre i numeri da 1 a 100

2. genero la condizione dove se il numero è divisibile per 3 e per 5 stampo FizzBuzz

3. idem con patate se è divisibile per 5 ma stampo solo Buzz

4. se invece l'elemento dell'array è divisibile per 3 stampo Fizz

5. stampo il numero

*/
//mi fingerò professionale e quindi ora scriverò tutto in inglese.

//EXERCISE
// create a for loop that goes from 1 to 100
for (let i = 1; i <= 100; i++) {

// now i create a condition where if the number is divisible by 3 and 5 i print FizzBuzz
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");


// generate the condition where if the number is divisible by 5 I print Buzz
    } else if (i % 3 === 0) {
        console.log("Fizz");    


// in the end if the number is divisible by 3 I print Fizz
    } else if (i % 5 === 0) {
        console.log("Buzz");
    }  console.log(i);
    
}


