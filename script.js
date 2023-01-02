/**
 * @author : LASME Ayou Emeline
 * @description :  cocneption d'une calculatrice qui n'a pas de fonction secondaire
 * @param : operator : function
 * @param : number  : function
 * @param : equal : function
 * @returns :
 * @param: number :fonction qui permet d'ajouter les chiffres
 * @param: operator  :fonction qui permet d'ajouter de un operateur a une  equation
 * @param: equal : fonction qui permet de calculer l' equation grace a la methode eval et qui le resultat
 * @param: reset : function
 *@param: clear : function
 *@returns:
 *@param: resert : cette fonction permet de faire une mise a zero en netoyanttout l'ecran
 *@param: clear : cette fonction permet de netoyer l'ecran mais en supprimant un element par element
 */ 



let display = document.getElementById('display');
let equation = "";

function number(num) {
    equation += num;
    display.textContent = equation;
}

function operator(op) {
    equation += op;
    display.textContent = equation;
}

function equal() {
    let result = eval(equation);
    display.textContent = result;
    equation ="";
}

/* Question bonus
* ajouter le boutton CLEAR pour effacer un chiffre saisi à l'ecran ET RESET pour la mise à jour
*/

function reset() {
    equation = "";
    display.textContent = "0";
}

function clear() {
    equation = equation.slice(0, -1);
    display.textContent = equation;
}

function clear() {
    let input = input.slice(0, -1);
    display.value = input;
}