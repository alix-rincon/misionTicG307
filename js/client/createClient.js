function addClient() {
    var params = {
        id: $("#id").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        age: $("#age").val()
    }
    let dataToSend = JSON.stringify(params);
    $.ajax({
        url:"https://g0cfb8d8089c168-bdrentcar.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        data:dataToSend,
        type:'POST',
        contentType:"application/JSON",
        success: function () {
            $(".container input").val("");
            $("#alertSuccess").show().delay(3000).fadeOut();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR , textStatus, errorThrown);
        }
    });
}