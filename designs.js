// When size is submitted by the user, save inputs in variables
// Call makeGrid()
let grid = $('#pixelCanvas');
let heightInput, widthInput;

$('#sizePicker').submit(function( event ) {
        grid.empty(); //clear table and creates new one based on new inputs
        heightInput = $('#inputHeight').val();
        widthInput = $('#inputWidth').val();
        event.preventDefault();

        makeGrid(widthInput, heightInput);
});

// Color input
let color;
grid.on('click', 'td', function ( event ) {
    color = colorInput();
    // if event target already has a background color style property, clear it
    if ($(this).is('td[style^="background-color"]')) {
        $(this).css('background-color', '');
    } else {
        $(this).attr('style', 'background-color: '+ color);
    }
});

// get selected color from picker
function colorInput() {
    const color = $('#colorPicker').val();
    return color;
};

function makeGrid(w, h) {
    for (var y = 1; y <= h; y++) {
        grid.append("<tr>"); //adds new row
        for (var x = 1; x <= w; x++) {
            $(grid.children("tr")).last().append("<td></td>"); //adds td for that row -- last() will match on "current" row
        }
        grid.append("</tr>");
    }
}
