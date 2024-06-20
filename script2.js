function participant(prenom, age) {
  this.prenom = prenom;
  this.age = age;
}

let p = new participant("damien", 40);
let p1 = new participant("thomas", 30);
console.log(p instanceof participant);
console.log(p, p1);

// p.formation = "javascript";
// p['formation'] = "javascript";
participant.prototype.formation = "javascript";
participant.prototype.annee = 2024;
console.log(p, p1);

let ownProperties = [];
let proptotypeProperties = [];
for (const prop in p) {
  if (p.hasOwnProperty(prop)) ownProperties.push(prop);
  else proptotypeProperties.push(prop);
}

console.log(ownProperties);
console.log(proptotypeProperties);
/////////
// let tab = ["nidhal", 30, true];

// for (const element of tab) {
//   console.log(element);
// }
// for (const element in tab) {
//   console.log(element);
// }

let o = {
  prenom: "camille",
  annee: 2002,
  job: "SEO",
  coordonnees: {
    telephone: 123,
    adresse: "Dans le nord",
  },
  calculerAge: function () {
    console.log(2024 - this.annee);
  },
};

o.calculerAge();

console.log(o instanceof participant);

console.log(o);

for (const prop in o) {
  console.log(prop);
}

////////////////

let o1 = Object.create({
  color: "black",
  taille: "12px",
});

console.log(o1);

function ingenieur(prenom, age, fct) {
  this.prenom = prenom;
  this.age = age;
  this.thomas = fct;
}

function afficherSalut() {
  console.log("SAlut c'est Thomas");
}

let i = new ingenieur("damien", 40, afficherSalut);
console.log(i.thomas());

localStorage.setItem("prenom", "damien");
localStorage.setItem("tab", [12, 15, 20]);

console.log(localStorage.getItem("prenom"));
localStorage.removeItem("prenom");
