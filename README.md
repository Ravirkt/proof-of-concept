
# Future ready design 

## Inhoudsopgave

- [Future ready design](#future-ready-design)
  - [Inhoudsopgave](#inhoudsopgave)
  - [Beschrijving](#beschrijving)
  - [Gebruik](#gebruik)
  - [Mobile first](#mobile-first)
  - [Functionaliteiten per pagina in het kort](#functionaliteiten-per-pagina-in-het-kort)
    - [Main pagina](#main-pagina)
    - [Detailspagina klas](#detailspagina-klas)
    - [Opleidingen](#opleidingen)
  - [Componenten](#componenten)
  - [Progressive Enhancement](#progressive-enhancement)
  - [Performance enhancement](#performance-enhancement)
    - [Width en height toevoegen](#width-en-height-toevoegen)
    - [Client side scripting](#client-side-scripting)
  - [Kenmerken](#kenmerken)
    - [Gebruikte technologieën](#gebruikte-technologieën)
  - [Installatie](#installatie)
  - [Bronnen](#bronnen)
  - [Licentie](#licentie)
  - [Licentie](#licentie-1)

## Beschrijving
Dit project is een opdracht die ik heb ontvangen van het softwarebedrijf Future Ready Design om de eerste pagina's te maken van het ONYX LMS. Het doel van deze opdracht om alle behandelde technieken toe te passen binnen het project. 

## Gebruik
De pagina is deel van een dynamische en interactieve systeem waarmee de gebruiker toegang heeft tot behaalde statistieke data van klassen en studenten.

## Mobile first
Bij de ontwikkeling van de pagina is gewerkt volgens het mobile first-principe. Hierbij is ook rekening gehouden met de responsiveness van de typografie voor grotere schermen. Dit is gedaan door middel van CSS clamp(). Deze aanpak is verwerkt in de styleguide van de basic-styling.

De minimale responsive grootte was voor de opdrachtgever tablet formaat.

## Functionaliteiten per pagina in het kort

### Main pagina
Op deze pagina bevindt zich de het overzicht waarin in de gebruiker algemene data kan vinden, bijvoorbeeld:
-  visuele representatie van actieve gebruikers per periode
-  actuelle actieve gebruikers
-  en nog andere statistieke data

Op de pagina heb je ook een overzicht van de klassen die er zijn. Hier kan je ook de progressie van een klas zien doormiddel van een dynamische ronde progressbar. Vervolgens ook een button waarmee je door kan gaan naar de detailspagina van betreffende klas.

### Detailspagina klas
Wanneer je door wilt gaan naar de detailspagina van een klas, kun je op de button klikken. De gebruiker wordt vervolgens naar de detailspagina verwezen. Op deze pagina kun je zien welke studenten er in de klas zitten. Je mogelijkheid om te zoeken op naam en/of te filteren op alfabetische volgorde.

De zoekfunctionaliteit werkt client side zodat de gebruiker direct feedback krijgt. Als javascript uit staat is de zoekbalk nog steeds functioneel.

### Opleidingen
Op deze pagina kan de gebruiker een nieuwe opleiding aanmaken. Dit kan de gebruiker doen door de form in te vullen. Als het aanmaken is gelukt zal de card van de opleiding bovenaan de rij worden toegevoegd. Ook krijgt de gebruiker een duidelijk visueel bericht dat het aanmaken is gelukt.

De POST werkt client side zodat de page niet refreshed en de functie is ook gewoon te gebruiken als Javascript uit staat in de browser.

| Main                                             | Details-tablet                                             |
| -------------------------------------------------------- | -------------------------------------------------- |
| <img src="./public/img/main.gif" width="300"> | <img src="./public/img/details-tablet.gif" width="200"> |

| Details-mobile                                             | Navbar                                         |
| -------------------------------------------------- | ----------------------------------------------------- |
| <img src="./public/img/details-phone.gif" width="200"> | <img src="./public/img/navbar.gif" width="200"> |

## Componenten
De website is gemaakt aan de hand van meerdere componenten. Ik heb bijna elk element van de pagina gemaakt als component zodat deze gemakkelijk vaker gebruikt kan worden op meerdere plekken in de website. Ook heeft elke component zijn eigen Liquid en CSS file zodat het duidelijk van elkaar gescheiden is. Enkele componenten:

- Buttons
- klassen card
- navigatie bar
- form elementen

De rest van de componenten / partials zijn te vinden in de "partials" folder in de repository.

## Progressive Enhancement
Veel componenten op de pagina's hebben progressive enhancement. Dit maakt mogelijk dat de website nog te gebruiken is als het bijvoorbeeld behaalde webtechnieken niet ondersteunt of als Javascript uit staat. Ik heb PE toegepast op onder andere:

- Chart
  - Is gemaakt van Javascript en heeft als fallback een table met alle data
- Switch buttons
  - Is gemaakt met radio buttons
- Navbar button
  - Is gemaakt met radio buttons
- Er is ook client side scripting toegevoegd bij de POST en zoekbalk waardoor de gebruiksvriendelijkheid veel beter is geworden. Als Javascript uit staat werken beide functionaleiten gewoon nog alleen hebben ze minder UX.

## Performance enhancement
Om de performance van de pagina's te verbeteren heb ik een aantal technieken toegepast, waaronder:
- Lazy loading toepassen op bepaalde images
- Een width en height toepassen op images
- Google Fonts downloaden in de repository inplaats van importeren
- Client side scripting voor perceveid performance
- Gebruik van svg's voor klein icons

### Width en height toevoegen
Om layout shifts te voorkomen heb ik een width en height toegevoegt aan elke image. Bij het renderen van de pagina weet de browser wat de height en width van de image is waardoor deze ruimte gereserveerd kan worden. Hierdoor zal de gebruiker geen verschuivingen zien waardoor de user experience verbetert.

### Client side scripting
Om ervoor te zorgen dat de pagina niet refreshed bij de POST en dat de aangemaakte opleiding zonder refresh zichtbaar is is er gebruik gemaakt van client side scripting.

| Post en get zonder refresh                                             
| -------------------------------------------------------- | 
| <img src="./public/img/client-side-post.gif" width="300" height="200px"> | 

## Kenmerken
Voor dit project heb ik gebruik gemaakt van veel moderne webtechnieken, waaronder:

### Gebruikte technologieën
- **HTML & CSS**  
  De basisstructuur en styling van de website zijn opgebouwd met HTML en CSS. De huisstijl van de website is in een aparte styleguide verwerkt.

- **JavaScript**  
  Voor client side scripting is er gebruik gemaakt van Javascript om de user experience te verbeteren.

- **Chart JS**  
  Voor de lijn grafiek is er gebruik gemaakt van de Javascript libary Chart.JS

- **Server-side JavaScript**  
  Voor de back-end is gebruik gemaakt van Node.js en Express om een dynamische en efficiënte webserver te creëren. Nodejs zorgt ervoor dat ik Javascript serverside kan gebruiken en Express maakt mogelijk om routes te maken en responses en requests te verwerken.

- **Liquid Templates**  
  De weergave van de pagina’s gebeurt met behulp van Liquid Templates, waardoor dynamische data eenvoudig kan worden ingeladen en eventueel gemanipuleerd met liquid functies.  

- **API Endpoints**
  De data die wordt opgehaald kom uit api endpoints. Doormiddel van API endpoint url's kunnen vervolgens specifieke data worden opgevraagt.

- **Nodemon**  
  Voor efficienty is er gebruik gemaakt van Nodemon tijdens de development. Dit zorgt ervoor dat de server automatisch herstart bij wijzigingen in de code.

## Installatie
Project lokaal installeren

1. **Fork de repository**  
   Ga naar de [repository pagina](https://github.com/Ravirkt/proof-of-concept) en klik op de **Fork** knop in de rechterbovenhoek om een kopie van de repository naar je eigen GitHub account te maken.

2. **Clone de repository**  
   Clone je geforkte repository naar je lokale computer door het volgende commando uit te voeren in de terminal: git clone https://github.com/Ravirkt/proof-of-concept

3. **Installeer de packages**  
   Voer in de terminal de command **npm install** uit om de packages uit de package.JSON te installeren.

4. **Start de server**  
   Voer in de terminal de command **npm start** uit om de server te starten.





## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).



## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
