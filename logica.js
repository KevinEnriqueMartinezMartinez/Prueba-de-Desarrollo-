//funcion que me permite obtener todos los valores de todos los campos del formulario.
function obtenerDatosFormulario() {
    return {
        mascara: document.getElementById('mascara').value,
        tipoDocumento: document.getElementById('tipoDocumento').value,
        numeroCliente: document.getElementById('numeroCliente').value,
        nombreCliente: document.getElementById('nombreCliente').value,
        Agencia: document.getElementById('Agencia').value,
        idAgencia: document.getElementById('idAgencia').value,
        nombreDocumento: document.getElementById('nombreDocumento').value,
        numeroDocumento: document.getElementById('numeroDocumento').value,
        fechaVigencia: document.getElementById('fechaVigencia').value,
        fechaExpiracion: document.getElementById('fechaExpiracion').value,
        fechaDocumento: document.getElementById('fechaDocumento').value,
        fechaArchivado: document.getElementById('fechaArchivado').value,
        horaArchivado: document.getElementById('horaArchivado').value,
        archivadoPor: document.getElementById('archivadoPor').value,
        numeroCrediticio: document.getElementById('numeroCrediticio').value,
    };
}
// funcion que me permite Convertir los datos del formulario en un formato XML.
function generarXML(datos) {
    let xml = `<metadata>\n`;
    for (const key in datos) {
        xml += `\t<${key}>${datos[key]}</${key}>\n`;
    }
    xml += `</metadata>`;
    return xml;
}
// funcion que me permite Descargar un archivo con un contenido dado y un nombre específico.
function descargarArchivo(nombre, contenido) {
    const enlace = document.createElement('a');
    const blob = new Blob([contenido], { type: 'text/plain' });
    enlace.href = URL.createObjectURL(blob);
    enlace.download = nombre;
    enlace.click();
}

//funcion que me permite Descargar los datos del formulario en un archivo XML.
function descargarXML() {
    const datosFormulario = obtenerDatosFormulario();
    const xmlDoc = generarXML(datosFormulario);
    descargarArchivo('datos.xml', xmlDoc);
}

//funcion que me permite Descargar los datos del formulario en un archivo JSON.
function descargarJSON() {
    const datosFormulario = obtenerDatosFormulario();
    const jsonDoc = JSON.stringify(datosFormulario, null, 2);
    descargarArchivo('datos.json', jsonDoc);
}

// Asocia los botones a las funciones correspondientes para poder descargar los archivos
document.querySelector('.btn-primary').addEventListener('click', descargarXML);
document.querySelector('.btn-success').addEventListener('click', descargarJSON);
