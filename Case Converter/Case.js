function toUpperCase() {
    let text = document.querySelector("textarea").value;
    document.querySelector("textarea").value = text.toUpperCase();
}

function toLowerCase() {
    let text = document.querySelector("textarea").value;
    document.querySelector("textarea").value = text.toLowerCase();
}

function toProperCase() {
    let text = document.querySelector("textarea").value.split(" ");
    let properText = []
    for (let word of text) {
        let properWord = word.charAt(0).toUpperCase().concat(word.slice(1));
        properText.push(properWord)
    }
    document.querySelector("textarea").value = properText.join(" ");
}

function toSentenceCase() {
    let sentences = document.querySelector("textarea").value.toLowerCase().split(". ");
    let properSentences = []
    for (let sentence of sentences) {
        let properSentence = sentence.charAt(0).toUpperCase().concat(sentence.slice(1));
        properSentences.push(properSentence);
    }
    document.querySelector("textarea").value = properSentences.join(". ");
}

