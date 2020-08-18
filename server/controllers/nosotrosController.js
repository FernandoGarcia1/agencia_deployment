exports.infoNosotros = (req,res) => {
    res.render('nosotros', {
        pagina: 'Sobre nosotros'  //Pagina es una variable que soloestara disponible para la vista nosotros
    });
}