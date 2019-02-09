const config= {
    'saludo':{
    'eslogan':'Integra System ejemplo',
    'image': 'img/1.jpg',
    'text-buton': 'Comprar!'
    },
    'descripcion':{
        'tittle':'Quienes somos',
        'imagen':'img/koder.jpg',
        'text_descriptiion':'somos la neta del planeta',
    },
    'products':{
        'tittle': 'Telecaster',
        'subtittle':'the best Telecaster',
        'image':'img/motoshonda.png'
    },

    {
        'tittle': 'Gibson',
        'subtittle':'the best gibson',
        'image':'img/motoshonda.png'
    }


}



//ES6 saludo
const init= (config) => {
//    console.log(saludo);
    const { saludo } = config
$('#eslogan').html(config.saludo.eslogan)

$('#contenedor-saludo').css('background-image', `url(${config.saludo.image})`)
$('#contenedor-saludo > button').html(config.saludo.text-button)
}

//Descripcion

$('#descripcion-titulo').html(config.descripcion.tittle)
$('#contenedor-descripcion > .contenido >img').html(config.descripcion.imagen)

//products

createProducts()


$(() =>{
    init(config)
})

const createProducts(){

}