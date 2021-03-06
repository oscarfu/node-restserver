process.env.PORT = process.env.PORT || 3000;



//entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//vencimiento del token
//60seg 60 min 24 horas 30 dias

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//base de datos
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MOmongo_uri;
}


//google cliente id

process.env.CLIENT_ID = process.env.CLIENT_ID || '575059014199-innci898q1a9sdt05o9i1754l3m3o90u.apps.googleusercontent.com'

process.env.URLDB = urlDB;