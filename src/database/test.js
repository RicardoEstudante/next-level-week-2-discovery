const Database = require('./db');
const createProffy = require('./createProffy');


Database.then((db) => {
    proffyValue = {
            name: "Ricardo Carvalho",
            avatar: "https://avatars0.githubusercontent.com/u/42756551?s=60&v=4",
            whatsapp: "11999999999",
            bio: "Entusiasta das melhores tecnologias de química avançada.",
        }

        classValue = {
            subject: "História",
            cost: "20",
        }
        
        classScheduleValue = [{
            weekday: 1,
            time_from: 720,
            time_to: 1220,
        }, 
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220,
        }
    ]

    // createProffy(db, {proffyValue, classValue, classScheduleValue});
})