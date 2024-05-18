let box1 = document.getElementById('caja1');
let box2 = document.getElementById('caja2');
let box3 = document.getElementById('caja3');
let box4 = document.getElementById('caja4');
let box5 = document.getElementById('caja5');
let box6 = document.getElementById('caja6');
let box7 = document.getElementById('caja7');
let box8 = document.getElementById('caja8');
let box9 = document.getElementById('caja9');

const matriz = [
    [box1, box2, box3],
    [box4, box5, box6],
    [box7, box8, box9],
]


let o1 = true;// si fuera false, no entraria al if que esta dentro del if, solo se imprimiria lo que esta en console

let xx = false;// este true es el que hace el cambio de emoji, es como una funcion booleano, se esta empezando con el false/gato

box1.addEventListener('click', ()=>{

    if (o1 == true) {

        
        if (xx == true) {
            //Matriz interna, la del JS que me ayuda a validar las cosas
            matriz[0][0]=  '🐀'

            //Me ayuda a mostrar los emoticones al usuario ya sea raton, o ya sea gato
            box1.innerHTML = '🐀'
            xx = false;

        }else { // aqui pasa toda la funcion del primer if
            matriz[0][0]='🐈‍⬛'
            box1.innerHTML = '🐈‍⬛'
            xx = true;

        }

        console.log(matriz)
        o1 = false;// no entiendo que hace esto aqui, pero impide el cambio del emoji

    }

    //validamos que retorno la funcion
    //si retorna true, significa que ya hay ganador
    if (fPrimera(matriz)) {
        alert("Has ganado")
    }
})

let o2 = true;

box2.addEventListener('click', ()=>{
    if (o2 == true) {
        if (xx == true) {
            matriz[0][1] ='🐀'
            box2.innerHTML = '🐀'
            xx = false
        }else {
            matriz[0][1] ='🐈‍⬛'
            box2.innerHTML = '🐈‍⬛'
            xx = true;
        }
        o2 = false;
    }

  //validamos que retorno la funcion
    //si retorna true, significa que ya hay ganador
    if (fPrimera(matriz)) {
        alert("Has ganado")
    }
})


let o3= true;

box3.addEventListener('click', ()=>{
    if (o3 == true) {
        if (xx == true) {
            matriz[0][2]= '🐀'
            box3.innerHTML = '🐀'
            xx = false
        }else {

            matriz[0][2] ='🐈‍⬛'
            box3.innerHTML = '🐈‍⬛'
            xx = true;
        }
        o3 = false;
    }

    //validamos que retorno la funcion
    //si retorna true, significa que ya hay ganador
    if (fPrimera(matriz)) {
        alert("Has ganado")
    }
});

//creamos un funcion que recibe la matriz con los simbolos ya sea gato o raton
function fPrimera(matriz) {

    //creamos 2 contadores que nos diran si ya gano alguno
    //si contador es igual a 3 significa que hay 3 simbolos iguales
    let contaG = 0;
    let contaR = 0;


    //recorremos la primera fila y validamos si hay 3 simbolos iguales 
    //ya sea raton o ya sea gato
    for (let index = 0; index < matriz.length; index++) {

        if (matriz[0][index] == '🐈‍⬛') {
            contaG++;
        }else if (matriz[0][index] == '🐀') {
            contaR++;
        }
    }

    //validamos si contaR o contaG valen 3. 
    //eso significa que ya gano alguien y retorna un true
    // si no gana nadie retorna false
    if (contaG == 3 || contaR == 3) {
        return true
    }else{
        return false
    }

}




let o4 = true; 

box4.addEventListener('click', ()=>{
    if (o4 == true) {
        if (xx == true) {
            matriz[1][0].innerHTML = '🐀'
            xx = false
        }else {
            matriz[1][0].innerHTML = '🐈‍⬛'
            xx = true;
        }
        o4 = false;
    }else{
        console.log(':D')
    }
})

let o5 = true;

box5.addEventListener('click', ()=>{
    if (o5 == true) {
        if (xx == true) {
            matriz[1][1].innerHTML = '🐀'
            xx = false
        }else {
            matriz[1][1].innerHTML = '🐈‍⬛'
            xx = true;
        }
        o5 = false;
    }else{
        console.log(':D')
    }
})

let o6 = true;

box6.addEventListener('click', ()=>{
    if (o6 == true) {
        if (xx == true) {
            matriz[1][2].innerHTML = '🐀'
            xx = false
        }else {
            matriz[1][2].innerHTML = '🐈‍⬛'
            xx = true;
        }
        o6 = false;
    }else{
        console.log(':D')
    }
})

let o7 = true;

box7.addEventListener('click', ()=>{
    if (o7 == true) {
        if (xx == true) {
            matriz[2][0].innerHTML = '🐀'
            xx = false
        }else {
            matriz[2][0].innerHTML = '🐈‍⬛'
            xx = true;
        }
        o7 = false;
    }else{
        console.log(':D')
    }
})

let o8 = true;

box8.addEventListener('click', ()=>{
    if (o8 == true) {
        if (xx == true) {
            matriz[2][1].innerHTML = '🐀'
            xx = false
        }else {
            matriz[2][1].innerHTML = '🐈‍⬛'
            xx = true;
        }
        o8 = false;
    }else{
        console.log(':D')
    }
})

let o9 = true;

box9.addEventListener('click', ()=>{
    if (o9 == true) {
        if (xx == true) {
            matriz[2][2].innerHTML = '🐀'
            xx = false
        }else {
            matriz[2][2].innerHTML = '🐈‍⬛'
            xx = true;
        }
        o9 = false;
    }else{
        console.log(':D')
    }
})

// function gane() {
//     let roundWin = false;

//     for (let i =0; < ganes.length; i ++)
//         const condition = winConditions[i];
//         const celdaA = condition[0];
//         const celdaB = condition[1];
//         const celdaC = condition[2];

//         if(celdaA == "" || celdaB == "" || celdaC == ""){
//             continue
//         }


    
// }
