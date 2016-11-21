var histoire = document.getElementById("histoire");
console.log("Début de script");
var civilite = prompt ("Etes-vous un homme ou une femme ?");
console.log("Civilité = " + civilite);
var prenom = prompt ("Veuillez entrer votre prénom");
console.log("Prénom = " + prenom);
var nom = prompt ("Veuillez entrer votre Nom");
console.log("Nom = " + nom);
var age = prompt ("Veuillez saisir votre age (Simplement les chiffes)");
console.log("Age = " + age);
var genre = prompt ("Votre compagne/compagnon est-il/elle un homme ou une femme?");
console.log("Genre du compagnon = " + genre);
var amour = prompt("Saisissez le prénom de votre compagnon/compagne");
console.log("Prénom compagnon = " + amour)
var creature = prompt ("Saisissez une créature imaginaire de votre choix");
console.log("Nom créature = " + creature);
var ville = prompt ("Saisissez la ville de votre choix");
console.log("Nom de la ville = " + ville);
histoire.style.visibility = "visible";

if (civilite == "femme") {
  histoire.innerHTML = "<p> C'est l'été, <span>" +  prenom + " " +  nom
  + "</span>, une jeune femme de " + age
  + " ans," + " se promenait au bord du lac d'Annecy. Elle avait pour habitude de rejoindre <span>"
  + amour + "</span> dans un petit coin caché au bout du lac, afin de se retrouver seuls et de pouvoir discuter, rire, et se calîner tranquillement. A chaque rendez-vous, <span>"
  + ((genre=='homme')? 'il':'elle') + "</span> avait l'habitude de ramener un panier pic-nic à <span>" + prenom + "</span> afin qu'ils se fassent un repas en tête à tête. Habitant à plus de 600 km l'un de l'autre, chaque moment de retrouvailles passées ensemble était un très grand privilège..<span>" + amour + "</span> avait pour habitude de consoler <span>" + prenom + "</span> qui supportait mal cette distance qui les séparait. </p><p> Un matin <span>" + prenom + "</span> et <span>" + amour + "</span> allèrent se balader dans les montagnes des dents de l'enfant, où ils n'étaient jamais allés, car la montagne était réputée comme étant dangereuse. Arrivés au fin fond de la forêt, ils tombèrent sur un arbre assez particulier.. Ils n'en croyaient pas leur yeux.. Cet arbre était le refuge des créatures imaginaires qu'on ne connaissait que par le biais des contes : les <span>" + creature + "</span>. </p><p> Ils s'empressèrent de faire demi tour et de rentrer à <span>" + ville + "</span> pour raconter et montrer ce qu'ils avaient vu mais en retournant dans la montagne avec quelques habitants l'arbre avait disparu, ils ne comprenaient pas. Etait-ce le fruit de leur imagination ? Ou bien est-ce que cet arbre avait-il bel et bien existé ? A vous de choisir et de vous imaginer la suite de l'histoire...</p><p> To be continued... </p>";
}
else {
  histoire.innerHTML = "<p> C'est l'été, <span>" +  prenom + " " +  nom + "</span>, un jeune homme de " + age + " ans," + " se promenait au bord du lac d'Annecy. Il avait pour habitude de rejoindre <span>" + amour + "</span> dans un petit coin caché au bout du lac, afin de se retrouver seuls et de pouvoir discuter, rire, et se calîner tranquillement.  A chaque rendez-vous, <span>" + ((genre=="femme")? "elle":"il") + "</span> avait l'habitude de ramener un panier pic-nic a <span>" + prenom + "</span> afin qu'ils se fassent un repas en tête à tête. Habitant à plus de 600 km l'un de l'autre, chaque moment de retrouvailles passées ensemble était un très grand privilège.. <span>" + prenom + "</span> avait pour habitude de consoler <span>" + amour + "</span> qui supportait mal cette distance qui les séparait. </p><p> Un matin <span>" + prenom + "</span> et <span>" + amour + "</span> allèrent se balader dans les montagnes des dents de l'enfant, où ils n'étaient jamais allés, car la montagne était réputée comme étant dangereuse. Arrivés au fin fond de la forêt, ils tombèrent sur un arbre assez particulier.. Ils n'en croyaient pas leur yeux.. Cet arbre était le refuge des créatures imaginaires qu'on ne connaissait que par le biais des contes : les <span>" + creature + "</span>. </p><p> Ils s'empressèrent de faire demi tour et de rentrer à <span>" + ville + "</span> pour raconter et montrer ce qu'ils avaient vu mais en retournant dans la montagne avec quelques habitants l'arbre avait disparu, ils ne comprenaient pas. Etait-ce le fruit de leur imagination ? Ou bien est-ce que cet arbre avait-il bel et bien existé ? A vous de choisir et de vous imaginer la suite de l'histoire...</p><p> To be continued... </p>";
 }
 console.log("Fin du script JS");
