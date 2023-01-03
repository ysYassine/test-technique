//#######################################
// Exercice 1
//#######################################
function compterVoyels(phrase) {
  // Déclaration et initialisation du compteur de voyelles
  let nbVoyels = 0;

  // On parcourt chaque caractère de la phrase
  for (let i = 0; i < phrase.length; i++) {
    // Si le caractère courant est une voyelle (a, e, i, o, u, y)
    if ("aeiouyAEIOUY".indexOf(phrase[i]) !== -1) {
      // On incrémente le compteur de voyelles
      nbVoyels++;
    }
  }

  return nbVoyels;
}

const phrase = "Ceci est un test algorithmique";
console.log("Exercice 1:", compterVoyels(phrase));

//#######################################
// Exercice 2
//#######################################
function encoder(phrase) {
  // Déclaration de la variable qui stockera la phrase codée
  let encoded = "";

  // On parcourt chaque caractère de la phrase
  for (let i = 0; i < phrase.length; i++) {
    // Si le caractère courant est une lettre (majuscule ou minuscule)
    if (phrase[i].match(/[a-zA-Z]/)) {
      // On calcule le code ASCII du caractère courant
      let charCode = phrase.charCodeAt(i);
      let base = 65;
      if (charCode >= 97) base = 97;
      // On décale le code ASCII de 1 (pour passer à la lettre suivante)
      // et on utilise le modulo pour gérer le décalage cyclique
      charCode = ((charCode + 1 - base) % 26) + base;
      // On récupère la lettre correspondant au nouveau code ASCII
      let encodedChar = String.fromCharCode(charCode);
      // On ajoute la lettre codée à la phrase codée
      encoded += encodedChar;
    } else {
      // Si le caractère courant n'est pas une lettre, on l'ajoute tel quel à la phrase codée
      encoded += phrase[i];
    }
  }

  return encoded;
}

// Exemple d'utilisation
const sentence = "Ceci est un test algorithmique";
const encoded = encoder(sentence);
console.log("Exercice 2:", encoded);

//#######################################
// Exercice 3
//#######################################
console.log(
  `
Exercice 3:
Cet algorithme définit un tableau Nb de cinq éléments, qui sont des entiers.
Il initialise ensuite chaque élément du tableau Nb avec la valeur de i au carré, où i parcourt tous les entiers de 0 à 5.
Enfin, il affiche chaque élément du tableau Nb à l'écran.
Ainsi, l'algorithme affichera les nombres suivants à l'écran : 0, 1, 4, 9, 16, 25.
Remarque: le tableau Nb est declaré comme étant un tableau de 5 case mais au niveau de l'algorithme il a été traité comme s'il avait 6 élements [0 -> 5]
  `
);
