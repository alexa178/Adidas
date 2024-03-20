function selectSizeOption(optionId) {
    var buttons = document.querySelectorAll('.size');
    buttons.forEach(function(button) {
        if (button.id === optionId) {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
    });
}
