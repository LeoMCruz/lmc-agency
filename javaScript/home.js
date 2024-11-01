function feedCards(){
    fetch('../data.json')
        .then(response => response.json())
        .then(items => {
            const containerCards = document.getElementById('container-cards');
            const modal = document.getElementById('modal');
            const modalSize = document.getElementById('modal-size');
            const modalBedrooms = document.getElementById('modal-bedrooms');
            const modalBathrooms = document.getElementById('modal-bathrooms');
            const modalPrice = document.getElementById('modal-price');
            const modalImage = document.getElementById('modal-image');
            const closeModal = document.getElementById('close-modal');
            items.map(containerCard => {
                const card = document.createElement("div");
                card.classList.add("card");

                const img = document.createElement("img");
                img.src = containerCard.image;
                img.addEventListener('click', function() {
                    modalImage.src = containerCard.image;
                    modalPrice.textContent = `${containerCard.price}`;
                    modalPrice.classList.add("#modal-price");
                    modalSize.textContent = `${containerCard.size} m²`;
                    modalBedrooms.textContent = `${containerCard.bedrooms} Quartos `;
                    modalBedrooms.classList.add("rooms-gray");
                    modalBathrooms.textContent = `${containerCard.bathrooms} Banheiros`;
                    modalBathrooms.classList.add("rooms-gray");
                    modal.showModal();
                    modal.addEventListener('click', function(e) {
                        if (e.target == this) modal.close();
                      });
                });

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
            closeModal.addEventListener('click', function() {
                modal.close();
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            const containerCards = document.getElementById('container-cards');
            containerCards.innerHTML = '<p>Error loading data. Please try again later.</p>';
        });
}

feedCards();

