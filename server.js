const express = require('express');
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 80;
const app = express();
app.use(cors());

// serve web components and node_module dependencies normally
app.use('/components', express.static(__dirname + '/components'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.get('/api/languages', (request, response) => {
  let languages = [
    {
      description: 'English',
      code: 'en'
    },
    {
      description: 'French',
      code: 'fr'
    },
    {
      description: 'German',
      code: 'de'
    },
    {
      description: 'Hindi',
      code: 'hi'
    }
  ];
  response.json(languages);
});

app.get('/api/greeting/:language', (request, response) => {
  if (request.params.language === 'en') {
    response.json({message: 'Hello World'});
  } else if (request.params.language === 'fr') {
    response.json({message: 'Bonjour le monde'});
  } else if (request.params.language === 'de') {
    response.json({message: 'Hallo Welt'});
  } else if (request.params.language === 'hi') {
    response.json({message: 'नमस्ते दुनिया'});
  } else {
    response.status(400).json({error: `Invalid language specified: ${request.query.language}.`});
  }
});

app.get('node_modules', express.static(__dirname ));

app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);
console.log(`server started on port ${port}`);
