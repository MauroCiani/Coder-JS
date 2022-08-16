//let producto = prompt ("Seleccioná las materias en las que querés anotarte: \n1. Matemática \n2. Ingés \n3. Economía")
//console.log(producto)

/* do {
    let materia = prompt("Seleccioná hasta tres de los cinco cursos disponibles en los que querés anotarte: \n1. Matemática \n2. Ingés \n3. Economía \n4.Francés \n5.Química")
    alert("Has elegido: clases de " + materia)
} while (confirm("Querés seguir agregando clases? Seleccioná 'Cancelar' si ya no quieres agregar más cursos")) */

alert("Bienvenido! A continuación podrás seleccionar hasta 5 cursos diferentes, indicando la cantidad de horas de clase que deseas contratar. Si deseas dejar de inscribirte a más cursos, seleccioná 'Cancelar' hasta que se calcule el importe final. \n\n Tené en cuenta que el precio de la hora de clase es de $2000.")

let materia1 = prompt("Seleccioná el primer curso en el que querés anotarte: \n1. Matemática \n2. Ingés \n3. Economía \n4.Francés \n5.Química")

alert("Seleccionaste: clases de " + materia1)

let horasmateria1 = Number(prompt("¿Cuántas horas de " + materia1 + " querés contratar?"))

let materia2 = prompt("Seleccioná el segundo curso en el que querés anotarte: \n1. Matemática \n2. Ingés \n3. Economía \n4.Francés \n5.Química")

alert("Seleccionaste: clases de " + materia2)

let horasmateria2 = Number(prompt("¿Cuántas horas de " + materia2 + " querés contratar?" ))

let materia3 = prompt("Seleccioná el tercer curso en el que querés anotarte: \n1. Matemática \n2. Ingés \n3. Economía \n4.Francés \n5.Química")

alert("Seleccionaste: clases de " + materia3)

let horasmateria3 = Number(prompt("¿Cuántas horas de " + materia3 + " querés contratar?" ))

let materia4 = prompt("Seleccioná el cuarto curso en el que querés anotarte: \n1. Matemática \n2. Ingés \n3. Economía \n4.Francés \n5.Química")

alert("Seleccionaste: clases de " + materia4)

let horasmateria4 = Number(prompt("¿Cuántas horas de " + materia4 + " querés contratar?" ))

let materia5 = prompt("Seleccioná el primer curso en el que querés anotarte: \n1. Matemática \n2. Ingés \n3. Economía \n4.Francés \n5.Química")

alert("Seleccionaste: clases de " + materia5)

let horasmateria5 = Number(prompt("¿Cuántas horas de " + materia5 + " querés contratar?"))

let ListadoCursos = alert("Tus cursos seleccionados son: \n" + materia1 + " (" + horasmateria1 + " horas)" + "\n" + materia2 + " (" + horasmateria2 + " horas)"+ "\n" + materia3 + " (" + horasmateria3 + " horas)" + "\n" + materia4 + " (" + horasmateria4 + " horas)" + "\n" + materia5 + " (" + horasmateria5 + " horas)")

const CalculoImporteFinal = (Cantidad, Precio) => Cantidad*Precio

let HorasTotales = Number(horasmateria1 + horasmateria2 + horasmateria3 + horasmateria4 + horasmateria5)
let PrecioPorHora = Number(2000)

alert("El importe final a pagar por las " + HorasTotales + " HORAS de clase seleccionadas es de $" + CalculoImporteFinal(HorasTotales, PrecioPorHora))

/* let materia = prompt("Seleccioná alguna de las siguientes materias para anotarte: \n1. Matemática \n2. Ingés \n3. Economía \n4.Francés \n5.Química");

switch (materia) {
    case Matemática: 
        alert("Felicitaciones! Te has inscripto en el curso de Matemática");
        break;
    default: 
        alert("Lo sentimos, no hemos encontrado el curso que ingresaste");
        break;
} */