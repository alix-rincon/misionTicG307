function deleteClient(id) {
    var datos = {
        id: id
    }
    let datosPeticion = JSON.stringify(datos);

    $.ajax({
        url: "https://g0cfb8d8089c168-bdrentcar.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        data: datosPeticion,
        type: 'DELETE',
        contentType: "application/JSON",
        success: function () {
            window.location.href = "listClient.html";
        },
        error: function (xhr, status) {
            console.log(status);
        }
    });
}