// Animation Pour quand on click sur le font-awesom search sa affciche l'input type search
{

let search = document.getElementById("search")
let searchBar = document.getElementById("search-bar")
score = 0

search.addEventListener("click", () => {
    searchBar.style.display = "block"
    score++
    if (score === 2) {
        searchBar.style.display = "none"
        score = 0
    }
})

}
// Fin

