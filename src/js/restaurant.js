var restaurants = null;

function getRestaurants() {
    var request = new XMLHttpRequest();
    var url = "http://localhost:8080/restaurants";

    request.onreadystatechange = function() {
        console.log(this.readyState);
        if (this.readyState == 4 && this.status == 200) {
            restaurants = JSON.parse(this.responseText);
            printRestaurants(restaurants);

            var filtered = null;
            document.getElementById("input-search").addEventListener("keyup", event => {
                var pattern = event.target.value;
                if (pattern) {
                    filtered = restaurants.filter(function(h) {
                        return h.name.indexOf(pattern) !== -1 || 
                        h.address.city.indexOf(pattern) !== -1 || 
                        h.address.country.indexOf(pattern) !== -1 || 
                        String(h.stars).indexOf(pattern) !== -1;
                    });
                    printRestaurants(filtered);
                }
                else {
                    printRestaurants(restaurants);
                }    
            });
        }
    }
    request.open('GET', url);
    request.send();

    function printRestaurants(arr) {
        var i;
        document.getElementById("inner_container_list_item").innerHTML = "";
        for (i = 0; i < arr.length; i++) {

            /* Box Preview */
        }
    }
}