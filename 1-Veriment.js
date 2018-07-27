/*
 Pas de chance, Bonsar est absent, car c'est jour de marché dans le village.
 Enfin dans ton malheur, il y a suffisament de marchands dans la ville pour trouver
 un bouclier et une épée.
 Mais avec ta seule pièce de cuivre en poche, il va te falloir trouver un marchand qui
 aura les 2 à la fois.

 Exercice : Compléter la fonction `trouverBouclierEtEpee` qui va retourner true
 si le marchand possède les 2 objets recherchés, sinon false.
*/

function trouverBouclierEtEpee(objets) {
  var Bouc = false;
  var Epee = false;
  for (var i = 0, c =objets.length; i < c; i++) {
    if(objets[i] == 'bouclier') {
      Bouc = true;}
    else if (objets[i] == 'épée') {
      Epee = true;
    }
  }
  var res = Bouc && Epee;
  return res;

}

const marchand1 = ['coffre', 'dague', 'épé', 'collier'];
const marchand2 = ['coffre', 'dague', 'épée', 'collier'];
const marchand3 = ['bouclier', 'selle', 'épée', 'ciseaux'];
const marchand4 = ['lance', 'dague', 'collier'];

console.log(
  'Marchand 1 : ' + (trouverBouclierEtEpee(marchand1) === false ? 'OK' : 'KO'),
);
console.log(
  'Marchand 2 : ' + (trouverBouclierEtEpee(marchand2) === false ? 'OK' : 'KO'),
);
console.log(
  'Marchand 3 : ' + (trouverBouclierEtEpee(marchand3) === true ? 'OK' : 'KO'),
);
console.log(
  'Marchand 4 : ' + (trouverBouclierEtEpee(marchand4) === false ? 'OK' : 'KO'),
);

/*
  Une fois ton épée et ton bouclier trouvés, il est temps de partir voir Gladius,
  ancien gladiateur de l'arène de Tolosa, pour qu'il te prépare à affronter la Plaine
  Sanglante qui sépare la Veriment de Tolosa.
*/
