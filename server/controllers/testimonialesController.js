const testimonial = require ('../models/Testimoniales');
const Testimonial = require('../models/Testimoniales');

exports.mostrandoTestimoniales = async (req,res) => {
    const testimoniales = await testimonial.findAll()
    res.render('testimoniales', {
        pagina: 'Testimoniales',  //Pagina es una variable que soloestara disponible para la vista nosotros
        testimoniales: testimoniales
    })
}

exports.agregarTestimonial = async (req, res) =>{
    let {nombre, correo, mensaje} = req.body;

    let errores = [];
    if(!nombre){
        errores.push({'mensaje': 'Agrega tu nombre'})
    }
    if(!correo){
        errores.push({'mensaje': 'Agrega tu correo'})
    }
    if(!mensaje){
        errores.push({'mensaje': 'Agrega tu mensaje'})
    }

    //Revisa errores, si existe algo en la variable de errores es que surgio un error
    if(errores.length > 0){
        //Muestra la vista con errores
        const testimoniales = await Testimonial.findAll()
        res.render('testimoniales', {
            errores,
            nombre,
            correo,
            mensaje,
            pagina: 'Testimoniales',
            testimoniales
        })
        
    }else{
        //Almacena los datos en la bd
        testimonial.create({
            nombre,
            correo,
            mensaje
        })
        .then(testimonial => res.redirect('/testimoniales'))
        .catch(error => console.log(error));
    }

}