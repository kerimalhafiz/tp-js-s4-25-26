'use strict';

// des listes pour des tests
const numbers = [2, 3, 5, 4, 10, 6];
const persons = [ {name : 'timoleon', age : 12 }, {name : 'bilbo', age : 111 }, {name : 'frodo', age : 33 }, {name : 'sam', age : 26 }];

/********** EXERCICE 1 ***********************/
console.log(` *** EXERCICE 1 *** `);

// exemple de manière de répondre aux questions d'un exercice

// Q1
/* computes the double of its parameter
 * @param x (number) a number
 * @return (number) the double of *x*
*/
const example = x => x * 2;

//Q2
// tests d'exécution de la fonction example
console.log(`Q2 - example(10) : ${example(10)}`);
console.log(`Q2 - example(21) : ${example(21)}`);

// Q3
/* filter and keep the elements of *list* smaller than *max*
 * @param list (Array) list of elements
 * @param max (Any) upper bound filter value
 * @return (Array) list of elements of *list* smaller than *max*
*/
const example2 = (list, max) => list.filter( elt => elt < max );

// Q4
// tests d'exécution de la fonction example2
console.log(`Q4 - example2(numbers, 5) : ${example2(numbers, 5)}`);

/*********************************************/



/********** EXERCICE 2 ***********************/
console.log(` *** EXERCICE 2 *** `);
const  listname= persons.map(person => person.name);
console.log(`Q1-la liste de de tous les nom: ${listname}`);
const firstletterName=persons.map(person=>person.name[0].toUpperCase());
console.log(`Q2- les premier letter de chaque nom ${firstletterName}`);

const niemeletter=persons.map((person,indexe)=>person.name[indexe]|| undefined);
console.log(`Q3-les n-ieme letter de chaque nom ${niemeletter}`);


const capitalize=str=> str.charAt(0).toUpperCase()+str.slice(1);
const premiermajName=persons.map(person=>capitalize(person.name));
console.log(`Q-4 premier lettre majuscule de tout les nom ${premiermajName}`);

const MyMap=(list,funct)=>{
    const result=[];
    for(let indexe in list){
      result.push(funct(list[indexe],parseInt(indexe),list));
    }
     return result;
}
const namemaj=MyMap(persons,person=>capitalize(person.name));            
console.log(`Q5-utilisation de myMap ${namemaj}`);

/*********************************************/


/********** EXERCICE 3 ***********************/
console.log(` *** EXERCICE 3 *** `);
const ages=persons.map(person=>person.age);
console.log(`age=${ages}`);

const maxAge=Math.max(...ages);
console.log(`Maxage=${maxAge}`);
const timoStr='timoleon';
const timoArray=[...timoStr];
console.log(`tableau decomposé de mot ${timoArray}`);
const newTimostr=timoArray.join('-');
console.log(`tableau decomposé du mot par -: ${newTimostr}`);



/*********************************************/


/********** EXERCICE 4 ***********************/
console.log(` *** EXERCICE 4 *** `);


/*********************************************/

/********** EXERCICE 5 ***********************/
console.log(` *** EXERCICE 5 *** `);


/*********************************************/

/********** EXERCICE 6 ***********************/
console.log(` *** EXERCICE 6 *** `);


/*********************************************/


/********** EXERCICE 7 ***********************/
console.log(` *** EXERCICE 7 *** `);


/*********************************************/


/********** EXERCICE 8 ***********************/
console.log(` *** EXERCICE 8 *** `);

const lesInvites = ['Tim Oleon', 'Timo Leon', 'Bilbo', 'Frodo', 'Sam', 'Merry', 'Pippin']
const lesReponses = [
                  {nom : 'Sam', present : 'oui'},
                  {nom : 'Tim Oleon', present : 'non'},
                  {nom : 'Bilbo', present : 'oui'},
                  {nom : 'Frodo', present : 'oui'},
                  {nom : 'Timo Leon', present : 'non'},
                 ];

/*********************************************/

/********** EXERCICE 9 ***********************/
console.log(` *** EXERCICE 9 *** `);



/*********************************************/

/********** EXERCICE 10 ***********************/
console.log(` *** EXERCICE 10 *** `);



/*********************************************/
