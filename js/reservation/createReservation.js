function createReservation() {
    var params = {
        startDate: $("#dateBegin").val(),
        devolutionDate: $("#endDate").val(),
        client: { idClient: $("#clientId").val() },
        computer: { id: $("#computerId").val() }
    }
    let dataToSend = JSON.stringify(params);
    $.ajax({
        url: "http://144.22.242.160:8080/api/Reservation/save",
        data: dataToSend,
        type: 'POST',
        contentType: "application/JSON",
        success: function () {
            $(".container input,textarea").val("");
            $(".container select").val("Seleccione...");
            $("#alertSuccess").show().delay(3000).fadeOut();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR, textStatus, errorThrown);
        }
    });
}


function listComputer() {
    $.ajax({
        url: "http://144.22.242.160:8080/api/Computer/all",
        type: 'GET',
        contentType: "application/JSON",
        success: function (items) {
            var select = `<option selected>Seleccione...</option>`;
            for (var i = 0; i < items.length; i++) {
                select += `
                    <option value="${items[i].id}">${items[i].name}</option>`;
            }
            $("#computerId").html(select);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR, textStatus, errorThrown);
        }
    });
}

function listClient() {
    $.ajax({
        url: "http://144.22.242.160:8080/api/Client/all",
        type: 'GET',
        contentType: "application/JSON",
        success: function (items) {
            var select = `<option selected>Seleccione...</option>`;
            for (var i = 0; i < items.length; i++) {
                select += `
                    <option value="${items[i].idClient}">${items[i].name}</option>`;
            }
            $("#clientId").html(select);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR, textStatus, errorThrown);
        }
    });
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
$( document ).ready(function() {
    $('#dateBegin').val(formatDate(new Date().toString()));
});

listComputer();
listClient();
