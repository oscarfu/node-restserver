process.env.PORT = process.env.PORT || 3000;


//mongodb+srv://oscarfuel:4yTkADikr0x22V5S@cluster0.d5jxo.mongodb.net/cafe
//mongodb://localhost:27017/cafe

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://oscarfuel:4yTkADikr0x22V5S@cluster0.d5jxo.mongodb.net/cafe';
}

process.env.URLDB = urlDB;