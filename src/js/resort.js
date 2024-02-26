function getHotels() {
    var request = new XMLHttpRequest();
    var url = "http://localhost:8080/hotels";

    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            hotels = JSON.parse(this.responseText);
            printHotels(hotels);
            console.log(hotels);
        }
    };

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
            var box_preview_body_img = document.createElement("img");
            var box_preview_body_text = document.createTextNode(arr[i].address.streetAddress + ", " + arr[i].address.city + ", " + arr[i].address.state + ", " + arr[i].address.zipCode);
            box_preview_body.appendChild(box_preview_body_text);

            /** Box Footer **/
            var box_preview_footer = document.createElement("div");
            box_preview_footer.className = "box-preview-footer";
            box_preview_footer.innerHTML = '<a href="#" class="button button1" onclick="viewHotel(\'' + arr[i].id + '\')">View More</a>';

            box_preview.appendChild(box_preview_header);
            box_preview.appendChild(box_preview_body);
            box_preview.appendChild(box_preview_footer);

            document.getElementById("inner_container_list_item").appendChild(box_preview);
        }
    }
}

getHotels();