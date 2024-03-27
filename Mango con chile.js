const mangochilito = require ('mongoose')

const linkDB  = ('mongodb://localhost:27017/utma')

mangochilito.connect(linkDB)
.then(()=> {
    console.log('conexion exitosa')
})
.catch ((err) => {
    console.log('no jalo')
})
const Alumnos_esquemas = new mangochilito.Schema(
    {
        name: {
            type:String 
        },
        apepat: {
            type:String
        },
        numerotel: {
            type:Number
        } 
    }
)

const alumnos = new mangochilito.model('tabla de registro de alumnos', Alumnos_esquemas)

alumnos.create  (
    {
        name:'Daniel',
        apepat:'Arellano',
        numerotel:'4651069713',
    }
)


