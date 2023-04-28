// // Global variables
// const kmPrice = 0.21;
// let discount = 1; //no discount

// // chiedere all’utente (prompt();) :

//     // il numero di chilometri che vuole percorrere [userKm] (parseInt();)
//     const userKm = parseInt(prompt("Quanti chilometri devi percorrere?"));

//     // l’età del passeggero [userAge] (parseInt();)
//     const userAge = parseInt(prompt("Quanti anni hai?"));

// // calcolare il prezzo totale del viaggio, secondo queste regole:

//     // il prezzo del biglietto è definito in base ai km (0.21 € al km)
//     const ticketPrice = userKm * kmPrice;

//     // Sconto (?):

//         if (userAge < 18) { // IF userAge < 18 {sconto del 20%}

//             discount = 0.2; //20%

//         }else if (userAge >= 65) { // ELSE IF userAge >= 65 {sconto del 40%}
            
//             discount = 0.4; //40%
//         }
   
// // Output prezzo finale con massimo due decimali (.toFixed())

//     document.getElementById("output_id").innerHTML = `L'importo totale del biglietto sarà di ${(ticketPrice * discount).toFixed(2)} euro`;
