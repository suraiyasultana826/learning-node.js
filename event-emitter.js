const EventEmitter = require("events")
const myEmitter  = new EventEmitter()

//listener

myEmitter.on('birthday', () => {
    console.log(`Happy Birthday To You`);
})

myEmitter.on('birthday', (gift) =>{
    console.log(`I will send you a ${gift}`);
})

myEmitter.emit('birthday', 'bike')