document.addEventListener('DOMContentLoaded', function() {
    const toggleBgButton = document.getElementById('toggle-bg');
    let isDark = false;

    toggleBgButton.addEventListener('click', function() {
        if (isDark) {
            document.body.style.backgroundColor = '#f0f0f0';
            toggleBgButton.style.backgroundColor = '#45a049';
            toggleBgButton.style.color = 'white';
            isDark = false;
        } else {
            document.body.style.backgroundColor = '#333';
            toggleBgButton.style.backgroundColor = '#f0f0f0';
            toggleBgButton.style.color = '#333';
            isDark = true;
        }
    });
});
