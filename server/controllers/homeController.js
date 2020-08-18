const Viaje = require ('../models/Viajes');
const testimonial = require ('../models/Testimoniales');


exports.consultasHomePage = async (req,res) => {

    //Con la ayuda de promises y resultado se logra pasar mas de una colsuta de la bd, en este caso a viajes y testimoniales
 

    const viajes = await Viaje.findAll({
            limit: 3
    })

    const testimoniales = await testimonial.findAll({
        limit: 3
    })
 
    res.render('index', {
        pagina: 'Nuestros Viajes',
        viajes: viajes,
        testimoniales: testimoniales,
        clase: 'home'
    })
    
}