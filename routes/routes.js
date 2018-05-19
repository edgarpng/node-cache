var appRouter = function (app) {
  app.get("/cache/:key", function(req, res) {
    var key = req.params.key;
    res.status(200).send("Getting key: " + key);
  });

  app.get("/cache", function(req, res) {
    //TODO
    res.status(200).send("Getting all keys");
  });

  app.post("/cache/:key", function(req, res) {
    //TODO
    var key = req.params.key;
    var value = req.body.value;
    res.status(200).send("Setting value of key " + key + " to " + value);
  });

  app.delete("/cache/:key", function(req, res) {
    //TODO
    var key = req.params.key;
    res.status(200).send("Deleting value for key " + key);
  });

  app.delete("/cache", function(req, res) {
    //TODO
    res.status(200).send("Deleting every key");
  });
}

module.exports = appRouter;
