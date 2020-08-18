const express =  require('express')
const router = express.Router();

const { render } = require('pug');
//Exportanddo controladores
const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController')
const viajesController = require('../controllers/viajesController')
const testimonialesController = require('../controllers/testimonialesController')

module.exports = function() {
    router.get('/', homeController.consultasHomePage);    
    
    router.get('/nosotros', nosotrosController.infoNosotros );

    router.get('/viajes', viajesController.consultasViajes);

    router.get('/viajes/:id', viajesController.viajesIndividuales);

    router.get('/testimoniales', testimonialesController.mostrandoTestimoniales);

    //Cuando se llena el formulario
    router.post('/testimoniales', testimonialesController.agregarTestimonial);

    return router;
}         