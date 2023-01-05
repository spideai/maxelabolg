function sleep(ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
}

function seeAnswers() {
    console.log("seeAnswers");
    Array.prototype.slice.call(document.getElementsByTagName('button'))
        .filter(button => button.textContent === "Voir la correction " || button.children?.[0]?.textContent === "Correction")
        .forEach(button => button.click());
}

function clickRightAnswers() {
    console.log("clickRightAnswers");
    Array.prototype.slice.call(document.getElementsByTagName('label'))
        .filter(label => label.classList.contains("bg-success-05"))
        .forEach(label => label.click());
}

function clearPage(i, j) {
    console.log("clearPage");
    if (i > 20) {
        console.log("wow, you should really stop turning pages");
        return
    }
    let validateButton = Array.prototype.slice.call(document.getElementsByTagName('button'))
        .filter(button => ["Suivant", "Valider", "Passer"].includes(button.textContent))[0]
    if (!validateButton) {
        seeAnswers()
        sleep(3000).then(() => {
            clickRightAnswers();
            sleep( 20 * 60 * 1000).then(() => { // 20 minutes
                nextPage(i, j + 1);
            })
        })
        return;
    };

    seeAnswers();

    sleep(300).then(() => {

        clickRightAnswers()

        sleep(300).then(() => {
            validateButton.click()
            sleep(1500).then(() => {
                clearPage(i + 1, j)
            })
        })

    })
}

function nextPage(i, j) {
    console.log("nextPage");
    if (j > 10) {
        console.log("GG all activites done");
        return
    };
    sleep(2000).then(() => {
        let validateButton = Array.prototype.slice.call(document.getElementsByTagName('button'))
            .filter(button => ["Terminer", "Valider", "Passer"].includes(button.textContent))[0]
        validateButton.click()
        sleep(10000).then(() => {
            let nextActivityButton = [...document.getElementsByTagName('a'), ...document.getElementsByTagName('button')]
                .filter(button => ["Activité suivante"].includes(button.textContent))[0]
            console.log(nextActivityButton);
            nextActivityButton.click()
            sleep(4000).then(() => {
                let startButton = Array.prototype.slice.call(document.getElementsByTagName('button'))
                    .filter(button => ["Démarrer"].includes(button.textContent))[0]
                startButton.click()
                clearPage(i)
            })
        });
    })
}

clearPage(1, 1)
// nextPage(1)
