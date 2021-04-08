export default function ceasarCipher(string, shift){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    return(
        string.split("")
            .map(char =>{
                if(char.match(/[a-z]/i)){
                    let shiftedIndex = alphabet.indexOf(char.toLowerCase()) + shift;
                    if(shiftedIndex < 0){
                        shiftedIndex = 26 + (shiftedIndex % 26);
                    }
                    if(char === char.toUpperCase()){
                        return alphabet[shiftedIndex % 26].toUpperCase();
                    }
                    return alphabet[shiftedIndex % 26];
                }
                else{
                    return char
                }
            }) 
            .join("")
    );
}