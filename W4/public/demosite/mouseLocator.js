function locateMouse(event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    console.log('Mouse Coordinates (X, Y):', mouseX, mouseY);

    document.getElementById('coords').innerHTML = 'Mouse Coordinates: ' + mouseX + ', ' + mouseY;
    
}