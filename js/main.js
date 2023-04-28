// Global variables

const kmPrice = 0.21; // il prezzo del biglietto è definito in base ai km (0.21 € al km)
const minor = document.getElementById("age1");
const over65 = document.getElementById("age2");


let discount = 1; //no discount

// Button sends info onclick

const buttonConfirm = document.getElementById("inputConfirm");

buttonConfirm.addEventListener("click",

        function () {

            // Calcolo prezzo biglietto

            const userKm = parseInt(document.getElementById("inputKm").value); // il numero di chilometri che vuole percorrere [userKm] 
            
            const userAge = document.getElementById("inputAge").value; // l’età del passeggero [userAge] (parseInt();)

            const ticketPrice = userKm * kmPrice;

                // Sconto (?):

                if (userAge == "minorenne") { // IF userAge < 18 {sconto del 20%}

                    discount = 0.2; //20%

                }else if (userAge == "over65") { // ELSE IF userAge >= 65 {sconto del 40%}
                    
                    discount = 0.4; //40%
                }

            
            console.log("Quantità Km: ", userKm); //Perché non esce il primo Log in console?
            console.log("discount value: ", discount);
            console.log(`L'importo totale del biglietto sarà di ${(ticketPrice * discount).toFixed(2)} euro`);
        }

);


   
// Output prezzo finale con massimo due decimali (.toFixed())

    // document.getElementById("output_id").innerHTML = `L'importo totale del biglietto sarà di ${(ticketPrice * discount).toFixed(2)} euro`;

    