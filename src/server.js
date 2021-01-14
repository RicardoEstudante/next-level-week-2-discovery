const express = require('express');
const server = express();

const { pageLanding, pageStudy, pageGiveClasses } = require('./pages')

const nunjucks = require('nunjucks');

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
});

server.use(express.static("public"));

server.get('/', pageLanding);
server.get('/study', pageStudy);
server.get('/give-classes', pageGiveClasses);

server.listen(3333, () => { 
    console.log("Server onFire🔥");
});
