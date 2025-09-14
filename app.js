console.log(3+4);
console.log(Math.min(3,4));
console.log(Math.max(3,4));
console.log(Math.sqrt(25)) + ("racine carrée de 25");
console.log("bienvenue" + " sur mon site");
/* créer un nouvel élément de div */
var newDiv = document.createElement("div");
/* Créer un texte */
var newContent = document.createTextNode( "DOM - Document Object Model" );
/* intégrer le texte de la balise newContent au sein de la balise newDiv */
newDiv.appendChild(newContent);
/* récupérer la balise qui a pour identifient id div1 */
var currentDiv = document.getElementById( "div1");
/* newDiv sera placé dans l'HTML avant la balise div1 */
currentDiv.before(newDiv);
