const express = require('express')
const app = express();
const morgan = require('morgan');

//configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2); 

//middlewares
app.use(morgan(`dev`));
app.use(express.urlencoded({extended: false}));
app.use(express.json());    

//rutas
app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies'));

//empezando el servidor
app.listen(app.set('port'), () =>{
    console.log(`Server on port ${app.set('port')}`);
});