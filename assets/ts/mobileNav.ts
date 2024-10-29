/*--------------------------------------------------------------
 * TypeScript Scripts: Mobile Navigation
 *----------------------------------------------------------------
 * Description: Controls for using mobile navigation menu
 * 
 * Package: rgibsonmusic
*/

/**
 * Setup navigation classes based on window size
 */
export function determineNavType() {
    // Get current viewport window width
    const width = window?.innerWidth;

    // Target site elements
    const nav = document.querySelector('#main-nav');
    const icon = document.querySelector('#mobile-nav-identifier-icon');
    const iconAlt = document.querySelector('#mobile-nav-identifier-icon__alt-span');

    // Determine width
    if (width <= 900) {
        // If width is appropriate for mobile nav:
        
        // Check if nav is currently set to desktop
        if (nav?.classList.contains('main-nav__desktop')) {
            nav?.classList.remove('main-nav__desktop');
        };

        // Apply appropriate classes to 'nav' element
        nav?.classList.add('main-nav__mobile');
        nav?.classList.add('main-nav__mobile__closed');

        // Apply appropriate aria-expanded attribute
        nav.ariaExpanded = "false";
    } else {
        // If width is not appropriate for mobile nav:

        // Check if nav is currently set to mobile
        if (nav?.classList.contains('main-nav__mobile')) {
            nav?.classList.remove('main-nav__mobile');
            nav?.classList.remove('main-nav__mobile__closed');
            nav?.classList.remove('main-nav__mobile__open');
        };

        // Apply appropriate class to 'nav' element
        nav?.classList.add('main-nav__desktop');

        // Apply appropriate aria-expanded attribute
        nav.ariaExpanded = "undefined";
    };

    // Reset icon
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
    iconAlt.innerHTML = "Open navigation menu";
    icon.setAttribute("title", "Open navigation menu");
};

/**
 * Toggle opening and closing the mobile navigation menu
 */
export function toggleNav() {
    // Target site elements
    const nav = document.querySelector('#main-nav');
    const button = document.querySelector('#mobile-menu-button');
    const icon = document.querySelector('#mobile-nav-identifier-icon');
    const iconAlt = document.querySelector('#mobile-nav-identifier-icon__alt-span');

    // Check for current menu state
    if (nav?.classList.contains('main-nav__mobile__closed')) {
        // If 'nav' is currently closed:

        // Switch classes on 'nav' element
        nav.classList.remove('main-nav__mobile__closed');
        nav.classList.add('main-nav__mobile__open');

        // Apply appropriate aria-expanded attribute
        nav.ariaExpanded = "true";

        // Change button icon
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
        button.classList.add('control-button__active');
        // Change icon alt text
        iconAlt.innerHTML = "Close navigation menu";
        icon.setAttribute("title", "Close navigation menu");
    } else {
        // If 'nav' is not currently closed:

        // Switch classes on 'nav' element
        nav.classList.remove('main-nav__mobile__open');
        nav.classList.add('main-nav__mobile__closed');

        // Apply appropriate aria-expanded attribute
        nav.ariaExpanded = "false";

        // Change button icon
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
        button.classList.remove('control-button__active');
        // Change icon alt text
        iconAlt.innerHTML = "Open navigation menu";
        icon.setAttribute("title", "Open navigation menu");
    };
};