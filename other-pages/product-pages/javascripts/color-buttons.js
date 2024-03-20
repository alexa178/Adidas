function selectColorOption(optionId) {
    var buttons = document.querySelectorAll('.color');
    buttons.forEach(function(button) {
        if (button.id === optionId) {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
    });
}
