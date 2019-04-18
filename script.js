$('#calculate').click(function (e) { 
    e.preventDefault();
    height = $('#height');
    distance = $('#distance');
    inclination = $('#inclination');
    if (height.val() && distance.val()) {
        $('#result').text(`Inclinação: ${height.val().replace(/,/g, '.')/distance.val().replace(/,/g, '.') * 100}%`);
    }

    if (height.val() && inclination.val()) {
        $('#result').text(`Distância: ${height.val().replace(/,/g, '.')/inclination.val().replace(/,/g, '.') * 100}`);
    }

    if (distance.val() && inclination.val()) {
        $('#result').text(`Altura: ${distance.val().replace(/,/g, '.') * inclination.val().replace(/,/g, '.') / 100}`);
    }
});