// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from 'express'

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';

// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

// Maak werken met data uit formulieren iets prettiger
app.use(express.urlencoded({extended: true}))

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid()
app.engine('liquid', engine.express())

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')




https://api.frd-delta.nl/klassen.json

app.get('/', async function (request, response) {
  
  // voor ophalen klassen data
    const apiResponseClasses = await fetch('https://api.frd-delta.nl/klassen.json');
    const classDataJSON = await apiResponseClasses.json()

  // voor ophalen card data
    const apiResponseCardInfo = await fetch('https://api.frd-delta.nl/statistieken.json');
    const cardInfoDataJSON = await apiResponseCardInfo.json()

  response.render('main.liquid', {classes: classDataJSON, statistics: cardInfoDataJSON,  });
})

app.get('/chartdata', async function (request, response) {
  
  // voor ophalen chart data
    const apiResponseCardInfo = await fetch('https://api.frd-delta.nl/statistieken.json');
    const cardInfoDataJSON = await apiResponseCardInfo.json()

    console.log(cardInfoDataJSON.actieveGebruikers[0].datum)
    console.log(cardInfoDataJSON.actieveGebruikers[1].datum)
    console.log(cardInfoDataJSON.actieveGebruikers[2].datum)
    console.log(cardInfoDataJSON.actieveGebruikers[3].datum)
    console.log(cardInfoDataJSON.actieveGebruikers[4].datum)
    console.log(cardInfoDataJSON.actieveGebruikers[5].datum)
    console.log(cardInfoDataJSON.actieveGebruikers[6].datum)
    console.log(cardInfoDataJSON.actieveGebruikers[7].datum)
    console.log(cardInfoDataJSON.actieveGebruikers[8].datum)
    console.log(cardInfoDataJSON.actieveGebruikers.datum)

    console.log(cardInfoDataJSON.actieveGebruikers[0].gebruikers)
    console.log(cardInfoDataJSON.actieveGebruikers[1].gebruikers)
    console.log(cardInfoDataJSON.actieveGebruikers[2].gebruikers)
    console.log(cardInfoDataJSON.actieveGebruikers[3].gebruikers)
    console.log(cardInfoDataJSON.actieveGebruikers[4].gebruikers)
    console.log(cardInfoDataJSON.actieveGebruikers[5].gebruikers)
    console.log(cardInfoDataJSON.actieveGebruikers[6].gebruikers)
    console.log(cardInfoDataJSON.actieveGebruikers[7].gebruikers)
    console.log(cardInfoDataJSON.actieveGebruikers[8].gebruikers)



    let userAmount = [cardInfoDataJSON.actieveGebruikers[0].gebruikers,cardInfoDataJSON.actieveGebruikers[1].gebruikers,cardInfoDataJSON.actieveGebruikers[2].gebruikers,cardInfoDataJSON.actieveGebruikers[3].gebruikers,cardInfoDataJSON.actieveGebruikers[4].gebruikers,cardInfoDataJSON.actieveGebruikers[5].gebruikers,cardInfoDataJSON.actieveGebruikers[6].gebruikers,cardInfoDataJSON.actieveGebruikers[7].gebruikers,cardInfoDataJSON.actieveGebruikers[8].gebruikers]

    let chartDates = [cardInfoDataJSON.actieveGebruikers[0].datum, cardInfoDataJSON.actieveGebruikers[1].datum, cardInfoDataJSON.actieveGebruikers[2].datum, cardInfoDataJSON.actieveGebruikers[3].datum, cardInfoDataJSON.actieveGebruikers[4].datum, cardInfoDataJSON.actieveGebruikers[5].datum, cardInfoDataJSON.actieveGebruikers[6].datum, cardInfoDataJSON.actieveGebruikers[7].datum, cardInfoDataJSON.actieveGebruikers[8].datum ]

    console.log(chartDates)
    console.log(userAmount)

response.json({ chartDates, userAmount });
})












app.get('/details/:id', async function (request, response) {

 const test = "hallo test"

  response.render('details.liquid', {details: test});
});































// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000; als deze applicatie ergens gehost wordt, waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, gebruik daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  console.log(`Project draait via http://localhost:${app.get('port')}/\n\nSucces deze sprint. En maak mooie dingen! 🙂`)
})