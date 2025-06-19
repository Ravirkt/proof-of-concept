
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
  - [Performance enhancement](#performance-enhancement)
    - [Responsive images](#responsive-images)
    - [Webp en avif format](#webp-en-avif-format)
    - [Lazy loading](#lazy-loading)
    - [Width en height toevoegen](#width-en-height-toevoegen)
    - [View transitions](#view-transitions)
    - [Client side scripting](#client-side-scripting)
  - [Resultaat lighthouse](#resultaat-lighthouse)
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


## Performance enhancement
Om de performance van de pagina's te verbeteren heb ik een aantal technieken toegepast, waaronder:
- Gebruik maken van responsive images
- Gebruik maken van webp en avif format
- Lazy loading toepassen op bepaalde images
- Een width en height toepassen op images
- View transition toepassen voor perceveid performance
- Client side scripting voor perceveid performance

### Responsive images
Elke image zit nu in een `<picture>` tag. In de picture tag heb ik een aantal source's met verschillende width's aangemaakt. Nu gaat de browser zelf uitzoeken welke source het beste past bij de omstandigheden. Het kijkt of de browser avif of webp ondersteunt en het kijkt naar de media query(schermgrootte). Vervolgens kiest het dan een uit dat geschikt is. Zijn er geen van de source's geschikt dat pakt het de fallback en dat is de `<img>`.

De images die uit de Directus API worden opgehaald zijn alle veel te groot. Als je ze zo groot inlaadt zonder dat je dat nodig hebt gaat je performance achteruit. Door bovenstaande kiest het zelf welke source gunstig is.

<sub>Voorbeeld source in eventspagina</sub><br>
`<source media="(max-width: 360px)" type="image/avif" srcset="https://fdnd-agency.directus.app/assets/{{ headerEvent.photo.id }}?format=avif&width=360">`

### Webp en avif format
Webp en avif is moderne formatting voor images. De bestandsgrootte is kleiner ten opzichte van jpeg of png wat betere performance biedt.

De images uit de Directus API kun je ophalen als format avif of webp. Dit heb ik ook gedaan. Ik heb ook statische images in mijn assets folder. Ik heb in de assets folder ook de webp en de avif format van deze images toegevoegd. En als fallback heb ik de normale format png.

<sub>Voorbeeld statische image in footer</sub><br>
`
<picture>
    <source type="image/avif" srcset="/assets/image5.avif">
    <source type="image/webp" srcset="/assets/image5.webp">
    <img class="partner-logo" src="/assets/image5.png" loading="lazy" alt="" height="72" width="73">
</picture>
`

### Lazy loading
Ik heb op de verschillende pagina's een aantal ongeveer 10 images. Om performance te verbeteren heb ik bij bepaalde images lazy loading toegevoegd door de html `<loading>`. Hierdoor worden de images pas ingeladen als ze op het scherm komen. Ik heb lazy loading uitgevoerd op alle images buiten de hero-section. Omdat je deze images gelijk ziet op de pagina.

### Width en height toevoegen
Om layout shifts te voorkomen heb ik een width en height toegevoegt aan elke image. Bij het renderen van de pagina weet de browser wat de height en width van de image is waardoor deze ruimte gereserveerd kan worden. Hierdoor zal de gebruiker geen verschuivingen zien waardoor de user experience verbetert.

Bij de images uit de Directus API moeten deze waardes met de fetch worden meegevraagt. Dit wordt gedaan door `photo.id,photo.width,photo.height` toe te voegen aan de fetch.

Voor het bepalen van de waardes van de statische images heb ik een online image inspector gebruikt.

### View transitions
Om ervoor te zorgen dat de website snel is maar ook dat de website als snel wordt ervaren door de gebruiker heb ik een view transition toegevoegd door de view transitions API.

Dit is een multi page transition. Doordat ik de `view-transition-name: event-image-{{id van event}}` op beide images heb gedaan krijg je standaard al een simpele overgangs transition. Maar met css heb ik het aangepast.

`view-transition-name: event-image-{{id van event}}` Dit moet bij beide pagina's hetzelfde zijn. Op de eventpage heet de id Headerevent en op de detailspagina heet het eventDetails.

In de css code snippet hieronder gebruik ik `event-image-*`. Het sterretje betekend dat het alles pakt wat na `event-image-` komt. De `style="view-transition-name: event-image-{{ eventDetails.id }}` en `style="view-transition-name: event-image-{{ headerEvent.id }}"` hebben een andere variabele naam voor de id, maar hebben dezelfde id.

`::view-transition-old` Dit is het eerste element waarop de transition uitgevoerd zal worden (pagina-1)
`::view-transition-new` Dit is het tweede element waarop de transition uitgevoerd zal worden (pagina-2)

https://github.com/Ravirkt/user-experience-enhanced-website/blob/a3b7c5089186f82cb4af6ef60c29c44d3e7eba22/public/styles/view-transition.css#L5-L11


| View-transition                                             
| -------------------------------------------------------- | 
| <img src="./public/assets/view-transition.gif" width="600"> | 

### Client side scripting
Om ervoor te zorgen dat de pagina niet refreshed bij de POST en dat het ingeschreven bedrijf gelijk zichtbaar is zonder refresh is er gebruik gemaakt van client side scripting.

| Post en get zonder refresh                                             
| -------------------------------------------------------- | 
| <img src="./public/assets/post-zonder-refresh.gif" width="250" height="450px"> | 

## Resultaat lighthouse
Resultaten toegepaste performance technieken

| Eventspagina-before                                           |Detailspagina-before                                           |
| -------------------------------------------------------- | -------------------------------------------------- |
| <img src="./public/assets/events-before.png" width="200"> | <img src="./public/assets/details-before.png" width="200"> |

| Eventspagina-after                                             | detailspagina-after                                         |
| -------------------------------------------------- | ----------------------------------------------------- |
| <img src="./public/assets/event-after.png" width="200"> | <img src="./public/assets/details-after.png" width="200"> |


## Kenmerken
Voor dit project heb ik gebruik gemaakt van veel moderne webtechnieken, waaronder:

### Gebruikte technologieën
- **HTML & CSS**  
  De basisstructuur en styling van de website zijn opgebouwd met HTML en CSS. De huisstijl van de website is in een aparte styleguide verwerkt.

- **Server-side JavaScript**  
  Voor de back-end is gebruik gemaakt van Node.js en Express om een dynamische en efficiënte webserver te creëren. Nodejs zorgt ervoor dat ik Javascript serverside kan gebruiken en Express maakt mogelijk om routes te maken en responses en requests te verwerken.

- **Liquid Templates**  
  De weergave van de pagina’s gebeurt met behulp van Liquid Templates, waardoor dynamische data eenvoudig kan worden ingeladen en eventueel gemanipuleerd met liquid functies.  

- **Directus APi**
  De data die wordt opgehaald kom uit de Directus Api. Doormiddel van API endpoint url's kunnen vervolgens specifieke data worden opgevraagt.

- **Nodemon**  
  Voor efficienty is er gebruik gemaakt van Nodemon tijdens de development. Dit zorgt ervoor dat de server automatisch herstart bij wijzigingen in de code.

## Installatie
Project lokaal installeren

1. **Fork de repository**  
   Ga naar de [repository pagina](https://github.com/Ravirkt/user-experience-enhanced-website) en klik op de **Fork** knop in de rechterbovenhoek om een kopie van de repository naar je eigen GitHub account te maken.

2. **Clone de repository**  
   Clone je geforkte repository naar je lokale computer door het volgende commando uit te voeren in de terminal: git clone https://github.com/Ravirkt/user-experience-enhanced-website

3. **Installeer de packages**  
   Voer in de terminal de command **npm install** uit om de packages uit de package.JSON te installeren.

4. **Start de server**  
   Voer in de terminal de command **npm start** uit om de server te starten.





## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).



## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
