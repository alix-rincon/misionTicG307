function listMessage() {
    $.ajax({
        url: "https://g0cfb8d8089c168-bdrentcar.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            listAllMessages(response.items);
        },
        error: function (xhr, status) {
            console.log(status);
        }
    });
}

function listAllMessages(items) {
    var tabla = `<table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col"># ID</th>
                        <th scope="col">messagetext</th>
                        <th scope="col" colspan=2>Acciones</th>
                    </tr>
                </thead>`;

    for (var i = 0; i < items.length; i++) {
        tabla += `<tbody>
                    <tr>
                        <th scope="row">${items[i].id}</th>
                        <td>${items[i].messagetext}</td>
                        <td style="width:8%"><button type="button" class="btn btn-info btn-sm" onclick="detailMessage(${items[i].id})">Detalle</td>   
                        <td style="width:8%"><button type="button" class="btn btn-sm btn-outline-dark" onclick="deleteMessage(${items[i].id})">Borrar</td>
                    </tr>
                </tbody>
        `;
    }

    tabla += `</table>`;
    $("#listado").html(tabla);
}
function detailMessage(id){
    window.location.href="detailMessage.html?id="+id;
}
listMessage();