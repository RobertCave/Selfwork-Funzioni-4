// Selfwork Funzioni 4
// Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.

//     Primo step: eliminare gli spazi e i segni di punteggiatura:
//     Suggerimento: Puoi eliminare spazi e segni di punteggiatura usando → str.replace(/\W/g, "")

// Esempio:
//     Input: “i topi non avevano nipoti”
//     Output: true



function elimina_spazi(str){

    let stringa=str.replace(/\W/g, "");
    return stringa;
}

function is_palindrome(str) {
    
    str2=str.split('').reverse().join('');

    if (str == str2) {
        return true;

    }   else {

        return false;
    }
    
}


let stringa = elimina_spazi(prompt("Inserisci la frase da analizzare"));

console.log(is_palindrome(stringa));




