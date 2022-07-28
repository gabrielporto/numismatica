/* Custom filtering function which will search data in column four between two values */
$.fn.dataTable.ext.search.push(function (settings, data, dataIndex) {
    var min = parseInt($('#min').val(), 10);
    var max = parseInt($('#max').val(), 10);
    var age = parseFloat(data[0]) || 0; // use data for the age column

    if (
        (isNaN(min) && isNaN(max)) ||
        (isNaN(min) && age <= max) ||
        (min <= age && isNaN(max)) ||
        (min <= age && age <= max)
    ) {
        return true;
    }
    return false;
});

$(document).ready(function () {
    fetch("./data.json?v1")
        .then(response => {
            return response.json();
        })
        .then(function (jsondata) {
            generate_table(jsondata);
        });

    function generate_table(jsondata) {
        var table = $('#example').DataTable({
            data: jsondata,
            columns: [
                {
                    title: 'Numero',
                    data: 'Numero'
                },
                {
                    title: 'Tipo',
                    data: 'Tipo'
                }
            ],
        });

        $('#min, #max').keyup(function () {
            table.draw();
        });
    }
});