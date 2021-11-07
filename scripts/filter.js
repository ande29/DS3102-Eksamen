const selectFilter = document.querySelector("#filter-select")

const selectOptions = (theme) => {
    let htmlTxt;
    
    switch(theme){
        case "premier-league":
            htmlTxt = `
                    <option>Sorter...</option>
                    <option>Navn (A-Z)</option>
                    <option>Navn (Z-A)</option>
                    <option>Vunnet Premier League</option>
                    <option>Ikke vunnet Premier League</option>
                `;
            break;

        case "norwegian-athletes":
            htmlTxt = `
                    <option>Sorter...</option>
                    <option>Navn (A-Z)</option>
                    <option>Navn (Z-A)</option>
                    <option>Alder (høy-lav)</option>
                    <option>Alder (lav-høy)</option>
                `;
                break;
            }
            selectFilter.innerHTML = htmlTxt;
}


export default selectOptions

