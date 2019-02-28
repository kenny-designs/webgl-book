const express = require('express'),
      path = require('path'),
      app = express(),
      port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname));
});


app.get(/^\/ch(\d+)/, (req, res) => {
  res.sendFile(path.join(__dirname, './public/ch' + req.params[0]));
});

app.listen(port, () => console.log(`Now listening on port ${port}!`))
