var map = L.map('map').setView([45.5, 10], 7);
            
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Aggiungi un marcatore per l'hotel a Roma
var hotelMarker = L.marker([45.85912814574218, 9.117654452551806]).addTo(map);
hotelMarker.bindPopup("<b>Il Sereno Lago di Como</b><br>Posizione: Como, Italia.").openPopup();
var hotelMarker = L.marker([46.38840987541524, 11.664281781418415]).addTo(map);
hotelMarker.bindPopup("<b>Hotel Suites Spa</b><br>Posizione: Trento, Italia.").openPopup();
var hotelMarker = L.marker([46.283995963782736, 10.65951189675568]).addTo(map);
hotelMarker.bindPopup("<b>Hotel Chalet Al Foss</b><br>Posizione: Trento, Italia.").openPopup();
var hotelMarker = L.marker([46.77501662738849, 11.942587740963733]).addTo(map);
hotelMarker.bindPopup("<b>Falkensteiner Hotel Kronplatz</b><br>Posizione: Bolzano, Italia.").openPopup();
var hotelMarker = L.marker([46.5543377467958, 11.76074182883585]).addTo(map);
hotelMarker.bindPopup("<b>Linder Cycling Hotel</b><br>Posizione: Bolzano, Italia.").openPopup();
var hotelMarker = L.marker([46.16722694732933, 10.766357896748906]).addTo(map);
hotelMarker.bindPopup("<b>Lefay Resort & SPA Dolomiti</b><br>Posizione: Trento, Italia.").openPopup();
var hotelMarker = L.marker([46.555661882280475, 11.874238558671053]).addTo(map);
hotelMarker.bindPopup("<b>TH Corvara - Greif Hotel</b><br>Posizione: Bolzano, Italia.").openPopup();
var hotelMarker = L.marker([45.81187478745044, 6.961051040907493]).addTo(map);
hotelMarker.bindPopup("<b>TH Courmayeur</b><br>Posizione: Valle d'Aosta, Italia.").openPopup();
var hotelMarker = L.marker([45.712417243972, 6.94923367343944]).addTo(map);
hotelMarker.bindPopup("<b>TH La Thuile - Planibel Residence</b><br>Posizione: Valle d'Aosta, Italia.").openPopup();