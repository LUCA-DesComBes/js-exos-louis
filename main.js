//Exo1

// function convertirCelsiusEnFahrenheit(celcius) {
//     let f;
//     f = celcius * 9/5 + 32;
//     return f;
// }
// console.log(convertirCelsiusEnFahrenheit(0));

//Exo2

// function sommeTroisNombres(a, b, c) {
//     let somme;
//     somme = a + b + c;
//     return somme;
// }
// console.log(sommeTroisNombres(5, 10, 15));

//Exo3

// function heuresEnSecondes(heures) {
//     let sec;
//     sec = heures*3600;
//     return sec;
// }
// console.log(heuresEnSecondes(2));

//Exo4

// function peutVoter(age, nationalite) {
//     if (age >= 18 && nationalite === "française") {
//         return "Eligible";
//     } else {
//         return "Non éligible";
//     }
// }
// console.log(peutVoter(20, "française"));
// console.log(peutVoter(16, "française"));
// console.log(peutVoter(20, "espagnole"));

//Exo5

// function tarif(age) {
//     if (age >= 5 && age <= 18) {
//         return "Réduit"
//     } else if (age < 5) {
//         return "Gratuit"
//     } else {
//         return "Plein tarif"
//     }
//   }
//   console.log(tarif(3));
//   console.log(tarif(15));
//   console.log(tarif(25));

//Exo4 avec le prompt
// let age = Number(prompt("Donne ton age!"))
// let nationalite = prompt("Donne ta nationalité!")

// if (age >= 18 && nationalite === "française") {
// 	console.log("Eligible");
// } else {
// 	console.log("Non éligible");
// }

//exo6
// let  i = 0

// while (i < 1001) {
//     if (i % 2 === 0 || i % 10 === 0) {
//         console.log(i)
//     }
//     i++;
// }

//Exo7

// let i = 0;
// let phrase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// console.log(phrase.split("").reverse().join(""));

//Exo8

// let n = Number(prompt("Demander un nombre"));
// n = 2 ** n;
// if (n >= 2 ** 8 && n <= 2 ** 10) {
// 	console.log(n);
// }
