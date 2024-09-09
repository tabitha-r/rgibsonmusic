/*--------------------------------------------------------------
 * TypeScript Scripts: Colour Scheme
 *----------------------------------------------------------------
 * Description: Controls for toggling the site colour scheme
 * 
 * Package: rgibsonmusic
*/

/**
 * Check for and handle preference saved in local storage
 */
export function detectTheme() {
    // Target site elements
    const site = document.querySelector('#site');
    const icon = document.querySelector('#theme-identifier-icon');

    // Check elements targeted correctly
    if (site && icon) {

        // Check for theme saved in local browser storage
        if (localStorage.getItem('theme') === null) {
            // If not saved, check for preferred colour scheme:
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')) {
                // If prefer dark scheme:
                // Set site class to 'theme__dark'
                site.classList.remove('theme__light');
                site.classList.add('theme__dark');
                // Set identifier icon
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
                // Save preference to local storage
                localStorage.setItem('theme', 'dark');
            } else {
                // If prefer light scheme:
                // Only save to local storage as light theme is default
                localStorage.setItem('theme', 'light');
            };
        } else if (localStorage.getItem('theme') === 'dark') {
            // If theme preference for 'dark' is saved:
            // Set site class to 'theme__dark'
            site.classList.remove('theme__light');
            site.classList.add('theme__dark');
            // Set identifier icon
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        };

        // Don't need to handle preference 'light' saved as light theme is default
    };
};

/**
 * Handle user toggling colour scheme
 */
export function toggleTheme() {
    // Target site elements
    const site = document.querySelector('#site');
    const icon = document.querySelector('#theme-identifier-icon');

    // Check elements targeted correctly
    if (site && icon) {

        // Check for current theme
        if (site.classList.contains('theme__dark')) {
            // If current theme is 'dark':
            // Set site class to 'theme__light'
            site.classList.remove('theme__dark');
            site.classList.add('theme__light');
            // Set identifier icon
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            // Save preference to local storage
            localStorage.setItem('theme', 'light');
        } else {
            // If current theme is 'light':
            // Set site class to 'theme__dark'
            site.classList.remove('theme__light');
            site.classList.add('theme__dark');
            // Set identifier icon
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            // Save preference to local storage
            localStorage.setItem('theme', 'dark');
        };

    };
};