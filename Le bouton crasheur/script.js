let BtnCrasheur = document.getElementById("BtnCrasheur")

BtnCrasheur.addEventListener("click", () => {
    for (let i = 4; i > 1; i++) {
        console.log("Je t'ai fait crash ! ", i)
    }
})