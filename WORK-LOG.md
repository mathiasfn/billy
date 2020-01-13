##Billy work log

Skal vi benytte os af quasar framework for at spare noget tid?
> Helt klart

Skal contacts listen være backend eller frontend paginated?
> Backend paginated

Giver det mening at bruge Vuex til så simpel en app?
> Ikke rigtig, når det eneste sted vi bruger contacts er til en backend paginated list

Hvilke felter skal vi inkludere i vores kontakter
> Vi starter bare med: name,  countryId, street, phone

Skal contact create/update være på en side for sig selv eller et modal?
> Vi bruger et modal for nu for at holde det simpelt

Tanker 
>Ville gerne have splittet ContactModal ud i 2 forskellige modals (ContactAddModal og ContactUpdateModal) så den ikke har så meget logik og så den er nemmere at teste

>Burde have fået smidt countries i vuex, eftersom de også skal tilgås i listen for at vise country name ud fra et givent country id.

>Ville gerne have separeret API request metoderne fra components for at gøre dem mere genbrugelige

>Ville gerne gøre ContactTable component “dummere” og mere customizable via slots, så den ikke er ansvarlig for create, update og delete logik/UI

>Så gerne der var blevet lavet mere testing men det ville have taget for lang tid i forhold til denne opgave da det ikke er noget jeg har erfaring med og skal have sat mig ned og lært på et andet tidspunkt
