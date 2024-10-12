const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

// Ensure JavaScript runs after the HTML has loaded
document.addEventListener("DOMContentLoaded", () => {
    fetchDogImages();
});

function fetchDogImages() {
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const images = data.message;
            const imgContainer = document.getElementById('dog-images');
            images.forEach(imgSrc => {
                const imgElement = document.createElement('img');
                imgElement.src = imgSrc;
                imgContainer.appendChild(imgElement);
            });
        })
        .catch(error => console.error("Error fetching images:", error));
}

const breedUrl = "https://dog.ceo/api/breeds/list/all";

// After fetching dog images, fetch dog breeds
document.addEventListener("DOMContentLoaded", () => {
    fetchDogImages();
    fetchDogBreeds();
});

function fetchDogBreeds() {
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breeds = Object.keys(data.message);
            const breedList = document.getElementById('breed-list');
            breeds.forEach(breed => {
                const li = document.createElement('li');
                li.textContent = breed;
                breedList.appendChild(li);
            });
        })
        .catch(error => console.error("Error fetching breeds:", error));
}

function fetchDogBreeds() {
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breeds = Object.keys(data.message);
            const breedList = document.getElementById('breed-list');
            breeds.forEach(breed => {
                const li = document.createElement('li');
                li.textContent = breed;
                li.addEventListener('click', () => {
                    li.style.color = 'blue'; // Change to your preferred color
                });
                breedList.appendChild(li);
            });
        })
        .catch(error => console.error("Error fetching breeds:", error));
}
document.getElementById('breed-filter').addEventListener('change', (event) => {
    const selectedLetter = event.target.value;
    const liItems = document.querySelectorAll('#breed-list li');

    liItems.forEach(li => {
        if (selectedLetter === '' || li.textContent.startsWith(selectedLetter)) {
            li.style.display = 'block'; // Show matching breeds
        } else {
            li.style.display = 'none'; // Hide non-matching breeds
        }
    });
});

