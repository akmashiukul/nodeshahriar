const School = require("./1")
const school = new School();
school.on('belring', ({ class1, text }) => {
        console.log(`run becouse ${class1} ${text}`)
    })
    // raise an event
school.starperiod()