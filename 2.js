const EventEmitter = require('events')

class School extends EventEmitter {
    startperiod() {
        console.log("Start")
        setTimeout(() => {
            this.emit('belring', {
                period: '1',
                text: 'go home'
            })
        }, 2000);
    }
}
module.exports = School