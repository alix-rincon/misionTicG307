function listClient() {
    $.ajax({
        url: "https://g0cfb8d8089c168-bdrentcar.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            listAllClients(response.items);
        },
        error: function (xhr, status) {
            console.log(status);
        }
    });
}

function listAllClients(items) {
    var tabla = `<table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col"># ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Email</th>
                        <th scope="col">Edad</th>
                        <th scope="col" colspan=2>Acciones</th>
                    </tr>
                </thead>`;

    for (var i = 0; i < items.length; i++) {
        tabla += `<tbody>
                    <tr>
                        <th scope="row">${items[i].id}</th>
                        <td>${items[i].name}</td>
                        <td>${items[i].email}</td>
                        <td>${items[i].age}</td>   
                        <td style="width:8%"><button type="button" class="btn btn-info btn-sm" onclick="detailClient(${items[i].id})">Detalle</td>   
                        <td style="width:8%"><button type="button" class="btn btn-sm btn-outline-dark" onclick="deleteClient(${items[i].id})">Borrar</td>
                    </tr>
                </tbody>
        `;
    }

    tabla += `</table>`;
    $("#listado").html(tabla);
}
function detailClient(id){
    window.location.href="../../views/client/detailClient.html?id="+id;
}
listClient();