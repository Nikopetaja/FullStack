function showAlert() {
    var currentDate = new Date();
    alert("You clicked me!\nCurrent Date: " + currentDate)
}

function showTable() {
    var tableData = [
        ["Name", "Position", "Salary"],
        ["Tiger Nixon", "System Architect", "$320,800"],
        ["Garret Winters", "Accountant", "$170,750"],
        ["Ashton Cox", "Junior Technical Author", "$86,000"],
        ["Cedric Kelly", "Senior Javascript Developer", "$433,060"],
        ["Airi Satou", "Accountant", "$162,700"]
    ];

    var tableHTML = '<table border=1>';

    for (var i = 0; i < tableData.length; i++) {
        tableHTML += '<tr>';

        for (var j = 0; j < tableData[i].length; j++) {
            tableHTML += '<td>' +tableData[i][j] + '</td>';
        }

        tableHTML += '<tr>';
    }

    tableHTML += '</table>';

    document.write(tableHTML);
} 

function checkGeolocation() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
            function(Position) {
                var latitude = Position.coords.latitude;
                var longitude = Position.coords.longitude;

                console.log("Latitude: " + latitude);
                console.log("Longitude: " + longitude);

                document.write("Latitude: " + latitude + '<br>');
                document.write("Longitude: " + longitude);
            },
            function(error) {
                console.error("Error getting geolocation: ", error.message);
                document.write("Error getting geolocation: " + error.message);
            }
        );
    }  else {
        console.error("Geolocation is not supported by this browser.");
        document.write("Geolocation is not supported by this browser.");
}
}
