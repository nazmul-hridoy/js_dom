const search = document.querySelector('#search');
const matchList = document.querySelector('#match-list');


//searh district.json & filter it
const searchDistrict = async searchText => {
    const res = await fetch('../data/states.json');
    const data = await res.json();
    //console.log(data);


    //get match with current input
    let matches = data.filter(value => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return value.name.match(regex) || value.abbr.match(regex);
    });

    
    if (searchText.length === 0) {
        matches = [];
    };
    //console.log(matches);
    outputHtml(matches);

};
//show results in html
const outputHtml = matches => {
    if(matches.length > 0){
        const html = matches.map(
            value => `
            <div class="card card-body mb-1">
            <h4>${value.name} (${value.abbr})
            <span class="text-primary">${value.capital}</span></h4>
            <small>Lat: ${value.lat} / Long: ${value.long}</small>
            </div>
            `

        ).join('');
        DataTransferItemList.innerHTML = html;

    }
};

search.addEventListener('input', () => searchDistrict(search.value));