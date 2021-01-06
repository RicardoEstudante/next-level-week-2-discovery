const proffys = [
    {
        name: "Ricardo Carvalho",
        avatar: "https://avatars0.githubusercontent.com/u/42756551?s=60&v=4",
        whatsapp: "11999999999",
        bio: "Entusiasta das melhores tecnologias de química avançada.",
        subject: "História",
        cost: "20",
        weekday: [0,3,5            
        ],
        time_from: [720],
        time_to: [1220],
    },
    {
        name: "Teste",
        avatar: "https://avatars0.githubusercontent.com/u/42756551?s=60&v=4",
        whatsapp: "11999999999",
        bio: "Entusiasta das melhores tecnologias de química avançada.",
        subject: "História",
        cost: "20",
        weekday: [0,3,5            
        ],
        time_from: [720],
        time_to: [1220],
    }
];

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física", 
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
];

const weekdays = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
];

function getSubject(subjectNumber) {
    const position = +subjectNumber -1
    return subjects[position];
}

function pageLanding(req, res) {
    return res.render('index.html');
};

function pageStudy(req, res) {
    const filters = req.query;
    return res.render('study.html', { proffys, filters, weekdays, subjects});
};

function pageGiveClasses(req, res) {
    const data = req.query;
    const isNotEmpty = Object.keys(data).length > 0

    if (isNotEmpty) { 
        data.subject = getSubject(data.subject);
        proffys.push(data);

        return res.redirect('/study');
    };

    return res.render('give-classes.html', {weekdays, subjects});
};

const express = require('express');
const server = express();

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
