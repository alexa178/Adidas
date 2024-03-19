function searchItems() {
    var input, filter, cards, card, i, cardName, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    cards = document.getElementsByClassName('card');

    for (i = 0; i < cards.length; i++) {
        card = cards[i];
        cardName = card.getElementsByClassName('card-name')[0];
        if (cardName) {
            txtValue = cardName.textContent || cardName.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        }
    }
}

// Add event listener for 'keyup' event
document.getElementById('searchInput').addEventListener('keyup', function(event) {
    if (event.keyCode === 13) { // Check if Enter key is pressed
        event.preventDefault();
        searchItems(); // Call the searchItems function
    }
});
