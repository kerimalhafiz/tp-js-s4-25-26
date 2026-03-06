const numberFormatter = new Intl.NumberFormat();

dataPays.forEach( pays => pays.toString = function() { return `${this.nom} : ${this.population} hab., ${this.superficie}km², ${this.PIB} milliardsUS$` } );
/****  QUESTION 1 *****/
const effet5premier=(pays5)=>{
    for (let i=0;i<pays5;i++){
        console.log(`effect de ligne 3:${dataPays[i].toString()}`);
    }
}
console.log(`${effet5premier(5)}`);


/****  QUESTION 2 *****/
console.log(' *** QUESTION 2 ***');

const populationTotale = dataPays.reduce((total,pays)=>total+pays.population,0);

console.log(`population totale : ${numberFormatter.format(populationTotale)}`);
/***********************/


/****  QUESTION 3 *****/
console.log(' *** QUESTION 3 ***');
const findData=(nom)=>dataPays.find(pays=>pays.nom===nom||undefined)
console.log(`Q3:${findData('France').toString()}`);



/***********************/


/****  QUESTION 4 *****/
console.log(' *** QUESTION 4 ***');
const dixpluspeuples = [...dataPays]
        .sort((a,b)=>b.population-a.population)
        .slice(0,10)
        .map(pays=>pays.nom);


console.log(`10 plus peuplés : ${dixpluspeuples}`);
/***********************/


/****  QUESTION 5 *****/
console.log(' *** QUESTION 5 ***');
const paysDenses = dataPays
  .map(p => ({
    nom: p.nom,
    densite: p.population / p.superficie
  }))
  .filter(p => p.densite > 1000)
  .sort((a, b) => b.densite - a.densite)
  .map(p => `${p.nom} : ${p.densite.toFixed(2)} hab/km²`);

paysDenses.forEach(ligne => console.log(ligne));


/***********************/


/****  QUESTION 6 *****/
console.log(' *** QUESTION 6 ***');

const popPIb=dataPays
        .map(p=>({
             ...p,
             pibparhab:(p.PIB*1e9)/p.population
        }))
        .filter(p=>p.pibparhab<10000)
        .reduce((total,p)=>total+p.population,0)


console.log(numberFormatter.format(popPIb));

/***********************/
