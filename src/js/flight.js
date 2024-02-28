var flights = null;

function getFlights() {
    var request = new XMLHttpRequest();
    var url = "http://localhost:8080/flights";

    request.onreadystatechange = function() {
        console.log(this.readyState);
        if (this.readyState == 4 && this.status == 200) {
            flights = JSON.parse(this.responseText);
            printFlights(flights);

            /* RICERCA */
            var filtered = null;
            document.getElementById("input-search").addEventListener("keyup", event => {
                var pattern = event.target.value;
                if (pattern) {
                    filtered = flights.filter(function(f) {
                        return f.departure.indexOf(pattern) !== -1 || 
                        f.arrival.indexOf(pattern) !== -1 || 
                        f.airline.indexOf(pattern) !== -1 || 
                        f.price.indexOf(pattern) !== -1;
                    });
                    printFlights(filtered);
                }
                else {
                    printFlights(flights);
                }    
            });
        }
    }
    request.open('GET', url);
    request.send();

    /* FLIGHT */
    function printFlights(arr) {  // prende gli array dal server e lo stampa
        var i;
        document.getElementById("inner_container_list_item").innerHTML = "";
        for (i = 0; i < arr.length; i++) {

            /* Box Preview */
            var box_preview = document.createElement("div");
            box_preview.className = "box-preview";

            /* Box Header */
            var box_preview_header = document.createElement("div");
            box_preview_header.className = "box-preview-header";
            var box_preview_header_text = document.createElement("div");
            box_preview_header_text.appendChild(document.createTextNode(arr[i].name));
            box_preview_header_text.appendChild(document.createElement("br"));
            box_preview_header_text.appendChild(document.createTextNode("Departure:"));
            box_preview_header_text.appendChild(document.createElement("br"));
            box_preview_header_text.appendChild(document.createTextNode("date: " + arr[i].departure.date));
            box_preview_body_text.appendChild(document.createElement("br"));
            box_preview_header_text.appendChild(document.createTextNode("time: " + arr[i].departure.time));
            box_preview_body_text.appendChild(document.createElement("br"));
            box_preview_header_text.appendChild(document.createTextNode("airport: " + arr[i].departure.airport));
            box_preview_header.appendChild(box_preview_header_text);

            /* Box Body */
            var box_preview_body = document.createElement("div");
            box_preview_body.className = "box-preview-body";
            var box_preview_body_text = document.createElement("div");
            box_preview_body_text.appendChild(document.createTextNode("Destination: " + arr[i].destination));
            box_preview_body_text.appendChild(document.createElement("br"));
            box_preview_body_text.appendChild(document.createTextNode("Arrival:"));
            box_preview_body_text.appendChild(document.createElement("br"));
            box_preview_body_text.appendChild(document.createTextNode("date: " + arr[i].arrival.date));
            box_preview_body_text.appendChild(document.createElement("br"));
            box_preview_body_text.appendChild(document.createTextNode("time: " + arr[i].arrival.time));
            box_preview_body_text.appendChild(document.createElement("br"));
            box_preview_body_text.appendChild(document.createTextNode("airport: " + arr[i].arrival.airport));
            box_preview_body.appendChild(box_preview_body_text);

            /* Box Footer */
            var box_preview_footer = document.createElement("div");
            box_preview_footer.className = "box-preview-footer";
            box_preview_footer.innerHTML = <a href="# " class="flight-button" onclick="viewFlight('${arr[i].id}') "><button>View More</button></a>;
        }
    }
}
getFlights();