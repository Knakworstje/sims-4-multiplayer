const express = require('express')
const bodyParser = require('body-parser');
const robot = require('robotjs');
let sim = 2;
const port = 3000;
var router = express.Router();
let app = express();

do {
    console.stdlog = console.log.bind(console);
    console.logs = [];
    console.log = function(){
        if(Array.from(arguments) !== null || Array.from(arguments) !== undefined || Array.from(arguments) !== '') {
        console.logs.push(Array.from(arguments));
        console.stdlog.apply(console, arguments);
        }
    }
} while(true)





app.use(bodyParser.urlencoded({ extended: false }));

do {
    if(console.logs[console.logs.lenght - 1] !== null|| console.logs[console.logs.lenght - 1] !== undefined || console.logs[console.logs.lenght - 1] !== '') {
    app.get('/', (req, res) => {
        var mouse = robot.getMousePos();
        res.send(sim, mouse.x, mouse.y, console.logs[console.logs.lenght - 1]);
    })
    app.get('/', (req, res) => {
        console.log(req);
    })
}
} while(true)


app.listen(port, () => {
    console.log(`Listening to port, ${port}`);
})



