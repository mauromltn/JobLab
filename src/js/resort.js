function getHotels() {
    var request = new XMLHttpRequest();
    var url = "http://localhost:8080/hotels";

    request.onreadystatechange = function() {
        console.log(this.readyState);
        if (this.readyState == 4 && this.status == 200) {
            hotels = JSON.parse(this.responseText);
            printHotels(hotels);

            /*LISTENER*/
            var filtered = null;
            document.getElementById("input-search").addEventListener("keyup", event => {
                var pattern = event.target.value;
                if (pattern) {
                    filtered = hotels.filter(function(h) {
                        return h.name.indexOf(pattern) !== -1 || 
                        h.address.city.indexOf(pattern) !== -1 || 
                        h.address.country.indexOf(pattern) !== -1 || 
                        String(h.stars).indexOf(pattern) !== -1;
                    });
                    printHotels(filtered);
                }
                else {
                    printHotels(hotels);
                }    
            });
        }
    }
    request.open('GET', url);
    request.send();


    function printHotels(arr) {
        var i;
        document.getElementById("inner_container_list_item").innerHTML = "";
        for (i = 0; i < arr.length; i++) {
            /** Box Preview **/
            var box_preview = document.createElement("div");
            box_preview.className = "box-preview";

            /** Box Header **/
            var box_preview_header = document.createElement("div");
            box_preview_header.className = "box-preview-header";
            var box_preview_header_text = document.createTextNode(arr[i].name);
            box_preview_header.appendChild(box_preview_header_text);

            /** Box Body **/
            var box_preview_body = document.createElement("div");
            box_preview_body.className = "box-preview-body";
            var box_preview_body_text = document.createElement("div");
            box_preview_body_text.appendChild(document.createTextNode("Address: " + arr[i].address.streetAddress));
            box_preview_body_text.appendChild(document.createElement("br"));
            box_preview_body_text.appendChild(document.createTextNode("City: " + arr[i].address.city));
            box_preview_body_text.appendChild(document.createElement("br"));
            box_preview_body_text.appendChild(document.createTextNode("State:" + arr[i].address.state));
            box_preview_body_text.appendChild(document.createElement("br"));
            box_preview_body_text.appendChild(document.createTextNode("Zip Code: " + arr[i].address.zipCode));
            box_preview_body_text.appendChild(document.createElement("br"));
            box_preview_body_text.appendChild(document.createElement("br"));
            box_preview_body_text.appendChild(document.createTextNode("Phone: " + arr[i].phone));
            box_preview_body_text.appendChild(document.createElement("br"));
            box_preview_body_text.appendChild(document.createTextNode("Email: " + arr[i].email));
            box_preview_body_text.appendChild(document.createElement("br"));
            box_preview_body_text.appendChild(document.createTextNode("Website: " + arr[i].website));
            box_preview_body_text.appendChild(document.createElement("br"));
            box_preview_body_text.appendChild(document.createTextNode("Rooms: " + arr[i].rooms));
            box_preview_body.appendChild(box_preview_body_text);

            /** Box Footer **/
            var box_preview_footer = document.createElement("div");
            box_preview_footer.className = "box-preview-footer";
            box_preview_footer.innerHTML = '<a href="#" class="button button1" onclick="viewHotel(\'' + arr[i].id + '\')"><button>View More</button></a>';

            box_preview.appendChild(box_preview_header);
            box_preview.appendChild(box_preview_body);
            box_preview.appendChild(box_preview_footer);

            document.getElementById("inner_container_list_item").appendChild(box_preview);
        }
    }
}
getHotels();

function viewHotel(id){
    var i;
    var j;
    var hotel;
    var dettaglio_header = "";
    var dettaglio_body = "";
    var dettaglio_footer = "";

    
    document.getElementById("inner_container_list").style.display = "none";
    document.getElementById("inner_container_detail").style.display = "block"; 

    for(i = 0; i < hotels.length; i++)
        if(hotels[i].id == id) hotel = hotels[i];
        dettaglio_header += '<div>' + hotel.name + ' ';
    for(k = 0; k < hotel.stars; k++){
        dettaglio_header += '<img src="image/stars/star.png" class="star" >';
    }

    dettaglio_header += '</div>';

    dettaglio_body +='<div>' + hotel.longDescription + '</div>';
    dettaglio_body += '<div class="box_container">';

    dettaglio_body += getHtmlHotelDetailBox('Number of rooms', '', hotel.rooms, 'sfondo');
    dettaglio_body += getHtmlHotelDetailBox('Number of rooms', '', hotel.rooms, 'sfondo');
    dettaglio_body += getHtmlHotelDetailBox('Phone', '', hotel.phone, 'sfondo');
    dettaglio_body += getHtmlHotelDetailBox('Email', '', hotel.email, 'sfondo');
    dettaglio_body += getHtmlHotelDetailBox('Website', '', hotel.website, 'sfondo');

    dettaglio_body += '</div>';

    
    dettaglio_footer += '<div>' 
    dettaglio_footer += '<address>Address:'+hotel.address.streetAddress+', '+hotel.address.city+', '+hotel.address.country+' - '+hotel.address.zipCode+'</address>';
    dettaglio_footer += '</div>';

    
    document.getElementById("box_detail_header").innerHTML = dettaglio_header;
    document.getElementById("box_detail_body").innerHTML = dettaglio_body;
    document.getElementById("box_detail_footer").innerHTML = dettaglio_footer;

}

function getHtmlHotelDetailBox(title, img, info, color){
    str_code = "";
    str_code += '<div class="items_detail_box '+color+'">';
    str_code += '<p>'+title+'<br><img src="'+img+'" class="immagine" alt=""/><br>';
    str_code += '<strong>'+info+'</strong></p>';
    str_code += '</div>';
    return str_code;
}

function goBack() {
    document.getElementById("inner_container_list").style.display = "block";
    document.getElementById("inner_container_detail").style.display = "none";
}