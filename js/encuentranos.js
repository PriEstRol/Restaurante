var pos;
var mapa;
var geocoder;
var infowindow;

function initMap() {
    if ("geolocation" in navigator) {
        return navigator.geolocation.getCurrentPosition(Mapa);
    } else {
        document.write('Desactivado');
    }
    ;
};

function Mapa(position) {
    pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    };
    mapa = new google.maps.Map(document.getElementById('mapa'), {
        zoom: 15,
        center: pos
    });
    carl(geocoder, mapa, infowindow)
};

function carl(geocoder, mapa, infowindow) {
    geocoder = new google.maps.Geocoder;
    infowindow = new google.maps.InfoWindow;
    geocoder.geocode({
        'location': pos
    }, function (results) {
        mapa.setZoom(17);
        var marker = new google.maps.Marker({
            position: pos,
            map: mapa
        });
        infowindow.setContent(results[1].formatted_address);
        infowindow.open(mapa, marker);
    });
};