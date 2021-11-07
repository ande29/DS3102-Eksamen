//import {cardTemplate, Card} from `../scripts/components/Card.js`;

    const athletesArray = [
        {name: "Karsten Warholm", age:"25", city:"Friidrett", img:"warholm.jpeg"},
        {name: "Magnus Carlsen",  age:"30", city:"Sjakk", img:"magnus-carlsen.jpeg"},
        {name: "Cecilia Brækhus",  age:"40", city:"Boksing", img:"cecilia-b.jpeg"},
        {name: "Suzann Pettersen",  age:"40", city:"Golf", img:"suzann-pettersen.jpeg"},
        {name: "Erling Braut Haaland",  age:"21", city:"Fotball", img:"haaland.jpeg"},
    ];
    console.log(athletesArray);

    const athletesBio = [
        {
            born:"1996",
            bio: "London 9. august: Warholm klinket til fra start og ledet hele veien. Han kom først ut på oppløpet, og holdt unna inn mot mål. Kom inn på tiden 48,35 og var 14 hundredeler foran nummer to. Det var Norges første mannlige løper-VM-gull i friidrett. Drømmen hadde startet med Bislett-seieren to måneder før."
        },
        {
            born:"1990",
            bio: "Magnus Carlsen ble Stormester (Grand Master) i sjakk i 2004 i en alder av 13 år. 22. november 2013 ble han for første gang verdensmester og forsvarte tittelen i 2014, 2016 og 2018. Han vant VM i lynsjakk i 2009, 2014, 2017, og i 2019. I mai 2014 ble Magnus den sjakkspilleren med høyeste FIDE-rating gjennom tidene med en score på 2882."
        },
        {
            born:"1981",
            bio: "Cecilia Brækhus er en norsk bokser og kickbokser som var regnet som verdens beste kvinnelige bokser uansett vektklasse. Som første kvinne hadde hun inntil august 2020 VM-beltene til alle de fire største forbundene WBO, WBA, WBC og IBF. Hun har (per mars 2021) i alt 36 seirer (derav 9 på knockout/teknisk knockout) på 38 kamper som profesjonell"
        },
        {
            born:"1981",
            bio: "Etter en komet-karriere som amatør, som blant annet inkluderte fem norgesmester-titler på rad fra hun var 15 år gammel, ble Tutta profesjonell i september 2000. Siden den gang har hun tatt hele 22 profesjonelle seiere, inkludert to majortriumfer. Fra 2007 til 2015 tilbragte hun til sammen 436 uker på rad i topp-10 på verdensrankingen – en av tidenes prestasjoner i norsk idrett. Hun har imidlertid aldri vært rangert som nummer én i verden, men vært nummer to bak både Annika Sörenstam."
        },
        {
            born:"2000",
            bio: "Erling er en norsk fotballspiller som spiller for den tyske klubben Borussia Dortmund. Erling gikk gradene som spiller i Bryne, og ble solgt til Molde Fotballklubb før ferden gikk til Tyskland og Borussia Dortmund i 2020. Han har så langt scoret 49 mål for Tyskerne. "
        }
    ];
/*
    console.log(athletesBio);


    const sampledInformation = {...athletesArray, ...athletesBio};
    console.log(sampledInformation);

    generateAthletesCard = () =>{
        athletesArray.forEach(athlete => {
            athleteCard += new Card(athlete.name, athlete.img);
            console.log(athleteCard);
    })
}
*/
export default athletesArray;