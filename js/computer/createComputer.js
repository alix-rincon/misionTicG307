function agregar() {
    var params = {
        id: $("#id").val(),
        brand: $("#brand").val(),
        model: $("#model").val(),
        category_id: $("#category_id").val(),
        name: $("#name").val()
    }
    let dataToSend = JSON.stringify(params);
    $.ajax({
        url:"https://g0cfb8d8089c168-bdrentcar.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/computer/computer",
        data:dataToSend,
        type:'POST',
        contentType:"application/JSON",
        success: function (response) {
            $(".container input").val("");
            $(".container select").val("Seleccione...");
            $("#alertSuccess").show().delay(3000).fadeOut();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR , textStatus, errorThrown);
        }
    });
}