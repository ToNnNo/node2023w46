import http from "http";
import { read } from "#utils";
import { fileURLToPath } from 'url';

global.__dirname = fileURLToPath(new URL('.', import.meta.url));

const server = http.createServer();

server.on("request", async (request, response) => {
    let content;

    // request.url == /             --> www/index.html
    // request.url == /index.html   --> www/index.html
    // request.url == /contact.html --> www/contact.html

    // si un fichier n'existe pas (ex: /toto.html) --> 404.html

    response.statusCode = 200;
    let page = request.url;
    if(page == "/") {
        page = "index.html";
    }

    try{
        content = await read(page);
    }catch(e){
        response.statusCode = 404;
        content = "<html><h1>Page Not Found</h1><hr /></html>";
    }
    
    response.end(content);
});

const port = process.env.PORT || 3000; // PORT=3032 node ecmascript/server
server.listen(port);
console.log(`Personal Node Server is listenning on http://localhost:${port}`);
console.log('Shutdown Node Server with CTRL + C');