const Viaje = require ('../models/Viajes');


exports.consultasViajes = async (req,res) => {
    const viajes = await Viaje.findAll()
    res.render('viajes', {
        pagina: 'Nuestros Viajes',   //Pagina es una variable que soloestara disponible para la vista viajes)
        viajes: viajes
      });
        
}

exports.viajesIndividuales = async (req,res) => {
    const viaje = await Viaje.findByPk(req.params.id);
    res.render('viaje', {                
        viaje: viaje
      })
        
}