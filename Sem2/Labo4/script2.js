const maakMetSpaties = (inputText) => {
    let result = "";
    for (let i = 0; i < inputText.length; i++) {
        result += inputText.charAt(i) + " ";
    }
    return result;
};

function printInput() {
    const input = document.getElementById("inputField").value;
    const spacedInput = maakMetSpaties(input);
    console.log(spacedInput);
}

let tekst = "Man bijt hond met valse tanden";
let zoekwoord = "hond";
let positie = tekst.indexOf(zoekwoord);
if (positie !== -1) {
    console.log(`Het woord "${zoekwoord}" komt voor op positie ${positie} in de tekst.`);
} else {
    console.log(`Het woord "${zoekwoord}" komt niet voor in de tekst.`);
}