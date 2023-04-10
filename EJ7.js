
import {getCurrency} from 'country-currency-map'
let currency="USD"
try{
    let país = getCurrency(currency);
    console.log(`La moneda del país ${país.name} es: ${país.symbolFormat}`)
}
catch(error){
    console.log(null);
}