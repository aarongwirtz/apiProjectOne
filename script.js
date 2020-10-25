let list = document.getElementById('countryList');


// let demoArray = [
//     {
//         Country: 'justinsGreatCountry',
//     }
// ]

// // listCountry(demoArray);

// //CALLBACK
// let addListItem = (cb, col) => {
//     cb(col)
// }
// addListItem(listCountry, demoArray);



fetch('https://api.covid19api.com/countries')
    .then(resp => resp.json())
    .then(json => {
        console.log(json)
        listCountry(json);
    })

function listCountry(json){
    json.forEach(element => {
        console.log(element.Country);
        let country = document.createElement('li');
        country.innerText = element.Country;
        list.appendChild(country);
    });
}
