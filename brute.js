function sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}

function seeAnswers() {
    Array.prototype.slice.call(document.getElementsByTagName('button'))
    .filter(button => button.textContent === "Voir la correction " || button.children?.[0]?.textContent === "Correction")
    .forEach(button => button.click());
}

function clickRightAnswers() {
    Array.prototype.slice.call(document.getElementsByTagName('label'))
            .filter(label => label.classList.contains("bg-success-05"))
            .forEach(label => label.click());
}



function clearPage() {
    let validateButton = Array.prototype.slice.call(document.getElementsByTagName('button'))
                .filter(button => ["Suivant", "Valider", "Passer"].includes(button.textContent))[0]
    if (!validateButton) {
        seeAnswers()
        sleep(100).then(clickRightAnswers)
        return;
    };

    seeAnswers();

    sleep(100).then(() => {

        clickRightAnswers()

        sleep(100).then(() => {
            validateButton.click()
            sleep(1000).then(() => {
               clearPage()
            })
        })

    })
}

clearPage()