function initialize() {	
	var myOptions = {
	  scrollwheel: false,
	  navigationControl: true,
		mapTypeControl: true,
		scaleControl: false,
		draggable: true,
	  zoom: 12,
	  center: new google.maps.LatLng(6.235925,-75.575137),
	  mapTypeId: google.maps.MapTypeId.ROADMAP
  }, myOptions;
            
  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

  var point = new google.maps.LatLng(6.235925,-75.575137);
  var marker = new google.maps.Marker ({
	  position:point,
	  map:map,
	  title:"Desastres",
	  draggable:true,
	  icon:"images/danger.png",
  })
            
  var contentstring = "<div>Se esta presentado un desastre en esta zona</div>";
  var infowindow = new google.maps.InfoWindow ({
  	content: contentstring
  })
           
    google.maps.event.addListener(marker, "click", function(){
    infowindow.open(map,marker);
            
    });
}