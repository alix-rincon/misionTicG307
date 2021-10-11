function listar() {
    $.ajax({
        url: "https://g0cfb8d8089c168-bdrentcar.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/computer/computer",
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            console.log(response);
            listAllComputerItems(response.items);
        },
        error: function (xhr, status) {
            console.log(status);
        }
    });
}

function listAllComputerItems(items) {
    var tabla = `<table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col"># ID</th>
                        <th scope="col">Marca</th>
                        <th scope="col">Modelo</th>
                        <th scope="col">Categoría</th>
                        <th scope="col">Nombre</th>
                        <th scope="col" colspan=2>Acciones</th>
                    </tr>
                </thead>`;

    for (var i = 0; i < items.length; i++) {
        tabla += `<tbody>
                    <tr>
                        <th scope="row">${items[i].id}</th>
                        <td>${items[i].brand}</td>
                        <td>${items[i].model}</td>
                        <td>${items[i].category_id}</td>
                        <td>${items[i].name}</td>     
                        <td style="width:8%"><button type="button" class="btn btn-info btn-sm" onclick="detailComputer(${items[i].id})">Detalle</td>   
                        <td style="width:8%"><button type="button" class="btn btn-sm btn-outline-dark" onclick="deleteComputer(${items[i].id})">Borrar</td>
                    </tr>
                </tbody>
        `;
    }

    tabla += `</table>`;
    $("#listado").html(tabla);
}
function detailComputer(id){
    window.location.href="views/computer/editComputer.html?id="+id;
}
listar();