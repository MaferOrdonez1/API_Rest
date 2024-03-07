//requerir desde express, nuevas rutas para el servidor
const {Router} = require('express');
const router = Router();


//rutas

router.get('/test', (req, res) => {
    const data = {
        name: "Fazt",
        website: "faztweb.com"
    };
    res.json(data);
});


module.exports = router;
