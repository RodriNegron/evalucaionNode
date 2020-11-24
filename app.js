let autos = require("./autos");

const consecionaria = {
    autos: autos,
    buscarAuto: function(patente){
        let resultado=null;
        autos.forEach(function(auto){
            if(auto.patente==patente){
                resultado=auto;
            }
        })
        return resultado;
    },
    venderAuto: function(patente){
        let resultado=this.buscarAuto(patente);
        if (resultado){
            autos[autos.indexOf(resultado)].vendido=true;
        }
    },
    autosParaLaVenta: function(){
        let aLaVenta = autos.filter(autos => autos.vendido==false)
        return aLaVenta;
     },
    autos0KM: function(){
        let resultado= this.autosParaLaVenta();
        resultado=resultado.filter(auto => auto.km <=100);
        return resultado;
    },
    listaDeVentas: function(){

    }

}

//consecionaria.venderAuto("JJK116")
console.log(autos);
//console.log(consecionaria.autosParaLaVenta())
//console.log(consecionaria.autos0KM())