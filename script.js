const formulaire = document.getElementById("dataForm");
const titreInp = document.getElementById("titre");
const commentaireInp = document.getElementById("comment");
const ageInp = document.getElementById("age");
const divError = document.getElementById("error");

formulaire.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  titre = titreInp.value;
  commentaire = commentaireInp.value;
  age = ageInp.value;
  console.log(titre, commentaire);

  divError.innerHTML = "";

  if (titre == "") {
    divError.innerHTML += "<br><i>Ce champ est obligatoire</i>";
    return;
  }
  if (commentaire.length < 3) {
    divError.innerHTML +=
      "<br><strong>Le nbre minimal de caractères est de 3</strong>";
    return;
  }
  if (Number(age) > 50 || Number(age) < 18) {
    divError.innerHTML +=
      "<br><strong>Vous devez être âgé entre 18 et 50 ans</strong>";
    return;
  }
});

function test() {
  let a = 3;
  let b = "3";
  if (a === b) console.log("Egaux !");
  else console.log("Différents!");
}

test();
