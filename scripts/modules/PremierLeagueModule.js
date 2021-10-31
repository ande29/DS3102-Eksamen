const PremierLeagueModule = ( function(){

    const premierLeagueArray = [
        {name: "Arsenal", city: "London", stadium: "Emirates", founded: 1886, titles: 3, manager: "Mikel Arteta", logo: "arsenal-logo.png"},
        {name: "Aston Villa", city: "Birmingham", stadium: "Villa Park", founded: 1, titles: 0, manager: "Dean Smith", logo: "aston-villa-logo.png"},
        {name: "Brentford", city: "London", stadium: "Brentford Community Stadium", founded: 1889, titles: 0, manager: "Thomas Frank", logo: "brentford-logo.png"},
        {name: "Brighton", city: "Brighton", stadium: "Falmer Stadium", founded: 1901, titles: 0, manager: "Graham Potter", logo: "brighton-logo.png"},
        {name: "Burnley", city: "Burnley", stadium: "Turf Moor", founded: 1882, titles: 0, manager: "Sean Dyche", logo: "burnley-logo.png"},
        {name: "Chelsea", city: "London", stadium: "Stamford Bridge", founded: 1, titles: 5, manager: "Thomas Tuchel", logo: "chelsea-logo.png"},
        {name: "Crystal Palace", city: "London", stadium: "Selhurst Park", founded: 1905, titles: 0, manager: "Patrick Vieira", logo: "crystal-palace-logo.png"},
        {name: "Everton", city: "Liverpool", stadium: "Goodison Park", founded: 1878, titles: 0, manager: "Rafael Benitez", logo: "everton-logo.png"},
        {name: "Leeds", city: "Leeds", stadium: "Elland Road", founded: 1, titles: 0, manager: "1919", logo: "leeds-logo.png"},
        {name: "Leicester", city: "Leicester", stadium: "King Power Stadium", founded: 1884, titles: 1, manager: "Brendan Rodgers", logo: "leicester-logo.png"},
        {name: "Liverpool", city: "Liverpool", stadium: "Anfield", founded: 1892, titles: 1, manager: "Jurgen Klopp", logo: "liverpool-logo.png"},
        {name: "Manchester City", city: "Manchester", stadium: "Etihad Stadium", founded: 1880, titles: 5, manager: "Pep Guardiola", logo: "manchester-city-logo.png"},
        {name: "Manchester United", city: "Manchester", stadium: "Old Trafford", founded: 1878, titles: 13, manager: "Ole Gunnar Solskjær", logo: "manchester-united-logo.png"},
        {name: "Newcastle", city: "Newcastle", stadium: "St James Park", founded: 1892, titles: 0, manager: "Steve Bruce", logo: "newcastle-logo.png"},
        {name: "Norwich", city: "Norwich", stadium: "Carrow Road", founded: 1902, titles: 0, manager: "Daniel Farke", logo: "norwich-logo.png"},
        {name: "Southampton", city: "Southampton", stadium: "St Mary's Stadium", founded: 1885, titles: 0, manager: "Ralph Hasenhuttl", logo: "southampton-logo.png"},
        {name: "Tottenham", city: "London", stadium: "Tottenham Hotspur Stadium", founded: 1, titles: 0, manager: "", logo: "spurs-logo.png"},
        {name: "Watford", city: "Watford", stadium: "Vicarage Road", founded: 1881, titles: 0, manager: "Claudio Ranieri", logo: "watford-logo.png"},
        {name: "West Ham", city: "London", stadium: "London Stadium", founded: 1, titles: 1895, manager: "David Moyes", logo: "west-ham-logo.png"},
        {name: "Wolverhampton Wanderers", city: "Wolverhampton", stadium: "Molineux Stadium", founded: 1877, titles: 0, manager: "Bruno Lage", logo: "wolves-logo.png"}
    ]

    const getAllClubs = () => premierLeagueArray;

    const getByTitles = ( titles ) => {
        return premierLeagueArray.filter(club => 
            club.titles.toLowerCase() === titles.toLowerCase() );
    }

    const getByCity = ( city ) => {
        return premierLeagueArray.filter(club => 
            club.city.toLowerCase() === city.toLowerCase() );
    }

    return { getByTitles, getAllClubs, getByCity }

}());

export default PremierLeagueModule;