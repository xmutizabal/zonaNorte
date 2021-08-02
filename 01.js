const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Ranking Zona Norte',
        corredores: [
            {nombre:"Nino Meza", posicion: 1, edad: 40},
            {nombre:"Ismael Porras", posicion: 2, edad: 34},
            {nombre:"Xavier Mutizabal", posicion: 3, edad: 35},
            {nombre:"Felipe Santander", posicion: 4, edad: 18},
            {nombre:"Cristian Perez", posicion: 5, edad: 28},
        ],
        nuevoCorredor:''
    },
    methods:{
        agregarCorredor () {
            this.corredores.push({nombre: this.nuevoCorredor, posicion: 6, edad: 22});
        }
    }
})