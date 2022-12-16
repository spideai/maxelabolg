[...document.getElementsByTagName('button')]
    .filter(button => button.textContent === "Voir la correction ")
    .forEach(button => button.click());

setTimeout(() => {
    Array.prototype.slice.call(document.getElementsByTagName('label'))
    .filter(label => label.classList.contains("bg-success-05"))
    .forEach(label => label.click());
}, 500)