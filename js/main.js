// Global variables

const kmPrice = 0.21; // il prezzo del biglietto è definito in base ai km (0.21 € al km)
const minor = document.getElementById("age1");
const over65 = document.getElementById("age2");


let discount = 1; //no discount

// Button sends info onclick

const buttonConfirm = document.getElementById("inputConfirm");

buttonConfirm.addEventListener("click",

        function () {

            //USER INPUT

            const userName = document.getElementById("inputName").value; //Nome e Cognome

            const userKm = parseInt(document.getElementById("inputKm").value); // il numero di chilometri che vuole percorrere [userKm] 
            
            const userAge = document.getElementById("inputAge").value; // l’età del passeggero [userAge] (parseInt();)

            
            // SCONTO (?):

            if (userAge == "minorenne") { // IF userAge < 18 {sconto del 20%}

                discount = 0.2; //20%

            }else if (userAge == "over65") { // ELSE IF userAge >= 65 {sconto del 40%}
                
                discount = 0.4; //40%
            }

            
            // PREZZO BIGLIETTO

            let ticketPrice = (userKm * kmPrice);

            ticketPrice -= ticketPrice * discount

            
            console.log("Quantità Km: ", userKm); //Perché non esce il primo Log in console?
            console.log("Nome e Cognome Utente:", userName);
            console.log("discount value:", discount);
            console.log(`L'importo totale del biglietto sarà di ${(ticketPrice).toFixed(2)} euro`);

            //SHOW HIDDEN DIV

            
        }

);


   
// Output prezzo finale con massimo due decimali (.toFixed())

    // document.getElementById("output_id").innerHTML = `L'importo totale del biglietto sarà di ${(ticketPrice * discount).toFixed(2)} euro`;

    