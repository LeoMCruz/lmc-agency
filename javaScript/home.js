function feedCards(){
    fetch('../data.json')
        .then(response => response.json())
        .then(items => {
            const containerCards = document.getElementById('container-cards');
            items.map(containerCard => {
                const card = document.createElement("div");
                card.classList.add("card");

                const img = document.createElement("img");
                img.src = containerCard.image;

                const price = document.createElement("h3");
                price.textContent = containerCard.price;

                const sizeHouse = document.createElement("p");
                sizeHouse.textContent = containerCard.size + "m²";

                const bedroom = document.createElement("span");
                bedroom.classList.add("rooms");
                bedroom.textContent = containerCard.bedrooms + " quartos";

                const bathroom = document.createElement("span");
                bathroom.classList.add("rooms");
                bathroom.textContent = containerCard.bathrooms + " banheiros";

                card.appendChild(img);
                card.appendChild(price);
                card.appendChild(sizeHouse);
                card.appendChild(bedroom);
                card.appendChild(bathroom);

                containerCards.appendChild(card);
            })
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            const containerCards = document.getElementById('container-cards');
            containerCards.innerHTML = '<p>Error loading data. Please try again later.</p>';
        });
}

feedCards();