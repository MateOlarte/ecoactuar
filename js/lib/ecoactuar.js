(function() {

	StackMob.init({
    appName: "ecoactuar",
    clientSubdomain: "mateoolarte8gmailcom",
    publicKey: "b7db71d3-2ff2-4b9f-9e94-b21653d6c9fe",
    apiVersion: 0
	});

  $('#enviar').click(function(e) {
    e.preventDefault();

    var reports = StackMob.Model.extend({ schemaName: 'reports' });
    var entry = new reports({ title: 'bnbnb', description: "nbnbn", location: "" });
    entry.create();

    console.log("Created a report in StackMob server");

    /*coderisers = new Coderiser();

    coderisers.fetch({
      success: function(model) {
        console.log(model.toJSON());
      },
      error: function(mode, response) {
        console.log(response);
      }
    });*/
  });
});