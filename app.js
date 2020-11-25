const { filter } = require("./autos");
let autos = require("./autos");
let persona = require("./persona");

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
        let autoVendido = autos.filter(autos => autos.vendido==true)
        autoVendido.forEach(function(auto,index){
            autoVendido[index]=auto.precio
        })
        return autoVendido;
    },
    totalDeVentas: function(){
        let resultado = this.listaDeVentas();
        resultado = resultado.reduce((acumulador, precio) =>(acumulador + precio),0)
        return resultado;
    },
    puedeComprar: function(auto, persona){
         return (((auto.precio <= persona.capacidadDePagoTotal) && ((auto.precio/auto.cuotas)<=persona.capacidadDePagoEnCuotas)) ? true : false)
    },
    autosQuePuedeComprar: function(persona){
        let resultado = autos.filter(autos => this.puedeComprar(autos,persona)==true)
        return resultado;
    }

}

/*
 let listaPuedeComprar = this.autosParaLaVenta();
        return this.puedeComprar(listaPuedeComprar, persona) ? console.log(listaPuedeComprar.auto): false;*/

consecionaria.venderAuto("JJK116")
consecionaria.venderAuto("APL123")

//console.log(consecionaria.listaDeVentas());
//console.log(consecionaria.totalDeVentas())
//console.log(persona)
console.log(consecionaria.autosQuePuedeComprar(persona))