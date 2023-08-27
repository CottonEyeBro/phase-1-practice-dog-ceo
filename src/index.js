console.log('%c HI', 'color: firebrick')

// Challenge 1
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

// Fetches dog images
fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((resp) => resp.json())
    .then((data) => renderImages(data.message))

// Fetches dog breeds
fetch("https://dog.ceo/api/breeds/list/all")
    .then((resp) => resp.json())
    .then((data) => {
        renderBreeds(Object.keys(data.message))
        filterBreeds(Object.keys(data.message))
    })

function renderImages(urlArray) {
    // Make sure to console.log to confirm everything is working properly
    // console.log(urlArray);

    // adds image elements to the DOM "for each" image in the array

    // 1. forEach loop to get each url from array
    // 2. Create image tag
    // 3. Set image src to url
    // 4. Append image to div with ID of dog-image-container

    const divForImgs =document.querySelector('#dog-image-container')

    urlArray.forEach((url) => {
        // console.log(url);
        const img = document.createElement('img');
        img.src = url;
        divForImgs.append(img);
    })
}

// Challenge 2
const breedUrl = "https://dog.ceo/api/breeds/list/all";

function renderBreeds(breedArray) {
    // console.log(breedArray);

    // adds the breeds to the page in the <ul> provided in index.html
    // 1. Grab ul with ID of dog-breeds
    // 2. Loop over breedArr with forEach to get each breed
    // 3. Make li for each breed
    // 4. Make li textContent = breed
    // 5. Append li to ul

    const ulForBreeds = document.querySelector('#dog-breeds')

    breedArray.forEach((breed) => {
        // console.log(breed);

        const li = document.createElement('li')
        li.textContent = breed
        // Challenge 3
        li.addEventListener("click", (e) => {
            // 'e.target' and 'li' are equivalent
            // console.log(e.target);

            e.target.style.color = "red"
            // "li.style.color = 'purple'" will have the same effect

        })
        ulForBreeds.appendChild(li)
    })
}


// Challenge 4

// 1. Get all dog breeds
// 2. Filter dog breeds based on dropdown letter (change event?)
    // Change event for dropdown
    // Get letter changed to 
// 3. Render filtered dog breeds to that ul

function filterBreeds(breedArray) {
    // consol.log(breedArray);

    const dropdown = document.querySelector("#breed-dropdown");
    // console.log(dropdown);

    dropdown.addEventListener('change', (e) => handleChange(e))

    function handleChange(e) {
        // console.log(e.target.value);
        // 'e.target.value' is the selected letter
        const filterBreeds = breedArray.filter((breed) => {
            return breed.startsWith(e.target.value)
            // Can also be written as 'return breed[0] == e.target.value' or as an 'if...else' statement
        })

        const ul = document.querySelector('#dog-breeds')

        ul.textContent = ""

        renderBreeds(filterBreeds);
    }
}