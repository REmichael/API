const baseURL = 'https://api.spacexdata.com/v3/rockets';
let url;

const submitBtn = document.querySelector('.submit');
const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('ul');
const option = document.querySelectorAll('option')
const Results = document.querySelector('.Results');

searchForm.addEventListener('submit', fetchResults);

function fetchResults(e) {
    e.preventDefault();
    let optionValue
    option.forEach(o => {
        if (o.selected === true) {
            optionValue = o.value
        }
    })
    // console.log(option.selected)
    // console.log(e.target[0][0].value)
    // console.log(optionValue)
    url = `${baseURL}/${optionValue}`;
    
    fetch(url)
    .then(function(result) {
    // console.log(result)
    return result.json();
    }).then(function(json) {
    // console. log(json);
        displayResults(json);
    }) 
}

function displayResults(json) {
    while (spaceShips.firstChild) {
        spaceShips.removeChild(spaceShips.firstChild);
    }
    //console.log("Display Results", json);
    //console.log(json.response.rocket);
    // json.forEach(rocket => {
    console.log(json)
    
    let r = document.createElement('li',)
    let cost_per_launch = document.createElement('p');
    let img = document.createElement('img');
    let wiki = document.createElement('a')
    
    wiki.href = json.wikipedia

    spaceShips.appendChild(r)
    spaceShips.appendChild(cost_per_launch)
    spaceShips.appendChild(wiki)
    spaceShips.appendChild(img)
    Results.appendChild(spaceShips)

    img.src =json.flickr_images['0'];
    r.innerText = json.rocket_name;
    cost_per_launch.innerHTML = `<b>$${json.cost_per_launch}</b> per lauch`;
    wiki.innerText = json.wikipedia;

    // })

   

    }
