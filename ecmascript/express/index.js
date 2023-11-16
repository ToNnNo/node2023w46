import express, { bodyParser } from 'express';
import path from 'path';

import home from './router/home.js';
import presentation from './router/presentation.js';
import webservice from './router/webservice.js';
import cache from './router/cache.js';

import { fileURLToPath } from 'url';
global.__dirname = fileURLToPath(new URL('.', import.meta.url));

const app = express();

// view
app.set('views', path.join(__dirname, 'template'));
app.set('view engine', 'ejs');

app.use( express.static(path.join(__dirname, 'public')) );

// Middleware (chain of responsability)
app.use((req, res, next) => {
    const formatter = new Intl.DateTimeFormat("fr-FR", {
        dateStyle: 'medium',
        timeStyle: 'long',
        timeZone: 'Europe/Paris'
      });

    console.log(`${formatter.format(Date.now())} [App] accès à l'url : ${req.url} - method ${req.method}`);
    next();
});

// Pour récupérer les valeurs d'une requête POST
// met les valeurs dans req.body
app.use(bodyParser.urlencoded({extended: true}));

// session

// Route
// Pour accéder à une page, on a besoin de son chemin (path) et d'un verb http (method)
app.use(home);
app.use('/presentation', presentation);
app.use('/webservice', webservice);
app.use('/cache', cache);

app.use((req, res) => {
    res.status(404).send("<h1>Page Not Found</h1><hr />");
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send("<h1>Internal Server Error</h1><hr />");
});

const port = process.env.PORT || 3200; // PORT=3032 node ecmascript/server
app.listen(port, 'localhost', () => {
    console.log(`Personal Node Server is listenning on http://localhost:${port}`);
    console.log('Shutdown Node Server with CTRL + C');
});
