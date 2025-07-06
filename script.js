const fechaInicio = new Date(2023, 8, 5, 0, 0, 0); // 5 de septiembre de 2023
const contador = document.getElementById("contador");

function actualizarContador() {
    const ahora = new Date();

    let años = ahora.getFullYear() - fechaInicio.getFullYear();
    let meses = ahora.getMonth() - fechaInicio.getMonth();
    let dias = ahora.getDate() - fechaInicio.getDate();
    let horas = ahora.getHours() - fechaInicio.getHours();
    let minutos = ahora.getMinutes() - fechaInicio.getMinutes();
    let segundos = ahora.getSeconds() - fechaInicio.getSeconds();

    // Ajustes si algún valor es negativo
    if (segundos < 0) {
        segundos += 60;
        minutos--;
    }
    if (minutos < 0) {
        minutos += 60;
        horas--;
    }
    if (horas < 0) {
        horas += 24;
        dias--;
    }
    if (dias < 0) {
        const mesAnterior = new Date(ahora.getFullYear(), ahora.getMonth(), 0);
        dias += mesAnterior.getDate();
        meses--;
    }
    if (meses < 0) {
        meses += 12;
        años--;
    }

    contador.textContent = `${años} años, ${meses} meses, ${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
}

setInterval(actualizarContador, 1000);
actualizarContador();
