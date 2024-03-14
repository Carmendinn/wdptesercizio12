/* JS Exercises should go here */

// EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.
// EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".
// EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.

window.onload = function () {
    let twitter = document.querySelector(".blog-sidebar div:nth-child(3) .list-unstyled li:nth-of-type(2)");
    twitter.remove();
}

let links = document.querySelectorAll(".stretched-link")
for (let link of links) {
    link.addEventListener("click", function () {
        link.closest(".col-md-6").remove();
    })
}
let autori = document.querySelectorAll('.blog-post-meta a');


autori.forEach(function (autore) {
    autore.addEventListener('mouseover', function () {
        let nomeAutore = autore.textContent.trim();
        alert('Autore del post: ' + nomeAutore);
    });
});
