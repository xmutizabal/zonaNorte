const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Ranking Zona Norte',
        corredores: [
            {nombre:"Nino Meza", posicion: 1, edad: 42},
            {nombre:"Ismael Porras", posicion: 2, edad: 34},
            {nombre:"Xavier Mutizabal", posicion: 3, edad: 35},
            {nombre:"Felipe Santander", posicion: 4, edad: 18},
            {nombre:"Cristian Perez", posicion: 5, edad: 28},
        ],
        nuevoCorredor:'',
        total: 0
    },
    methods:{
        agregarCorredor () {
            this.corredores.push({nombre: this.nuevoCorredor, posicion: 6, edad: 22});
            this.nuevoCorredor="";
        }
    },
    computed:{
        sumarEdades(){
            this.total = 0;
            for(i of this.corredores){
                this.total = this.total + i.edad;
            }
            return this.total;
        }
    }

})