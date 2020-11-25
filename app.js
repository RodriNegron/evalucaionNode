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
    }

}

/*
verificar si una persona puede comprar o no un auto. Esta permite al sistema definir si una persona al consultar por un auto, puede comprarlo. 
Las personas solo sacan los autos en cuotas y tomando dos factores como condición de compra. 
Una es el costo total: si el total de un auto excede lo que la persona considera caro, no va a comprar el auto. 
Otra condición es su capacidad de pago en cuotas: si la capacidad de pago en cuotas supera al costo de la cuota, va a poder pagarlo. 
Si ambas condiciones se cumplen, se realiza la compra.

Es por esto que María te pide que desarrolles la función puedeComprar que reciba por parámetro un auto y una persona y devuelva true si la misma puede comprar el auto.
*/

consecionaria.venderAuto("JJK116")
consecionaria.venderAuto("APL123")

//console.log(consecionaria.listaDeVentas());
console.log(consecionaria.totalDeVentas())