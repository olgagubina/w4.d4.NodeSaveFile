$('.send').on('click', function(){
    // alert('Ululu!');
    $.ajax({
        method: "GET",
        url: 'file',
        success: function(data) {
            $('.data').append(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    });
});

