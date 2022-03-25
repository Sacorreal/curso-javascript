//código del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5; 

//const perimetroCuadrado = ladoCuadrado * 4; 
const perimetroCuadrado = (lado) => lado * 4; 

//console.log("El perímetro del cuadrado es:" + perimetroCuadrado + "cm"); 

function areaCuadrado (lado)
{return lado * lado};  
//console.log("El área del cuadrado es: " + areaCuadrado + "cm2"); 

console.groupEnd();

//código del triangulo 
console.group("Triangulos");


function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base; 

}

function areaTriangulo (baseTriangulo, alturaTriangulo){return (baseTriangulo * alturaTriangulo) /2 } ; 


console.groupEnd();

//código del círculo
console.group("Círculo");

//Radio
//const radioCirculo = 4;   


//Diametro 
function diametroCirculo (radio)
{
    return radio*2

};



//PI 
const PI = Math.PI;
//console.log("PI es igual a: " + PI); 

//Circunferencia 

function perimetroCirculo (radio)
{ 
 const diametro = diametroCirculo(radio);
 return diametro * PI; 
}

//area 

function areaCirculo (radioCirculo){
    return (radioCirculo * radioCirculo) * PI;

}


console.groupEnd();

// Interacción con el HTML 

function calcularPerimetroCuadrado () {
    const input = document.getElementById("inputCuadrado");
    const value = input.value; 

    const perimetro = perimetroCuadrado(value); 
    alert(`El perímetro del cuadrado es ${perimetro}`); 

}; 

function calcularAreaCuadrado() {

    const input = document.getElementById("inputCuadrado");
    const value = input.value; 

    const area = areaCuadrado(value); 
    alert(`El área del cuadrado es ${area}`); 


}; 




