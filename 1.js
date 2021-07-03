const Event = require('events')
class School extends Event {
    starperiod() {
        console.log("Class started")
        setTimeout(() => {
            this.emit('belring', {
                class1: 'first class',
                text: 'finish'
            })
        }, 2000);
    }
}
module.exports = School