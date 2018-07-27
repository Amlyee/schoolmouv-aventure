/*
  Gladius est heureux d'avoir un nouvel élève mais selon lui, vous avez déjà l'étoffe d'un héros.
  Alors avant de vous laisser partir vers les Plaines Sanglante, il vous demande seulement
  de résoudre un petit soucis.
  Sa plume magique qui écrit tout ce qu'il raconte n'en fait qu'à sa tête et répète des lettres.
  Il va falloir la réparer!

  Exercice : Compléter la fonction plumeMagique qui doit retourner une string sans les répétitions de
  lettres à la suite et sans prendre en compte les majuscules.
*/

function plumeMagique(phrase) {
  phrase = phrase.toLowerCase();
  var res = phrase.charAt(0);
  var tmp = res;
  var now = '';
  var i=1;
  while(i<phrase.length) {
    now =phrase.charAt(i)
    if(now == tmp) {
      i++;
    } else {
      res = res + now;
      tmp = now;
      i++;
    }
  }
  return res;
}

const phrase1 = 'Reeeepassss';
const phrase2 = 'dddejJeunEeer';
const phrase3 = 'DddIiiiNnnnnnneRRRr';

console.log('Phrase 1 : ' + (plumeMagique(phrase1) === 'repas' ? 'OK' : 'KO'));
console.log(
  'Phrase 2 : ' + (plumeMagique(phrase2) === 'dejeuner' ? 'OK' : 'KO'),
);
console.log('Phrase 3 : ' + (plumeMagique(phrase3) === 'diner' ? 'OK' : 'KO'));

/*
  Gladius peut enfin reprendre ses travaux et vous en remerci. Il vous souhaite bonne chance,
  et vous indique le chemin le plus court pour atteindre Tolosa. Malheureusement vous allez devoir
  traverser les Plaines Sanglantes avant d'atteindre votre destination.
*/
