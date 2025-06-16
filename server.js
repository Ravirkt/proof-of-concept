import express from 'express'

import { filters, Liquid } from 'liquidjs';

const app = express()

app.use(express.urlencoded({ extended: true }))


app.use(express.static('public'))

const engine = new Liquid()
app.engine('liquid', engine.express())


app.set('views', './views')

// https://run.mocky.io/v3/5d73cf61-863b-44a9-94f3-029e2f5fe3e1
// https://api.frd-delta.nl/klassen.json

app.get('/', async function (request, response) {
  try {
    // voor ophalen klassen data
    const apiResponseClasses = await fetch('https://api.frd-delta.nl/klassen.json');
    const classDataJSON = await apiResponseClasses.json()

    // voor ophalen card data
    const apiResponseCardInfo = await fetch('https://api.frd-delta.nl/statistieken.json');
    const cardInfoDataJSON = await apiResponseCardInfo.json()

    console.log(classDataJSON)

    response.render('main.liquid', { classes: classDataJSON, statistics: cardInfoDataJSON, });

  } catch {
    console.error("Het gaat niet goed")
  }
})

app.get('/chartdata', async function (request, response) {
  try {
    // voor ophalen chart data
    const apiResponseCardInfo = await fetch('https://api.frd-delta.nl/statistieken.json');
    const cardInfoDataJSON = await apiResponseCardInfo.json()

    const date = cardInfoDataJSON.actieveGebruikers.map(dbDate => dbDate.datum);
    console.log(date)

    const activeUsers = cardInfoDataJSON.actieveGebruikers.map(dbUsers => dbUsers.gebruikers);
    console.log(activeUsers)

    response.json({ date, activeUsers });

  } catch {
    console.error("Het gaat niet goed")
  }
})

app.get('/progressdata', async function (request, response) {
  try {
    // voor ophalen percentage data van de klassen
    const apiResponseprogressData = await fetch('https://api.frd-delta.nl/klassen.json');
    const progressDataJSON = await apiResponseprogressData.json()
    console.log(progressDataJSON);

    const progressPink = progressDataJSON[0].voortgang
    const progressPurple = progressDataJSON[1].voortgang
    const progressBlue = progressDataJSON[2].voortgang
    const progressYellow = progressDataJSON[3].voortgang

    response.json({ progressPink, progressPurple, progressBlue, progressYellow });
  }
  catch {
    console.error("Het gaat niet goed")
  }
})

// https://api.frd-delta.nl/klassen/klas-blauw.json

app.get('/details/:id', async function (request, response) {

  const { sorteren, searchStudents } = request.query;
  console.log(sorteren, searchStudents)

  try {
    const apiResponseClassData = await fetch('https://api.frd-delta.nl/klassen/' + request.params.id + '.json');
    const classDataJSON = await apiResponseClassData.json()

    if (sorteren === "a-z") {
      classDataJSON.studenten.sort()
    } if (sorteren === "z-a") {
      classDataJSON.studenten.sort().reverse();
    } else {
      classDataJSON.studenten
    }

    const filteredStudents = classDataJSON.studenten.filter(student =>
      student.toLowerCase().includes(searchStudents)
    );

    console.log(filteredStudents)

    response.render('details.liquid', { classInformation: classDataJSON, students: classDataJSON.studenten, search: filteredStudents });

  } catch {
    console.error("Het gaat niet goed")
  }
});

// post
app.post('/opleidingen', async function (request, response) {

  const { opleiding } = request.body;
  console.log(request.body)

  const apiResponse = await fetch('https://684f1804f0c9c9848d2a1123.mockapi.io/api/klassen/opleiding', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      opleiding: opleiding,
    })
  });

  console.log(apiResponse)

  response.redirect(303, '/opleidingen' + '?success=true');
});

app.get('/opleidingen', async function (request, response) {
  try {
    const success = request.query.success === 'true';
    console.log(success);

    const apiResponseCourses = await fetch('https://684f1804f0c9c9848d2a1123.mockapi.io/api/klassen/opleiding');
    const coursesDataJSON = await apiResponseCourses.json()

    const courses = coursesDataJSON.map(dbCourse => dbCourse.opleiding);
    console.log(courses)

    response.render('opleidingen.liquid', { courses, success });
  }
  catch {
    console.error("Het gaat niet goed")
  }
})



























// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000; als deze applicatie ergens gehost wordt, waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, gebruik daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  console.log(`Project draait via http://localhost:${app.get('port')}/\n\nSucces deze sprint. En maak mooie dingen! 🙂`)
})