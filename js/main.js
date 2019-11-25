function initMap() {
  // The location of Long Beach
  var uluru = { lat: 33.7690164, lng: -118.1916048 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: uluru
  });
  // The marker, positioned at Long Beach
  var marker = new google.maps.Marker({ position: uluru, map: map });
}

$("#main-header a, #main-footer a").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      800
    );
  }
});
