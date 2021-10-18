function listCategory() {
    $.ajax({
        url: "http://144.22.242.160:8080/api/Category/all",
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            listAllClients(response);
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
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripción</th>
                        <th scope="col" colspan=2>Acciones</th>
                    </tr>
                </thead>`;

    for (var i = 0; i < items.length; i++) {
        tabla += `<tbody>
                    <tr>
                        <td>${items[i].name}</td>
                        <td>${items[i].description}</td>
                        <td style="width:8%"><button type="button" class="btn btn-info btn-sm" onclick="listComputerByCategory(${items[i].id})">Computadores</td>   
                        <td style="width:8%"><button type="button" class="btn btn-sm btn-outline-dark" onclick="deleteClient(${items[i].id})">Borrar</td>
                    </tr>
                </tbody>
        `;
    }

    tabla += `</table>`;
    $("#listado").html(tabla);
}

function listComputer() {
    $.ajax({
        url: "http://144.22.242.160:8080/api/Computer/all",
        type: 'GET',
        contentType: "application/JSON",
        success: function (items) {
            listComputerByCategory(items);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR, textStatus, errorThrown);
        }
    });
}

function listComputerByCategory(items){
    var tabla = `<table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripción</th>
                        <th scope="col" colspan=2>Acciones</th>
                    </tr>
                </thead>`;

    for (var i = 0; i < items.length; i++) {
        tabla += `<tbody>
                    <tr>
                        <td>${items[i].name}</td>
                        <td>${items[i].description}</td>
                        <td style="width:8%"><button type="button" class="btn btn-info btn-sm" onclick="detailClient(${items[i].id})">Detalle</td>   
                        <td style="width:8%"><button type="button" class="btn btn-sm btn-outline-dark" onclick="deleteClient(${items[i].id})">Borrar</td>
                    </tr>
                </tbody>
        `;
    }

    tabla += `</table>`;
    $("#listadoComputadores").html(tabla);
}


function detailCategory(id) {
    window.location.href = "../../views/client/detailClient.html?id=" + id;
}
listCategory();