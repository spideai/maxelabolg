Array.prototype.slice.call(document.getElementsByTagName('button'))
    .filter(button => button.textContent === "Valider")
    .forEach(button => button.click());