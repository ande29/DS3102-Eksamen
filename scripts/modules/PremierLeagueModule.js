const PremierLeagueModule = ( function(){

    const premierLeagueArray = [
        {name: "Manchester United", city: "Manchester", stadium: "Old Trafford", founded: 1878, titles: 13, manager: "Ole Gunnar Solskjær", img: "manchester-united.png"},
        {name: "Arsenal", city: "London", stadium: "Emirates", founded: 1886, titles: 3, manager: "Mikel Arteta", img: "arsenal-logo.png"},
        {name: "Aston Villa", city: "Birmingham", stadium: "Villa Park", founded: 1, titles: 0, manager: "Dean Smith", img: "aston-villa-logo.png"},
        {name: "Brentford", city: "London", stadium: "Brentford Community Stadium", founded: 1889, titles: 0, manager: "Thomas Frank", img: "brentford-logo.png"},
        {name: "Brighton", city: "Brighton", stadium: "Falmer Stadium", founded: 1901, titles: 0, manager: "Graham Potter", img: "brighton-logo.png"},
        {name: "Burnley", city: "Burnley", stadium: "Turf Moor", founded: 1882, titles: 0, manager: "Sean Dyche", img: "burnley-logo.png"},
        {name: "Chelsea", city: "London", stadium: "Stamford Bridge", founded: 1, titles: 5, manager: "Thomas Tuchel", img: "chelsea-logo.png"},
        {name: "Crystal Palace", city: "London", stadium: "Selhurst Park", founded: 1905, titles: 0, manager: "Patrick Vieira", img: "crystal-palace-logo.png"},
        {name: "Everton", city: "Liverpool", stadium: "Goodison Park", founded: 1878, titles: 0, manager: "Rafael Benitez", img: "everton-logo.png"},
        {name: "Leeds", city: "Leeds", stadium: "Elland Road", founded: 1, titles: 0, manager: "1919", img: "leeds-logo.png"},
        {name: "Leicester", city: "Leicester", stadium: "King Power Stadium", founded: 1884, titles: 1, manager: "Brendan Rodgers", img: "leicester-logo.png"},
        {name: "Liverpool", city: "Liverpool", stadium: "Anfield", founded: 1892, titles: 1, manager: "Jurgen Klopp", img: "liverpool-logo.png"},
        {name: "Manchester City", city: "Manchester", stadium: "Etihad Stadium", founded: 1880, titles: 5, manager: "Pep Guardiola", img: "manchester-city-logo.png"},
        {name: "Newcastle", city: "Newcastle", stadium: "St James Park", founded: 1892, titles: 0, manager: "Steve Bruce", img: "newcastle-logo.png"},
        {name: "Norwich", city: "Norwich", stadium: "Carrow Road", founded: 1902, titles: 0, manager: "Daniel Farke", img: "norwich-logo.png"},
        {name: "Southampton", city: "Southampton", stadium: "St Mary's Stadium", founded: 1885, titles: 0, manager: "Ralph Hasenhuttl", img: "southampton-logo.png"},
        {name: "Tottenham", city: "London", stadium: "Tottenham Hotspur Stadium", founded: 1, titles: 0, manager: "", img: "spurs-logo.png"},
        {name: "Watford", city: "Watford", stadium: "Vicarage Road", founded: 1881, titles: 0, manager: "Claudio Ranieri", img: "watford-logo.png"},
        {name: "West Ham", city: "London", stadium: "London Stadium", founded: 1895, titles: 0, manager: "David Moyes", img: "west-ham-logo.png"},
        {name: "Wolverhampton Wanderers", city: "Wolverhampton", stadium: "Molineux Stadium", founded: 1877, titles: 0, manager: "Bruno Lage", img: "wolves-logo.png"}
    ]

    const getAllClubs = () => premierLeagueArray;

    const getByTitles = () => {
        return premierLeagueArray.sort(club => {
            (club.titles > 0) === club;
        })
    }

    const getByCity = ( city ) => {
        return premierLeagueArray.filter(club => 
            club.city.toLowerCase() === city.toLowerCase() );
    }

    return { getByTitles, getAllClubs, getByCity }

}());

export default PremierLeagueModule;