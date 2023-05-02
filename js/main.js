// Global variables

const kmPrice = 0.21; // il prezzo del biglietto è definito in base ai km (0.21 € al km)

let discount = 0; //no discount

// Button sends info onclick
const buttonConfirm = document.getElementById("inputConfirm");
const formReset = document.getElementById("formReset");

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
        }else {
            discount = 0; //In teoria inutile specificarlo di nuovo, però altrimenti non genera nuovamente senza prima annullare tutto.
        }
        
        // PREZZO BIGLIETTO
        let ticketPrice = (userKm * kmPrice);
        ticketPrice -= ticketPrice * discount
        
        console.log("Quantità Km: ", userKm);
        console.log("Nome e Cognome Utente:", userName);
        console.log("discount value:", discount);
        console.log(`L'importo totale del biglietto sarà di ${(ticketPrice).toFixed(2)} euro`);

        //USER OUTPUT
        document.getElementById("outputName").innerHTML = userName;
        document.getElementById("outputPrice").innerHTML = (ticketPrice).toFixed(2) + "€";

            //OUTPUT SCONTO
            if (userAge == "minorenne") {
                document.getElementById("outputDiscount").innerHTML = "Sconto minorenne (20%)";
            }else if (userAge == "over65") {
                document.getElementById("outputDiscount").innerHTML = "Sconto over 65 (40%)";
            }else {
                document.getElementById("outputDiscount").innerHTML = "Biglietto Standard";
            }

        //SHOW HIDDEN TICKET
        const ticketPreview = document.getElementById("ticketPreview");
        console.log(ticketPreview);
        ticketPreview.style.display = "flex";
    }
);

formReset.addEventListener("click",
   
    //RESET ALL

    function resetAll() {
        history.go(0);
    }
);



    
   


    // document.getElementById("output_id").innerHTML = `L'importo totale del biglietto sarà di ${(ticketPrice * discount).toFixed(2)} euro`;

    