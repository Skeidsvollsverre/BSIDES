document.addEventListener('DOMContentLoaded', function() {
    // Get all select elements
    const languageSelect = document.getElementById('language-select');
    const themeSelect = document.getElementById('theme-select');
    const fontSizeSelect = document.getElementById('font-size-select');

    // Load saved settings
    loadSettings();

    // Add event listeners
    languageSelect.addEventListener('change', saveSettings);
    themeSelect.addEventListener('change', saveSettings);
    fontSizeSelect.addEventListener('change', saveSettings);

    function saveSettings() {
        const settings = {
            language: languageSelect.value,
            theme: themeSelect.value,
            fontSize: fontSizeSelect.value
        };
        localStorage.setItem('bsidesSettings', JSON.stringify(settings));
        applySettings(settings);
    }

    function loadSettings() {
        const savedSettings = localStorage.getItem('bsidesSettings');
        if (savedSettings) {
            const settings = JSON.parse(savedSettings);
            languageSelect.value = settings.language;
            themeSelect.value = settings.theme;
            fontSizeSelect.value = settings.fontSize;
            applySettings(settings);
        }
    }

    function applySettings(settings) {
        // Apply theme
        if (settings.theme === 'light') {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        } else {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        }
        
        // Apply font size
        document.body.style.fontSize = settings.fontSize === 'small' ? '14px' : 
                                     settings.fontSize === 'medium' ? '16px' : '18px';
    }
}); 