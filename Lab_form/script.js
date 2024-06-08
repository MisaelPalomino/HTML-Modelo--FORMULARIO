function mostrar_name() {
    let primer_nombre = document.getElementById("Primer_nombre").value;
    let segundo_nombre = document.getElementById("Segundo_nombre").value;
    let primer_apellido = document.getElementById("Primer_apellido").value;
    let segundo_apellido = document.getElementById("Segundo_apellido").value;
    const re = /^[a-zA-ZáéíóúÁÉÍÓÚ]+$/;
    if (!re.test(primer_nombre) || !re.test(segundo_nombre) || !re.test(primer_apellido) || !re.test(segundo_apellido)) {
        alert("Los campos de nombre y apellido no pueden contener números ni estar vacíos.");
        return false;
    } else {
        document.getElementById("nombre_rpt").value = primer_nombre + " " + segundo_nombre + " " + primer_apellido + " " + segundo_apellido;
        return true;
    }
}

function ultimo_digito() {
    let dni = document.getElementById("DNI").value;
    if (dni.length !== 8) {
        alert("DNI inválido");
        return false;
    } else {
        document.getElementById("dni_rpt").value = dni[dni.length - 1];
        return true;
    }
}

function calcular_edad() {
    let fecha_nacimiento = new Date(document.getElementById("fecha_nacimiento").value);
    let hoy = new Date();
    let edad = hoy.getFullYear() - fecha_nacimiento.getFullYear();
    let mes = hoy.getMonth() - fecha_nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fecha_nacimiento.getDate())) {
        edad--;
    }
    if (edad > 100 || edad < 5) {
        alert("Ingrese una fecha válida");
        return false;
    } else {
        document.getElementById("edad_rpt").value = edad;
        return true;
    }
}

function validar() {
    return mostrar_name() && ultimo_digito() && calcular_edad();
}
