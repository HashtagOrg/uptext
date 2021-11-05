function uppText(text) {
    let paragraph = text;
    return paragraph.toUpperCase();
}

function capText(text) {
    let words = text.split(' ');
    let CapitalizedWords = [];
    words.forEach(element => {
        CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));
    });
    return CapitalizedWords.join(' ');
}

function lowText(text) {
    let paragraph = text;
    return paragraph.toLowerCase();
}

module.exports = { uppText, capText, lowText };
