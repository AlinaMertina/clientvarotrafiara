
class Personne {
  constructor(nom, age) {
    this.nom = nom;
    this.age = age;
  }

  afficherInfos() {
    console.log(`Nom: ${this.nom}, Age: ${this.age}`);
  }
}

export default Personne;