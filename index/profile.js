document.getElementById('profile-icon').addEventListener('click', function() {
    var options = document.getElementById('options');
    options.classList.toggle('hidden');
});

document.addEventListener('click', function(event) {
    var options = document.getElementById('options');
    var profileIcon = document.getElementById('profile-icon');
    var isClickInsideProfileIcon = profileIcon.contains(event.target);
    var isClickInsideOptions = options.contains(event.target);

    if (!isClickInsideOptions && !isClickInsideProfileIcon) {
        options.classList.add('hidden');
    }
});
