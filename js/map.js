function initialize() {	
    $(document).ready(function() {
        StackMob.init({
        appName: "ecoactuar",
        clientSubdomain: "mateoolarte8gmailcom",
        publicKey: "b7db71d3-2ff2-4b9f-9e94-b21653d6c9fe",
        apiVersion: 0
        });

      var reports = StackMob.Model.extend({ schemaName: 'reports' });
      var reports = new reports(); 

	    var myOptions = {
    	    scrollwheel: false,
    	    navigationControl: true,
    	    mapTypeControl: true,
    		  scaleControl: false,
    		  draggable: true,
    	    zoom: 12,
    	    center: new google.maps.LatLng(6.235925,-75.575137),
    	    mapTypeId: google.maps.MapTypeId.ROADMAP
        },  myOptions;
            
      var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
      var infowindow = new google.maps.InfoWindow;
        
        //recoje todo lo de stackmob
        reports.fetch({
          //si es correcto
          success: function(model) {
            var reports = model.toJSON();
            //recorre la funcion report
            $.each(reports, function(ix, report) {
                
              console.log(report);
                    
              //ubica un punto en el mapa  
              var point = new google.maps.LatLng(report.location.lat, report.location.lon);
              //crea el punto en el mapa
              var marker = new google.maps.Marker ({
                position:point,
                map:map,
                title:report.title,
                draggable:true,
                icon:"images/danger.png", 
              })  
                  
              //
              var contentString = report.description;
              bindInfoW(marker, contentString, infowindow, map);
            });
          }
        });
    });
}

function bindInfoW(marker, contentString, infowindow, map)
{
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(contentString);
            infowindow.open(map, marker);
        });
}